const firebaseConfig = {
    apiKey: "Your-API-Key",
    authDomain: "Your-Auth-Domain",
    projectId: "Your-Project-ID",
    storageBucket: "Your-Storage-Bucket",
    messagingSenderId: "Your-Messaging-Sender-ID",
    appId: "Your-App-ID",
    measurementId: "Your-Measurement-ID"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = firebase.auth();
const database = firebase.database();

function register() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    auth.createUserWithEmailAndPassword(email, password)
        .then(function() {
            const user = auth.currentUser;
            const database_ref = database.ref();
            const user_data = {
                email: email,
                // Avoid storing plain passwords
                // password: password
            };
            database_ref.child('users/' + user.uid).set(user_data);
        })
        .catch(function(error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            // More specific error handling can be added based on errorCode
            alert(errorMessage);
        });
}
