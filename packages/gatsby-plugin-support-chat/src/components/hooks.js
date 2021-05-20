import { useState, useEffect, useRef } from "react"

const endpoints = {
  send: "/api/send-message",
  poll: "/api/poll-updates",
}

const DELAY = 1000
const STORAGE_KEY = "GATSBY-PLUGIN-SUPPORT-CHAT-ID"

export const useSupportChat = () => {
  const [messages, setMessages] = useState([])
  const [thread_ts, setThreadID] = useState(() =>
    localStorage.getItem(STORAGE_KEY)
  )

  // polling for messages
  useEffect(() => {
    let timer = setInterval(() => {
      fetch(endpoints.poll, {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          thread_ts,
          thread: thread_ts,
        }),
      })
        .then(res => res.json())
        .then(data => {
          console.log(data)
          if (!data.text) return

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
    return () => {
      clearInterval(timer)
    }
  }, [])

  const sendMessage = text => {
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
      body: JSON.stringify({
        message: text,
        thread_ts,
      }),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (!thread_ts) {
          setThreadID(data.thread_ts)
          localStorage.setItem(STORAGE_KEY, data.thread_ts)
        }
      })
  }

  return [messages, sendMessage]
}
