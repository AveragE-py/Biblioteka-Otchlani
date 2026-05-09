import { initializeApp } from 'https://www.gstatic.com/firebasejs/12.10.0/firebase-app.js';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/12.10.0/firebase-auth.js';
import { getFirestore, doc, setDoc, getDoc, updateDoc, deleteDoc, collection, addDoc, getDocs, query, where, limit, onSnapshot } from 'https://www.gstatic.com/firebasejs/12.10.0/firebase-firestore.js';

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

async function LoginWarningProcess() {
  await auth.authStateReady()
  const currentUser = auth.currentUser

  if (!currentUser) {

    const div = document.createElement("div")
    div.className = "artwork-box"

    const image = document.createElement("img")
    image.src = "/Ostrzeżenie.png"

    const text = document.createElement("h3")
    text.textContent =
      "UWAGA! Użytkownik nie jest zalogowany! Przejdź do poniższej strony by się zalogować!"

    const artwork = document.getElementById("artwork")

    text.style.cursor = "pointer"

    text.addEventListener("click", async () => {

      const provider = new GoogleAuthProvider()

      try {

        await signInWithPopup(auth, provider)

        alert("Zalogowano pomyślnie!")

        location.reload()

      } catch (error) {

        console.error(error)

        alert("Błąd logowania!")

      }

    })

    const artwork = document.getElementById("artwork")

    if (artwork) {
      artwork.appendChild(div)
      div.appendChild(image)
      div.appendChild(text)
    }
  }
}

LoginWarningProcess()
