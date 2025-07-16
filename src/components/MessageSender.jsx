import React, { useState } from 'react';
import { sendMessage } from '../services/database';

const MessageSender = ({ onMessageSent }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (message.trim()) {
      await sendMessage(message);
      setMessage('');
      if (onMessageSent) {
        onMessageSent(message);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="message-sender">
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message..."
        className="message-input"
        rows="3"
      />
      <button type="submit" className="send-button">
        Send
      </button>
    </form>
  );
};

export default MessageSender;