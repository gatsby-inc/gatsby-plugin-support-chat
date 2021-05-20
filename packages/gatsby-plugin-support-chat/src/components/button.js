import * as React from 'react'
import * as styles from './button.module.css'

export default function Button ({
  open,
  ...props
}) {
  return (
    <button
      {...props}
      title={open ? 'Close chat' : 'Open chat'}
      className={[
        styles.button,
        open ? styles.open : styles.closed
      ].join(' ')}>
      <div className={styles.line1} />
      <div className={styles.line2} />
      <div className={styles.line3} />
    </button>
  )
}
