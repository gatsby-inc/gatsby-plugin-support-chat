import { useState, useRef } from "react"

const endpoints = {
  send: "/api/send-message",
  poll: "/api/poll-updates",
}

const DELAY = 5000

export const useSupportChat = () => {
  const [messages, setMessages] = useState([])
  const [thread_ts, setThreadID] = useState(null)
  let timer

  // polling for messages
  timer = setTimeout(() => {
    fetch(endpoints.poll, {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ thread_ts }),
    })
      .then(res => res.json())
      .then(data => {
        console.log({ data })
        if (data.text === "") return

        setMessages([
          ...messages,
          {
            user: "bot",
            text: data.text,
            time: Date.now(),
          },
        ])
      })
  }, DELAY)

  const sendMessage = text => {
    var params = {
      text,
      thread_ts,
    }
    setMessages([
      ...messages,
      {
        user: "user",
        text,
        time: Date.now(),
      },
    ])

    fetch(endpoints.send, {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (!thread_ts) setThreadID(data.thread_ts)
      })
  }

  return [messages, sendMessage]
}
