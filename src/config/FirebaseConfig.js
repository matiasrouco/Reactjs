
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBtItebNQymKWXeCLpXHKwsIQdnRSHXCUw",
  authDomain: "e-commerce-react-b4103.firebaseapp.com",
  projectId: "e-commerce-react-b4103",
  storageBucket: "e-commerce-react-b4103.appspot.com",
  messagingSenderId: "691738409710",
  appId: "1:691738409710:web:b1a267bf705932f70f91ff"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);