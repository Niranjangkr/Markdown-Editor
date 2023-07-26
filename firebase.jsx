import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"
import firebaseConfig from "./firebaseConfig";

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")