
import firebase from "firebase"
const firebaseConfig = {
  apiKey: "AIzaSyB0YaGOG5vCEbUhD3atYdYjuR2Lkxgl7KI",
  authDomain: "tik-tok-72916.firebaseapp.com",
  databaseURL: "https://tik-tok-72916.firebaseio.com",
  projectId: "tik-tok-72916",
  storageBucket: "tik-tok-72916.appspot.com",
  messagingSenderId: "864740307379",
  appId: "1:864740307379:web:a1f23e3fa9bf0830af9bc6",
  measurementId: "G-EKYHBPD1BR"
};

const firebaseApp=firebase.initializeApp(firebaseConfig);

const db=firebaseApp.firestore();

export default db;
