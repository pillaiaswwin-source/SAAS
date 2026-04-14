// Firebase Config (YOUR DATA)
const firebaseConfig = {
  apiKey: "AIzaSyDpqPoVGutCKRPyP4ixsoA7zqGN9L6jqYk",
  authDomain: "container-saas.firebaseapp.com",
  projectId: "container-saas",
  storageBucket: "container-saas.firebasestorage.app",
  messagingSenderId: "830981793717",
  appId: "1:830981793717:web:8a890c0e6af45b6df3dbfc",
  measurementId: "G-MGP35KZEWW"
};

// Initialize Firebase (v8 style)
firebase.initializeApp(firebaseConfig);

// Services
const auth = firebase.auth();
const db = firebase.firestore();
