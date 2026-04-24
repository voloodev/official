import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBNJJYShOWoQ85Gh-133VEv1NbH4xIO_Pk",
  authDomain: "voloo-7123e.firebaseapp.com",
  projectId: "voloo-7123e",
  storageBucket: "voloo-7123e.firebasestorage.app",
  messagingSenderId: "1064367375275",
  appId: "1:1064367375275:web:1e619ba6b7620c40b208ee",
  measurementId: "G-VK3CK8LT5E"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Login Logic
document.getElementById('loginBtn').addEventListener('click', () => {
    signInWithPopup(auth, provider).then((result) => {
        const user = result.user;
        if (user.email === "dhanulyasas200611@gmail.com") {
            alert("Admin Access Granted! You can now edit content.");
            // මෙතනදී ඔබට Edit buttons පෙන්වීමට කෝඩ් එක ලියන්න පුළුවන්
        } else {
            alert("Welcome user!");
        }
    });
});

// Modal Helpers
window.openModal = (id) => document.getElementById(id).style.display = 'block';
window.closeModal = (id) => document.getElementById(id).style.display = 'none';
