import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDp239HsdI2OWv4MV1wl5C98dxyzoDrrc4",
  authDomain: "writenode-7857d.firebaseapp.com",
  projectId: "writenode-7857d",
  storageBucket: "writenode-7857d.appspot.com",
  messagingSenderId: "223776647064",
  appId: "1:223776647064:web:e824fe6fc270f9a2092ded",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
