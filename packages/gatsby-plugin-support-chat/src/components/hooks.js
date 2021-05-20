import { useState, useEffect, useRef } from "react"

const endpoints = {
  send: "/api/send-message",
  poll: "/api/poll-updates",
}

const DELAY = 8000
const STORAGE_KEY = "GATSBY-PLUGIN-SUPPORT-CHAT-ID"

export const useSupportChat = () => {
  const [messages, setMessages] = useState([])
  const [thread_ts, setThreadID] = useState(() =>
    localStorage.getItem(STORAGE_KEY)
  )

  // polling for messages
  useEffect(() => {
    let timer
    if (thread_ts) {
      timer = setInterval(() => {
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
            if (data.length === 0) return
            const newMessages = data.map(d => ({
              text: d.message,
              time: Date.now(),
              sender: "bot",
            }))

            setMessages([...messages, ...newMessages])
          })
      }, DELAY)
    }

    return () => {
      clearInterval(timer)
    }
  }, [thread_ts, messages])

  const sendMessage = text => {
    setMessages([
      ...messages,
      {
        sender: "user",
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
        if (!thread_ts) {
          setThreadID(data.message?.ts)
          localStorage.setItem(STORAGE_KEY, data.message?.ts)
        }
      })
  }

  return [messages, sendMessage]
}
