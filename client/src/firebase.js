// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  // authDomain: 'mern-estate.firebaseapp.com',
  // projectId: 'mern-estate',
  // storageBucket: 'mern-estate.appspot.com',
  // messagingSenderId: '1078482850952',
  // appId: '1:1078482850952:web:28f19139ab77246602fb3d',

  apiKey: "AIzaSyCajGIpuz-1gdTkalzGM3iTLaG0-wunBYM",
  authDomain: "swe-hostelandcomplaint.firebaseapp.com",
  projectId: "swe-hostelandcomplaint",
  storageBucket: "swe-hostelandcomplaint.appspot.com",
  messagingSenderId: "402049354453",
  appId: "1:402049354453:web:b94ef39484a64d783e305c",
  measurementId: "G-TBQG0JTGJ5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
