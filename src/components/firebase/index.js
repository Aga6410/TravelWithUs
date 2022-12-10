import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDF1MQ4tbPREosDUEzzmOA7EWra1nIgxU0",
    authDomain: "travel-cf63e.firebaseapp.com",
    projectId: "travel-cf63e",
    storageBucket: "travel-cf63e.appspot.com",
    messagingSenderId: "89651391832",
    appId: "1:89651391832:web:b0271acef170cbf41b092d"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth}