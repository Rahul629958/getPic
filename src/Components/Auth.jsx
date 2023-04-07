import React, { useState } from "react";
import ReactDOM from "react-dom";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import app from "./firebase";

const auth = getAuth(app);
export default function Auth(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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


  signInWithEmailAndPassword(auth, "uniqueboy@gmail.com", "Rahul6299.")
  .then((value) => {
    setEmail("");
    setPassword("");
    props.compM({target:{name:"imgBtn"}});
  })
  .catch((error) => alert(error.code));

  return (
    <React.StrictMode>
      <div className="signUpLogIn container">
        <h1> {isSignUp ? "SIGNUP" : "LOGIN"} </h1>
        <div className="inputSection">
        {/* <span> Email Id :</span> */}


        <div className="input-group mb-3">
           <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">✉</span>
           </div>
          <input type="email" className="form-control" placeholder="Enter your email" aria-label="" aria-describedby="basic-addon1"
                 onChange={(e) => setEmail(e.target.value)}
                 value={email}/>
        </div>


        <div className="input-group mb-3">
           <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">🔑</span>
           </div>
          <input type="password" class="form-control" placeholder="Your Password here" aria-label="" aria-describedby="basic-addon1"
                 onChange={(e) => setPassword(e.target.value)}
                 value={password}/>
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
            name="profileBtn"
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
