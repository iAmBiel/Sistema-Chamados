import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage' 

const firebaseConfig = {
    apiKey: "AIzaSyAzHBU_yqUkD4rjZR12pt8K7MsghoeQ3Jc",
    authDomain: "chamados-56eb0.firebaseapp.com",
    projectId: "chamados-56eb0",
    storageBucket: "chamados-56eb0.appspot.com",
    messagingSenderId: "427523953478",
    appId: "1:427523953478:web:ba264b0f9e55bed5c74b47",
    measurementId: "G-TP5JXNQPDE"
};

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

export { auth, db, storage };