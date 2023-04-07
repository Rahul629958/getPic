import React, { useState } from "react";
import ReactDOM from "react-dom";
import { getAuth,signInWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, remove, set, get } from "firebase/database";
import app from "./firebase";
import pic from "../Images/pic2.jpg";

const auth = getAuth(app);




export default function Profile()
{const db=getDatabase();
    const user = auth.currentUser;
    const [profileVal,setProfile] =useState({});
  
    return (
        <React.StrictMode>
        
           {/* <h1> {user!=null? user.email+" is signed in":"No user is signed in"}</h1> */}
           <img src={profileVal.profilePic?profileVal.profilePic:user.photoURL?user.photoURL:pic} alt="image" className="profilePic"></img>
           <h1 className="profileName">{profileVal.name?profileVal.name:user.displayName?user.displayName:"Anonymous"}</h1>
           <p className="profileEmail">{user!=null? user.email:"No user is signed in"}</p>
        </React.StrictMode>
    );
}