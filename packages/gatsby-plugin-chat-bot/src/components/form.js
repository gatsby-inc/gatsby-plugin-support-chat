import * as React from 'react'
import { useState, useEffect, useRef } from 'react'
import SendIcon from './send-icon'
import * as styles from './form.module.css'
import colors from './colors'

export default function Form ({
  onSubmit,
  closeChat,
  ...props
}) {
  const [text, setText] = useState('')
  const input = useRef(null)

  const handleChange = e => {
    const { value } = e.target
    setText(value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (text === '') return
    sendMessage(text)
    onSubmit(text)
    setText('')
    if (input.current) input.current.focus()
  }



  // Slack thread id received after sending message
  var thread_ts = null

  const sendMessage = text => {
      var params = {
        text : text,
        thread_ts : thread_ts
      }

      // replace with function api endpoint
      var url = "http://127.0.0.1:80/test.php";
      fetch(url, {
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(params)
      }).then(response => {
          const contentType = response.headers.get("content-type");
          if (contentType && contentType.indexOf("application/json") !== -1) {
              return response.json().then(data => {
                // received json response
                thread_ts = data.thread_ts;
                console.log(thread_ts);

                // begin to poll for message updates
                //setTimeout(pollForUpdates, 3000);
              });
          } else {
              return response.text().then(text => {
                // ignore non-json response
              });
          }
      });

      return
  }





  const handleKeyPress = e => {
    switch (e.key) {
      case 'Enter':
        if (e.shiftKey) return
        e.preventDefault()
        handleSubmit(e)
        break
      default:
        break
    }
  }

  const handleKeyDown = e => {
    switch (e.key) {
      case 'Escape':
        closeChat()
        break
    }
  }

  useEffect(() => {
    if (!input.current) return
    input.current.focus()
  }, [])

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit}>
      <textarea
        id='chat-message'
        name='chat-message'
        aria-label='Message'
        ref={input}
        className={styles.input}
        rows='3'
        value={text}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        onKeyDown={handleKeyDown}
        placeholder='Type a message...'
      />
      <button
        title='Send'
        className={styles.button}
        style={{
          color: colors.darkGray,
        }}>
        <SendIcon />
      </button>
    </form>
  )
}
