import React from "react";
import ReactDOM from "react-dom";
import { getAuth } from "firebase/auth";
import app from "./firebase";

const auth = getAuth(app);
const user = auth.currentUser;



export default function Profile()
{
    
    return (
        <React.StrictMode>
        
           <h1> {user!=null?"User is signed in":"No user is signed in"}</h1>
        </React.StrictMode>
    );
}