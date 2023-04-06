import React, { useState } from "react";
import { getAuth,signInWithEmailAndPassword } from "firebase/auth";
import {getDatabase,ref,child,get} from "firebase/database";
import app from "./firebase";

const auth = getAuth(app);
const db = getDatabase(app);
const user = auth.currentUser;

export default function Fav() {
const dbRef = ref(db);
const [objVal,setObj] = useState({});

get(child(dbRef,user.uid))
.then((snapshot)=>
{
  if(snapshot.exists())
  {
     setObj(snapshot.val().Img);
  }else{
    console.log("No data available");
  }

})
.catch((error)=>
{

});







  return (
    <React.StrictMode>
      <h1>Hi this is fav after</h1>
      <h1> {user!=null? user.email+" is signed in":"No user is signed in"}</h1>
      <h3>{Object.keys(objVal)[0]}</h3>
    </React.StrictMode>
  );
}
