// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBM_wKvtJYToOCD2zCN0rgWdQr-kWFVT9A",
  authDomain: "chat-bot-aa9fd.firebaseapp.com",
  projectId: "chat-bot-aa9fd",
  storageBucket: "chat-bot-aa9fd.appspot.com",
  messagingSenderId: "864691235331",
  appId: "1:864691235331:web:cf62af587ee9311b32bc36",
  measurementId: "G-B46QVMH946",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
