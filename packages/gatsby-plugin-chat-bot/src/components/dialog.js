import * as React from 'react'
import { useState, useEffect, useRef } from 'react'
import * as styles from './dialog.module.css'
import colors from './colors'
import Form from './form'

export var pollingTimeout = null;

export default function Dialog ({
  options,
  closeChat,
  ...rest
}) {
  const conversation = useRef(null)

  // placeholder
  const [messages, setMessages] = useState([
    {
      user: 'bot',
      text: 'Hello! How can we help you?',
      time: Date.now(),
    },
  ])

  const handleSubmit = text => {
    // placeholder
    setMessages([ ...messages, {
      time: Date.now(),
      text,
      sender: 'user',
    } ])

    // scroll to bottom
    if (!conversation.current) return
    setTimeout(() => {
      conversation.current.scrollTop = conversation.current.scrollHeight
    }, 100)

    // Begin to poll for message updates every 3s
    if(pollingTimeout != null) {
      clearTimeout(pollingTimeout);
      pollingTimeout = setTimeout(pollForUpdates, 3000);
    }
    else {
      pollingTimeout = setTimeout(pollForUpdates, 3000);
    }

  }


  function pollForUpdates() {
    console.log("polling...");

    var params = {
    }

    // replace with function api endpoint
    var url = "http://127.0.0.1:80/test2.php";
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
              //thread_ts = data.thread_ts;
              //console.log(thread_ts);
              console.log(data.text);

              if(data.text != '') {

                // for some reason this always forgets the last message, not sure why
                setMessages([ ...messages, {
                  user: 'bot',
                  text: data.text,
                  time: Date.now(),
                } ])

                // scroll to bottom
                if (!conversation.current) return
                setTimeout(() => {
                  conversation.current.scrollTop = conversation.current.scrollHeight
                }, 100)

              }

            });
        } else {
            return response.text().then(text => {
              // ignore non-json response
            });
        }
    });

    // Continue to poll for updates every 3s
    clearTimeout(pollingTimeout);
    pollingTimeout = setTimeout(pollForUpdates, 3000);
    return
  }



  const title = options.title || '👋 Hello! How can we help?'

  return (
    <>
      <div
        className={styles.overlay}
        onClick={closeChat}
      />
      <div className={['gatsby-plugin-chat-bot', styles.root].join(' ')}>
        <header
          style={{
            color: 'white',
            backgroundColor: colors.blue,
          }}
          className={styles.header}>
          <h2 className={styles.title}>
            {title}
          </h2>
          <button
            className={styles.close}
            title='Close chat'
            onClick={closeChat}>
            ×
          </button>
        </header>
        <ul
          ref={conversation}
          className={styles.conversation}
          style={{
            backgroundColor: colors.lightGray,
            borderBottom: `1px solid ${colors.border}`,
          }}>
          {messages.map(message => (
            <li key={message.time}
              style={message.sender === 'user' ? {
                color: 'white',
                backgroundColor: colors.blue,
              } : {
                color: 'black',
                backgroundColor: colors.lightGray,
              }}
              className={message.sender === 'user' ? styles.userMessage : styles.message}>
              {message.text}
            </li>
          ))}
        </ul>
        <Form
          onSubmit={handleSubmit}
          closeChat={closeChat}
        />
      </div>
    </>
  )
}
