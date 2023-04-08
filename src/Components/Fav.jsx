import React, { useState } from "react";
import { getAuth,signInWithEmailAndPassword } from "firebase/auth";
import {getDatabase,ref,child,get} from "firebase/database";
import app from "./firebase";
import ImageViewFav from "./ImageViewFav";

const auth = getAuth(app);
const db = getDatabase(app);


export default function Fav() {
  const user = auth.currentUser;
const dbRef = ref(db);
const [objVal,setObj] = useState({});

get(child(dbRef,user.uid +"/Img"))
.then((snapshot)=>
{
  if(snapshot.exists())
  {
     setObj(snapshot.val());
  }else{
    console.log("No data available");
  }

})
.catch((error)=>
{

});







  return (
    <React.StrictMode>
     <div style={{fontWeight:"bolder",fontSize:"60px",visibility:"hidden"}}>.</div>
      <div className="container">
      <div className="row">
        {Object.entries(objVal).length>=1?(Object.entries(objVal).map((x) => (
          <ImageViewFav imgObj={x} key={x[0]} />
        ))):(<h1 style={{marginTop:"20%",marginLeft:"30%"}}> {":-( "} No Results to show</h1>)}
      </div>
    </div>
    {/* <ImageViewFav imgID="2894944"/> */}
    </React.StrictMode>
  );
}
