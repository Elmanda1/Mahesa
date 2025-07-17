import { initializeApp } from "firebase/app";
import { getDatabase, set, ref } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAGiIlrOrehsdOjBlcqiQwSot1mYvhpMnI",
  authDomain: "mahesabirthday-aca69.firebaseapp.com",
  databaseURL: "https://mahesabirthday-aca69-default-rtdb.firebaseio.com",
  projectId: "mahesabirthday-aca69",
  storageBucket: "mahesabirthday-aca69.firebasestorage.app",
  messagingSenderId: "312973229322",
  appId: "1:312973229322:web:40e2f6a037401180120ef3",
  measurementId: "G-R3FZXVMPS4"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

function generateUUID() {
  const hex = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx";
  return hex.replace(/[xy]/g, (char) => {
    const rand = Math.random() * 16 | 0; // angka 0 - 15
    const val = char === 'x' ? rand : (rand & 0x3 | 0x8); // sesuai spesifikasi UUID v4
    return val.toString(16); // ubah ke hex string
  });
}

export const saveResponses = (cardIdentifier, messages) => {
  const uuid = generateUUID();
  set(ref(db, cardIdentifier + '/' + uuid ), {
    message : messages
  });
}

