import { collection, addDoc, getDocs, query, orderBy, onSnapshot } from 'firebase/firestore';
import { db } from '../config/firebase';

export const saveMessage = async (message) => {
  try {
    const docRef = await addDoc(collection(db, 'messages'), {
      ...message,
      sender: 'anonymous',
      timestamp: new Date().toISOString(),
      deviceId: window.navigator.userAgent
    });
    return docRef.id;
  } catch (error) {
    console.error('Error saving message:', error);
    throw error;
  }
};

export const getMessages = async () => {
  try {
    const q = query(collection(db, 'messages'), orderBy('timestamp', 'desc'));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    console.error('Error getting messages:', error);
    throw error;
  }
};

// Real-time listener untuk messages baru
export const subscribeToMessages = (callback) => {
  const q = query(collection(db, 'messages'), orderBy('timestamp', 'desc'));
  return onSnapshot(q, (snapshot) => {
    const messages = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    callback(messages);
  });
};