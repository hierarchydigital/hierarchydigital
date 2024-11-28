// firebaseConfig.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDsY7eEBup82GAVCwY4WQtQFfMUFIVBXmA",
    authDomain: "affiliate--project.firebaseapp.com",
    projectId: "affiliate--project",
    storageBucket: "affiliate--project.appspot.com",
    messagingSenderId: "428629416036",
    appId: "1:428629416036:web:b8d28f6d377fbd3df26771"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// Export the db and auth objects for use in other modules
export { db, auth };

