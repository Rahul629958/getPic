import React, { useState } from "react";
import ReactDOM from "react-dom";
import { getAuth,signInWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, remove, set, get ,child} from "firebase/database";
import app from "./firebase";
import pic from "../Images/profile.png";

const auth = getAuth(app);
const db=getDatabase();



export default function Profile()
{
  const dbRef= ref(db);
    const user = auth.currentUser;
    const [profileVal,setProfile] =useState({});

    get(child(dbRef,user.uid +"/profile"))
    .then((snapshot)=>
    {
      if(snapshot.exists())
      {
         setProfile(snapshot.val());
      }else{
        console.log("No data available");
      }
    
    })
    .catch((error)=>
    {
    
    });









    return (
        <React.StrictMode>
        
           {/* <h1> {user!=null? user.email+" is signed in":"No user is signed in"}</h1> */}
           <img src={profileVal.profilePic?profileVal.profilePic:user.photoURL?user.photoURL:pic} alt="profile Image" className="profilePic"></img>
           <h1 className="profileName">{profileVal.name?profileVal.name:user.displayName?user.displayName:"Anonymous"}</h1>
           <p className="profileEmail">{user!=null? user.email:"No user is signed in"}</p>
        </React.StrictMode>
    );
}