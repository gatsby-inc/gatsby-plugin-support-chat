import { GatsbyFunctionRequest, GatsbyFunctionResponse } from "gatsby"
import { setKey, save } from "../utils/cache.ts"

let channelID: string = process.env.CHANNEL_ID

export default async function handler(
  req: GatsbyFunctionRequest,
  res: GatsbyFunctionResponse
) {
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
    await setKey(eventTime, message)
    save()
  }

  return res.status(200).end()
}
