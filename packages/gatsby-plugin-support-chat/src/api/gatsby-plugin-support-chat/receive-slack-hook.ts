import { GatsbyFunctionRequest, GatsbyFunctionResponse } from "gatsby"
import { cacheLoad } from "../../utils/cache"

let channelID: string = process.env.CHANNEL_ID

export default async function handler(
  req: GatsbyFunctionRequest,
  res: GatsbyFunctionResponse
) {
  const cache = cacheLoad("poll-cache")
  console.log(`all cache`, cache.all())
  console.log(req.body)
  if (req.body.challenge) {
    return res.json({ challenge: req.body.challenge })
  }

  if (
    req.body.event.text != "" &&
    req.body.event.channel == channelID &&
    req.body.event.thread_ts
  ) {
    const eventTime = req.body.event_time
    const message = {
      message: req.body.event.text,
      thread_ts: req.body.event.thread_ts || req.body.event.event_ts,
      timestamp: req.body.event.event_ts,
      user: req.body.event.user,
    }
    cache.setKey(message.timestamp, message)
    cache.save(true)
  }

  return res.status(200).end()
}
