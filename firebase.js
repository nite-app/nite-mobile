// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB98n99ru9pqBIokhNyWy8Xk3tBB-KY5o0",
  authDomain: "nite-mobile-396a5.firebaseapp.com",
  projectId: "nite-mobile-396a5",
  storageBucket: "nite-mobile-396a5.appspot.com",
  messagingSenderId: "463647968516",
  appId: "1:463647968516:web:7c3bf140c1c52b9905d451",
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();

export { auth };
