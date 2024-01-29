// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_9HWtdi4AMjEwexHOQ-gDeOzUHq1u2a0",
  authDomain: "test-my-project-2fe70.firebaseapp.com",
  projectId: "test-my-project-2fe70",
  storageBucket: "test-my-project-2fe70.appspot.com",
  messagingSenderId: "440096346208",
  appId: "1:440096346208:web:edf52c83fbbbf4404d7305",
  measurementId: "G-9NRGDBDHMZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
