import * as React from "react"
import { useState, useEffect, useRef } from "react"
import * as styles from "./dialog.module.css"
import colors from "./colors"
import Form from "./form"
import { useSupportChat } from "./hooks"

export default function Dialog({ options, closeChat, ...rest }) {
  const conversation = useRef(null)
  const [messages, sendMessage] = useSupportChat()

  const handleSubmit = text => {
    // placeholder
    sendMessage(text)

    // scroll to bottom
    if (!conversation.current) return
    setTimeout(() => {
      conversation.current.scrollTop = conversation.current.scrollHeight
    }, 100)
  }

  const title = options.title || "👋 Hello! How can we help?"

  return (
    <>
      <div className={styles.overlay} onClick={closeChat} />
      <div className={["gatsby-plugin-chat-bot", styles.root].join(" ")}>
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
          {messages.map(message => (
            <li
              key={message.time}
              style={
                message.sender === "user"
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
                message.sender === "user" ? styles.userMessage : styles.message
              }
            >
              {message.text}
            </li>
          ))}
        </ul>
        <Form onSubmit={handleSubmit} closeChat={closeChat} />
      </div>
    </>
  )
}
