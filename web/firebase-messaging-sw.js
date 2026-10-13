importScripts("https://www.gstatic.com/firebasejs/7.20.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/7.20.0/firebase-messaging.js");

firebase.initializeApp({
  apiKey: "AIzaSyB0xtfJMflFm_2pXdxo5sMPncPQgyE9AAM",
  authDomain: "mytijaara-21638.firebaseapp.com",
  projectId: "mytijaara-21638",
  storageBucket: "mytijaara-21638.firebasestorage.app",
  messagingSenderId: "1017926959065",
  appId: "1:1017926959065:web:fee8e7af199a1d677e23c8",
  measurementId: "G-6XF74RVXXW",
  databaseURL: "...",
});

const messaging = firebase.messaging();

// Optional:
messaging.onBackgroundMessage((message) => {
  console.log("onBackgroundMessage", message);
});