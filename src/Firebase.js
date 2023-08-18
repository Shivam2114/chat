import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {

    apiKey: "AIzaSyDJmNnPrOZLVjuVcndyfkodOvXBFoJpdQQ",
    authDomain: "trytochat-7961b.firebaseapp.com",
    projectId: "trytochat-7961b",
    storageBucket: "trytochat-7961b.appspot.com",
    messagingSenderId: "371248321749",
    appId: "1:371248321749:web:1b9b9997cbb80e3161be5c",
    measurementId: "G-BMKFLCSQBL"

};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };