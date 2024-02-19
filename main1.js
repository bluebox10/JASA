
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth,GoogleAuthProvider,signInWithPopup } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
const firebaseConfig = {
    apiKey: "AIzaSyDd4SRuWDs3u2zXjzblWJzoZ0IQVpPQnf8",
    authDomain: "login-and-database1.firebaseapp.com",
    projectId: "login-and-database1",
    storageBucket: "login-and-database1.appspot.com",
    messagingSenderId: "439856996201",
    appId: "1:439856996201:web:c2d9ae8f601b82e46727f8",
    measurementId: "G-8D515L85DT"
};

const app = initializeApp(firebaseConfig);
const auth= getAuth(app);
auth.languageCode='en'
const provider= new GoogleAuthProvider();
const GoogleLogin=document.getElementById("login_with_g");
GoogleLogin.addEventListener("click",function() {
    signInWithPopup(auth, provider)
    .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const user = result.user;
    console.log(user);
    window.location.href="../index.html";
}).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
});
})

