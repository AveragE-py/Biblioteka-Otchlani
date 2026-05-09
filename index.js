import { initializeApp } from 'https://www.gstatic.com/firebasejs/12.10.0/firebase-app.js';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/12.10.0/firebase-auth.js';
import { getFirestore, doc, setDoc, getDoc, updateDoc, deleteDoc, collection, addDoc, getDocs, query, where, limit, onSnapshot } from 'https://www.gstatic.com/firebasejs/12.10.0/firebase-firestore.js';

const db = getFirestore(app);
const firebaseConfig = {
  apiKey: "AIzaSyCF0H2lWjApwC6W83fJD8WYekwhMTLOYEA",
  authDomain: "biblioteka-otchlani.firebaseapp.com",
  projectId: "biblioteka-otchlani",
  storageBucket: "biblioteka-otchlani.firebasestorage.app",
  messagingSenderId: "897382155777",
  appId: "1:897382155777:web:ade454489cef72ead1a200",
  measurementId: "G-KYR5BQMQDQ"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

