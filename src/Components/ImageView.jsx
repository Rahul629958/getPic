import React, { useState } from "react";
import ReactDOM from "react-dom";
import { getDatabase, ref, remove, set, get } from "firebase/database";
import { getAuth } from "firebase/auth";
import app from "./firebase";

const auth = getAuth(app);

export default function ImageView(props) {
  const db = getDatabase();
  const user = auth.currentUser;
  const valData = props.imgData;

  
  const [checkAdded, setAdded] = useState(false);

//   if(user!=null)
//   {
//     get(ref(db, "users/" + user.uid + "/Img/" + valData.id+'/'))
//     .then((snapshot) => {
//        if(snapshot!=null)
//        {
//         setAdded(true);
//        }
//       })
//       .catch((err) => {
//       });

//   }else{
   
//   }

   



  function addRemFav() {
    if (checkAdded) {
      //delete from there
      remove(ref(db, "users/" + user.uid + "/Img/" + valData.id));
    } else {
      //add to firebase

      set(ref(db, "users/" + user.uid + "/Img/" + valData.id), {
        ImgURL: valData.src.original,
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
      <img src={valData.src.original} style={{ width: "100%" }}></img>
    </div>
  );
}

// function writeUserData(userId, name, email, imageUrl) {
//   const db = getDatabase();
//   set(ref(db, 'users/' + userId), {
//     username: name,
//     email: email,
//     profile_picture : imageUrl
//   });
// }

// initialise database
//read
// const tasksRef = ref(db, "tasks");

// get(tasksRef)
//   .then((snapshot) => {
//     const data = snapshot.val();
//     console.log(data);
//   })
//   .catch((err) => {
//     console.error(err);
//   });
