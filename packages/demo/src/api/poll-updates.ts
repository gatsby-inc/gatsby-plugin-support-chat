import { getAll, cacheLoad, setKey, save } from "../utils/cache.ts"
import { GatsbyFunctionRequest, GatsbyFunctionResponse } from "gatsby"
import { WebClient } from "@slack/web-api"

let channelID: string = process.env.CHANNEL_ID
let token: string = process.env.SLACK_TOKEN

const web = new WebClient(token)

interface PollMessage {
  message: string
  thread_ts: string
  timestamp: string
}

let cache = cacheLoad("poll-cache")

async function LatestDate(messages) {
  return new Date(
    Math.max(
      ...messages.map(message => new Date(parseInt(message.timestamp) * 1000))
    )
  )
}

export default async function handler(
  req: GatsbyFunctionRequest,
  res: GatsbyFunctionResponse
) {
  const messages = getAll()
  let threadTs: string = req.body.thread

  let threadMessages: Array<PollMessage> = Object.values(messages).filter(
    key => key.thread_ts == threadTs
  )

  if (threadMessages.length === 0 && !!threadTs) {
    // Check if Slack has any messages
    const uncachedMessages = await web.conversations.replies({
      channel: channelID,
      ts: threadTs,
    })
    if (uncachedMessages.messages.length) {
      // 1. map and format
      const formattedMessages = uncachedMessages.messages.map(m => ({
        message: m.text,
        thread_ts: m.thread_ts || m.ts,
        timestamp: m.ts,
        user: m.user,
      }))
      // 2. put it in cache
      formattedMessages.forEach(async msg => {
        setKey(msg.timestamp, msg)
      })
      save()
      // 3. return it
      console.log("resetting cache")
      return res.json(formattedMessages)
    } else {
      return res.json([])
    }
  } else {
    console.log("got messages", threadMessages.length)
    let sortedMessage: Array<PollMessage> = threadMessages.sort((a, b) =>
      a.timestamp > b.timestamp ? 1 : b.timestamp > a.timestamp ? -1 : 0
    )

    let lastDateRetrieved: number =
      parseInt(req.body.last_date_retrieved || 0) * 1000
    console.log({ lastDateRetrieved })
    let recentDate: Date = await LatestDate(sortedMessage).then(res => {
      return res
    })

    if (lastDateRetrieved == undefined) {
      return res.json(sortedMessage)
    } else {
      let latestMessages: Array<PollMessage> = sortedMessage.filter(key => {
        return (
          new Date(parseInt(key["timestamp"]) * 1000) >
          new Date(lastDateRetrieved)
        )
      })
      return res.json(latestMessages)
    }
  }
}
