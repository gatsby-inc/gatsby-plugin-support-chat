import { GatsbyFunctionRequest, GatsbyFunctionResponse } from "gatsby"
import { WebClient } from "@slack/web-api"

let channelID: string = process.env.CHANNEL_ID
let token: string = process.env.SLACK_TOKEN

const web = new WebClient(token)

interface SlackRequest {
  channel: string
  text: string
  thread_ts?: string
}

export default async function handler(
  req: GatsbyFunctionRequest,
  res: GatsbyFunctionResponse
) {
  if (req.method != "POST") {
    return res.status(401).json({
      message: "Use post method",
    })
  }
  let requestData: SlackRequest

  try {
    if (req.body.thread_ts != null) {
      requestData = {
        channel: channelID,
        text: req.body.message,
        thread_ts: req.body.thread_ts,
      }
    } else {
      requestData = { channel: channelID, text: req.body.message }
    }
    const result = await web.chat.postMessage(requestData).then(res => {
      return res
    })
    res.json(result)
  } catch (error) {
    console.log(error)
    res.status(500).send(error)
  }
}
