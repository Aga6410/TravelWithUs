import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
/*require('dotenv').config()
console.log(process.env)*/

const firebaseConfig = {
    apiKey: "API_KEY",
    authDomain: "AUTH_DOMAIN",
    projectId: "PROJECT_ID",
    storageBucket: "STORAGE_BUCKET",
    messagingSenderId: "SENDER_ID",
    appId: "APP_ID"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth}

