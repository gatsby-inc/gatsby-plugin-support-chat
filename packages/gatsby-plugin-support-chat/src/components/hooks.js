import { useState, useEffect, useRef } from "react"

const endpoints = {
  send: "/api/send-message",
  poll: "/api/poll-updates",
}

const DELAY = 4000
const STORAGE_KEY = "GATSBY-PLUGIN-SUPPORT-CHAT-ID"
const USER_ID = "GATSBY-PLUGIN-SUPPORT-CHAT-USER-ID"

export const useSupportChat = () => {
  const [messages, setMessages] = useState([])
  const [lastTimestamp, setLastTimestamp] = useState(null)
  const [thread_ts, setThreadID] = useState(() =>
    localStorage.getItem(STORAGE_KEY)
  )
  const [userID, setUserID] = useState(() => localStorage.getItem(USER_ID))

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
            last_date_retrieved: lastTimestamp,
          }),
        })
          .then(res => res.json())
          .then(data => {
            if (data.length === 0) return
            const newMessages = data.map(d => ({
              text: d.message,
              time: d.timestamp,
              sender: d.user,
            }))
            const last = data[data.length - 1].timestamp
            setLastTimestamp(last)

            const timestampedMessages = messages.filter(m => !!m.time)
            let spreadMessages = [...timestampedMessages, ...newMessages]
            setMessages(spreadMessages)
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
        sender: userID || "USER",
        text,
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
        if (!userID) {
          setUserID(data.message?.user)
          localStorage.setItem(USER_ID, data.message?.user)
        }
      })
  }

  return [messages, sendMessage, userID]
}
