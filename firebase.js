const firebaseConfig = {
  apiKey: "YOUR_KEY",
  authDomain: "container-saas.firebaseapp.com",
  projectId: "container-saas"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
