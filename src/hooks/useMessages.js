import { useEffect, useState } from 'react';
import { fetchMessages, sendMessage } from '../services/database';

const useMessages = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadMessages = async () => {
      try {
        const fetchedMessages = await fetchMessages();
        setMessages(fetchedMessages);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    loadMessages();
  }, []);

  const addMessage = async (message) => {
    try {
      await sendMessage(message);
      setMessages((prevMessages) => [...prevMessages, message]);
    } catch (err) {
      setError(err);
    }
  };

  return { messages, loading, error, addMessage };
};

export default useMessages;