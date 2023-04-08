import React, { useState } from "react";
import ReactDOM from "react-dom";
import { getDatabase, ref, remove, set, get } from "firebase/database";
import { getAuth,signInWithEmailAndPassword } from "firebase/auth";
import app from "./firebase";

const auth = getAuth(app);

export default function ImageView(props) {
  const db = getDatabase();
  const user = auth.currentUser;
  const valData = props.imgData;

  const [checkAdded, setAdded] = useState(false);

  function addRemFav() {
    if (checkAdded) {
      //delete from there
      remove(ref(db, user.uid + "/Img/" + valData.id));
    } else {
      //add to firebase

      set(ref(db, user.uid + "/Img/" + valData.id), {
        ImgURL: valData.src.original,
      });
    }

    setAdded(!checkAdded);
  }






  return (
    <div 
    
      className="col-lg-4 col-md-6 col-sm-12 imgDiv"
      style={{ paddingBottom: "10px",paddingTop:"10px"}}
    >
      <div
        style={{ position: "absolute",marginTop:"60%", height:"60px",backgroundColor:"inherit",borderTopRightRadius:"1rem",borderBottomRightRadius:"1rem",opacity:"inherit"}}
        
        onClick={addRemFav}
      
      >
        <h1 className="iconTag" style={{padding:"5px"}}>{checkAdded ?  "❤️":"🤍" }</h1>
      </div>
      <a href={valData.src.original} target="_blank" download={"getPic"+valData.id+".jpg"}>
      <img src={valData.src.medium} style={{ width: "100%" ,borderStyle:"solid", borderRadius:"1rem",borderWidth:"1px", opacity:"100%",borderColor:"black"}} ></img>
      </a>
    </div>
  );
}


