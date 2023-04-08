import React, { useState } from "react";
import ReactDOM from "react-dom";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getDatabase,ref,set } from "firebase/database";
import app from "./firebase";

const auth = getAuth(app);
export default function Auth(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name,setName]=useState("");
  const [isSignUp, setSignUp] = useState(false);
  function changeFunc() {
    setSignUp(!isSignUp);
    setEmail("");
    setPassword("");
  }
  function onButtonClick(event) {
    if (isSignUp) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((value) => {
          signInWithEmailAndPassword(auth, email, password);
        const user= auth.currentUser;
        
          set(ref(getDatabase(), user.uid + "/profile/"), {
            name: name
          });




          setEmail("");
          setPassword("");
          props.compM(event);
        })
        .catch((error) => alert(error.code));
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then((value) => {
          setEmail("");
          setPassword("");
          props.compM(event);
        })
        .catch((error) => alert(error.code));
    }
  }



  return (
    <React.StrictMode>
      <h1 style={{fontFamily:"cursive",fontWeight:"bold",fontSize:"5rem",textAlign:"center", marginTop:"6%",color:"#EE7C53"}}>getPic</h1>
      <div className="signUpLogIn container">
        <h1 style={{fontSize:"2rem"}}> {isSignUp ? "SIGNUP" : "LOGIN"} </h1>
        <div className="inputSection ">
        {/* <span> Email Id :</span> */}



      
       <div className="row">
        <div className="input-group mb-3 col-lg-6 col-md-9 col-sm-12" hidden={!isSignUp}>
           <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">👤</span>
           </div>
          <input type="text" className="form-control" placeholder="Your name" aria-label="" aria-describedby="basic-addon1"
                 onChange={(e) => setName(e.target.value)}
                 value={name}/>
        </div>
        </div>

         <div className="row">
        <div className="input-group mb-3 col-lg-6 col-md-9 col-sm-12">
           <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">✉</span>
           </div>
          <input type="email" className="form-control" placeholder="Enter your email" aria-label="" aria-describedby="basic-addon1"
                 onChange={(e) => setEmail(e.target.value)}
                 value={email}/>
        </div>
        </div>

        <div className="row"> 
        <div className="input-group mb-3 col-lg-6 col-md-9 col-sm-12">
           <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">🔑</span>
           </div>
          <input type="password" className="form-control" placeholder="Your Password here" aria-label="" aria-describedby="basic-addon1"
                 onChange={(e) => setPassword(e.target.value)}
                 value={password}/>
        </div>
        </div>
       
       </div>


        {/* <input
          type="email"
          className="emailInput"
          placeholder="Your Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <p></p>
        <span> Password : </span>
        <input
          type="password"
          className="passwordInput"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        </div> */}
        <div className="btnSection">
          {" "}
          <button
            name="homeBtn"
            onClick={function (event) {
              onButtonClick(event);
            }}
            className="btn btn-outline-light"
          >
            {isSignUp ? "SignUp" : "Login"}
          </button>
          <p hidden={isSignUp ? false : true}>
            Already have an account? <span className="logSigClick" onClick={changeFunc}>LogIn</span>
          </p>
          <p hidden={isSignUp}>
            Don't have an account? <span className="logSigClick" onClick={changeFunc}>SignUp</span>
          </p>
        </div>
      </div>
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
