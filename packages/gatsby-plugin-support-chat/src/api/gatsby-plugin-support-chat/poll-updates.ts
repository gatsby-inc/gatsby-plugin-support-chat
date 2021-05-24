import { cacheLoad } from "../../utils/cache"
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

export default async function handler(
  req: GatsbyFunctionRequest,
  res: GatsbyFunctionResponse
) {
  let threadTs: string = req.body.thread
  const cache = cacheLoad(threadTs)
  const threadMessages = Object.values(cache.all())

  if (threadMessages.length === 0 && !!threadTs) {
    // We can't find any messages in our local cache so check Slack for
    // messages
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
      // 2. put them in cache
      formattedMessages.forEach(async msg => {
        cache.setKey(msg.timestamp, msg)
      })
      cache.save(true)
      // 3. return them
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

    // Filter out any messages older and including the date of the last message
    // the client has.
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
