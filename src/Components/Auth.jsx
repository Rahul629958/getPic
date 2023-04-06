import React, { useState } from "react";
import ReactDOM from "react-dom";
import {getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword} from "firebase/auth";
import app from "./firebase";

const auth = getAuth(app);
export default function Auth(props)
{
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [isSignUp,setSignUp] = useState(true);
    function changeFunc()
    {
        setSignUp(!isSignUp);
        setEmail("");
        setPassword("");
    }
   function onButtonClick(event)
   {
     if(isSignUp){
     createUserWithEmailAndPassword(auth, email, password).then((value)=>{signInWithEmailAndPassword(auth,email,password); setEmail("");setPassword(""); props.compM(event);}).catch((error)=>alert(error.code));
     }else{
    signInWithEmailAndPassword(auth,email,password).then( (value)=>{setEmail("");setPassword(""); props.compM(event);}).catch((error)=>alert(error.code))};
   }

    return (
        <React.StrictMode>
           <h1> {isSignUp?"SignUp":"LogIn"} </h1>
           <span> Email Id : </span>
           <input type="email" placeholder="Your Email" onChange={(e)=>setEmail(e.target.value)} value={email}/><p></p>
           <span> Password : </span>
           <input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} value={password}/>
           <p></p>
           <button name="profileBtn" onClick={function(event){ onButtonClick(event)}}>{isSignUp?"SignUp":"LogIn"}</button>
           <p hidden={isSignUp?false:true}>Already have an account? <span onClick={changeFunc} >LogIn</span></p>
           <p hidden={isSignUp}>Don't have an account? <span onClick={changeFunc}>SignUp</span></p>
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