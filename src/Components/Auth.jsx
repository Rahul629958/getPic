import React, { useState } from "react";
import ReactDOM from "react-dom";
import {getAuth,createUserWithEmailAndPassword} from "firebase/auth";
import app from "./firebase";

const auth = getAuth(app);
export default function Auth(props)
{
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
   function onButtonClick(event)
   {

    createUserWithEmailAndPassword(auth, email, password).then((value)=>{setEmail("");setPassword(""); props.compM(event);}).catch((error)=>alert(error.code));
    
   }

    return (
        <React.StrictMode>
           <h1> This is Auth </h1>
           <span> Email Id : </span>
           <input type="email" placeholder="Your Email" onChange={(e)=>setEmail(e.target.value)} value={email}/><p></p>
           <span> Password : </span>
           <input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} value={password}/>
           <p></p>
           <button name="profileBtn" onClick={function(event){ onButtonClick(event)}}>Submit</button>
        </React.StrictMode>
    );
}