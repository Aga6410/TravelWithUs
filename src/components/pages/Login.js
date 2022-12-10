import { useState } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
} from "firebase/auth";
import  "../../scss/login.scss"
import { auth } from "../firebase";

function Login() {
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const [user, setUser] = useState({});

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    });

    const register = async () => {
        try {
            const user = await createUserWithEmailAndPassword(
                auth,
                registerEmail,
                registerPassword
            );
            console.log(user);
        } catch (error) {
            console.log(error.message);
        }
    };

    const login = async () => {
        try {
            const user = await signInWithEmailAndPassword(
                auth,
                loginEmail,
                loginPassword
            );
            console.log(user);
        } catch (error) {
            console.log(error.message);
        }
    };

    const logout = async () => {
        await signOut(auth);
    };

    return (
        <section className="login">
            <div className="login__container ">
                <h3> Rejestracja  </h3>
                <div className="registration-form">
                    <input className="input-placeholder email1"
                        placeholder="Email..."
                        onChange={(event) => {
                            setRegisterEmail(event.target.value);
                        }}
                    />
                    <input className="input-placeholder password1"
                        placeholder="Hasło..."
                        onChange={(event) => {
                            setRegisterPassword(event.target.value);
                        }}
                    />

                    <button className="register-button" onClick={register}> Stwórz konto </button>
                </div>

                <div>
                    <h3> Logowanie</h3>
                    <input className="input-placeholder email2"
                        placeholder="Email..."
                        onChange={(event) => {
                            setLoginEmail(event.target.value);
                        }}
                    />
                    <input className="input-placeholder password2"
                        placeholder="Hasło..."
                        onChange={(event) => {
                            setLoginPassword(event.target.value);
                        }}
                    />

                    <button className="login-button" onClick={login}> Zaloguj się </button>
                </div>

                <h3> Użytkownik zalogowany jako </h3>
                {user?.email}

                <button className="logout-button" onClick={logout}> Wyloguj się </button>
            </div>
        </section>
    );
}

export default Login;

