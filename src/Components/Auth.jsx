import React from "react";
import ReactDOM from "react-dom";
import {getAuth,createUserWithEmailAndPassword} from "firebase/auth";
import app from "./firebase";

const auth = getAuth(app);
const flag = false;
export default function Auth(props)
{
   function onButtonClick(event)
   {

    createUserWithEmailAndPassword(auth, "tisisthemyel@gmail.com", "thisispassword").then((value)=>{props.compM(event);}).catch((error)=>alert(error.code));
    
   }

    return (
        <React.StrictMode>
           <h1> This is Auth </h1>
           <span> Email Id : </span>
           <input type="email" placeholder="Your Email"/><p></p>
           <span> Password : </span>
           <input type="password" placeholder="Password" />
           <p></p>
           <button name="profileBtn" onClick={function(event){ onButtonClick(event)}}>Submit</button>
        </React.StrictMode>
    );
}