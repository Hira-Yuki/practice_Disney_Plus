// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZj7fuo1JRx_NkKw4LS-D36yDaQAdvfEc",
  authDomain: "react-diseny-plus-app-b7dec.firebaseapp.com",
  projectId: "react-diseny-plus-app-b7dec",
  storageBucket: "react-diseny-plus-app-b7dec.appspot.com",
  messagingSenderId: "972732214248",
  appId: "1:972732214248:web:2c4ca23dff3e4ba0d2d25d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;