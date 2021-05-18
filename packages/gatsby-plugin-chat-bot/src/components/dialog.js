import * as React from 'react'
import { useState, useEffect, useRef } from 'react'
import * as styles from './dialog.module.css'

export default function Dialog ({
  closeChat,
  ...rest
}) {
  const [text, setText] = useState('')
  const conversation = useRef(null)
  const input = useRef(null)

  // placeholder
  const [messages, setMessages] = useState([])

  const handleTextChange = e => {
    const { value } = e.target
    setText(value)
  }

  const handleSubmit = e => {
    e.preventDefault();
    // placeholder
    setMessages([ ...messages, text ])
    setText('')

    // scroll to bottom
    if (!conversation.current) return
    setTimeout(() => {
      conversation.current.scrollTop = conversation.current.scrollHeight
    }, 100)
  }

  useEffect(() => {
    if (!input.current) return
    input.current.focus()
  }, [])

  return (
    <>
      <div
        className={styles.overlay}
        onClick={closeChat}
      />
      <div className={styles.root}>
        <header className={styles.header}>
          <h2 className={styles.title}>Dialog</h2>
          <button
            className={styles.close}
            onClick={closeChat}>
            &times;
          </button>
        </header>
        <ul
          ref={conversation}
          className={styles.conversation}>
          {messages.map(message => (
            <li key={message}>
              {message}
            </li>
          ))}
        </ul>
        <form
          className={styles.form}
          onSubmit={handleSubmit}>
          <label
            className={styles.label}
            htmlFor='chat-message'>
            Message:
          </label>
          <input
            id='chat-message'
            name='chat-message'
            ref={input}
            className={styles.input}
            value={text}
            onChange={handleTextChange}
          />
          <button
            className={styles.button}>
            Send
          </button>
        </form>
      </div>
    </>
  )
}
