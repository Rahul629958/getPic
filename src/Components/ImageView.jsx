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
        ImgURL: valData.src.small,
      });
    }

    setAdded(!checkAdded);
  }

  return (
    <div 
    
      className="col-lg-3 col-md-6 col-sm-12"
      style={{ paddingBottom: "10px" }}
      
    >
      <div
        style={{ position: "absolute", marginLeft: "75%", marginTop: 0 }}
        onClick={addRemFav}
      >
        <h1>{checkAdded ? "-" : "+"}</h1>
      </div>
      <img  src={valData.src.small} style={{ width: "100%" }}></img>
    </div>
  );
}
