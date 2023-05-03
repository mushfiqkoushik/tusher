// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXeWhsHX_7zgfyYs_xzXBl4DEQZmiM1Fw",
  authDomain: "recepie-app-cac2c.firebaseapp.com",
  projectId: "recepie-app-cac2c",
  storageBucket: "recepie-app-cac2c.appspot.com",
  messagingSenderId: "1044838982866",
  appId: "1:1044838982866:web:512a4b6df803fff68cb90b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app