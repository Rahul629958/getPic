import React, { useState } from "react";
import ReactDOM from "react-dom";
import {getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword} from "firebase/auth";
import app from "./firebase";

const auth = getAuth(app);
export default function Auth(props)
{
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
   function onButtonClick(event)
   {
     
    createUserWithEmailAndPassword(auth, email, password).then((value)=>{signInWithEmailAndPassword(auth,email,password); setEmail("");setPassword(""); props.compM(event);}).catch((error)=>alert(error.code));
    
   }

    return (
        <React.StrictMode>
           <h1> This is Auth </h1>
           <span> Email Id : </span>
           <input type="email" placeholder="Your Email" onChange={(e)=>setEmail(e.target.value)} value={email}/><p></p>
           <span> Password : </span>
           <input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} value={password}/>
           <p></p>
           <button name="profileBtn" onClick={function(event){ onButtonClick(event)}}>Sign up</button>
           
        </React.StrictMode>
    );
}




// signInWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in 
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//   });