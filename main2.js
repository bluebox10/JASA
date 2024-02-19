
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth,createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
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
const auth=getAuth(app);
const reg=document.getElementById("register").value;
// const register=document.getElementById("register").value;
register.addEventListener("click",function(event) {
    event.preventDefault()

    const email=document.getElementById("email").value;
    const password=document.getElementById("password").value;
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user;
        alert("Account created")
})
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage)
});
});
