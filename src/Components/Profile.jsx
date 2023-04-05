import React from "react";
import ReactDOM from "react-dom";
import { getAuth,signInWithEmailAndPassword } from "firebase/auth";
import app from "./firebase";

const auth = getAuth(app);




export default function Profile()
{
    const user = auth.currentUser;
    return (
        <React.StrictMode>
        
           <h1> {user!=null?"User is signed in":"No user is signed in"}</h1>
        </React.StrictMode>
    );
}