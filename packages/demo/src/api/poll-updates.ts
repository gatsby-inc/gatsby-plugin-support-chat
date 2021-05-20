import { getAll, cacheLoad, save } from "../utils/cache.ts"
import { GatsbyFunctionRequest, GatsbyFunctionResponse } from "gatsby"

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
  const messages = await getAll().then(res => {
    return res
  })
  let threadTs: string = req.body.thread

  let threadMessages: Array<PollMessage> = Object.values(messages).filter(
    key => key["thread_ts"] == threadTs
  )

  if (threadMessages.length === 0) {
    return res.json("no message")
  } else {
    let sortedMessage: Array<PollMessage> = threadMessages.sort((a, b) =>
      a.timestamp > b.timestamp ? 1 : b.timestamp > a.timestamp ? -1 : 0
    )

    let lastDateRetrieved: string = cache.getKey(threadTs)
    let recentDate: Date = await LatestDate(sortedMessage).then(res => {
      return res
    })

    if (lastDateRetrieved == undefined) {
      cache.setKey(threadTs, recentDate)
      cache.save()
      return res.json(sortedMessage)
    } else {
      let latestMessages: Array<PollMessage> = sortedMessage.filter(key => {
        return (
          new Date(parseInt(key["timestamp"]) * 1000) >
          new Date(lastDateRetrieved)
        )
      })
      cache.setKey(threadTs, recentDate)
      cache.save()
      return res.json(latestMessages)
    }
  }
}
