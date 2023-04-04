import React from "react";
import ReactDOM from "react-dom";
import {getAuth,createUserWithEmailAndPassword} from "firebase/auth";
import app from "./firebase";

const auth = getAuth(app);
const flag = false;
export default function Auth(props)
{
   function onButtonClick()
   {

    createUserWithEmailAndPassword(auth, "thisismyemdgai122l@gmail.com", "thisispassword").then((value)=>(alert("Successfully Signed up"))).catch((error)=>alert(error.code));
    
   }

    return (
        <React.StrictMode>
           <h1> This is Auth </h1>
           <span> Email Id : </span>
           <input type="email" placeholder="Your Email"/><p></p>
           <span> Password : </span>
           <input type="password" placeholder="Password" />
           <p></p>
           <button name="profileBtn" onClick={function(event){ onButtonClick();props.compM(event);}}>Submit</button>
        </React.StrictMode>
    );
}