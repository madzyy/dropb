import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAITMUa0caQSAeZdj3Kwgpm_eGE64_r2Dc",
  authDomain: "dropbox-clone-8e34d.firebaseapp.com",
  projectId: "dropbox-clone-8e34d",
  storageBucket: "dropbox-clone-8e34d.appspot.com",
  messagingSenderId: "710411406188",
  appId: "1:710411406188:web:8b823a1c0280ef51c74149",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
