import * as React from "react"
import { useState, useEffect, useRef } from "react"
import * as styles from "./dialog.module.css"
import colors from "./colors"
import Form from "./form"
import { useSupportChat } from "./hooks"

export default function Dialog({ open, options, closeChat, ...rest }) {
  const conversation = useRef(null)
  const [messages, sendMessage, userID] = useSupportChat()

  useEffect(() => {
    if (!conversation.current) return
    conversation.current.scrollTop = conversation.current.scrollHeight
  }, [messages.length])

  const title = options.title || "👋 Hello! How can we help?"
  const isUser = id => id === userID || id === "USER"

  return (
    <>
      <div
        style={{
          display: open ? "block" : "none",
        }}
        className={styles.overlay}
        onClick={closeChat}
      />
      <div
        style={{
          display: open ? "flex" : "none",
        }}
        className={["gatsby-plugin-chat-bot", styles.root].join(" ")}
      >
        <header
          style={{
            color: "white",
            backgroundColor: colors.blue,
          }}
          className={styles.header}
        >
          <h2 className={styles.title}>{title}</h2>
          <button
            className={styles.close}
            title="Close chat"
            onClick={closeChat}
          >
            ×
          </button>
        </header>
        <ul
          ref={conversation}
          className={styles.conversation}
          style={{
            backgroundColor: colors.lightGray,
            borderBottom: `1px solid ${colors.border}`,
          }}
        >
          {messages.map((message, i) => (
            <li
              key={i}
              style={
                isUser(message.sender)
                  ? {
                      color: "white",
                      backgroundColor: colors.blue,
                    }
                  : {
                      color: "black",
                      backgroundColor: colors.lightGray,
                    }
              }
              className={
                isUser(message.sender) ? styles.userMessage : styles.message
              }
            >
              {message.text}
            </li>
          ))}
        </ul>
        <Form sendMessage={sendMessage} closeChat={closeChat} />
      </div>
    </>
  )
}
