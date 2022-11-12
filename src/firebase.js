import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDTUFkIYnC7i7JSKwuUiUdCgrQZaKruHXU",
  authDomain: "netflix-clone-a43d4.firebaseapp.com",
  projectId: "netflix-clone-a43d4",
  storageBucket: "netflix-clone-a43d4.appspot.com",
  messagingSenderId: "665255362534",
  appId: "1:665255362534:web:c06569d82e52be17562027"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { auth };
export default db;
