import React, { useState } from 'react';
// import { createClient } from 'pexels';
import {getAuth} from "firebase/auth";
import {getDa,getDatabase,ref,remove} from "firebase/database";
import app from "./firebase";

const auth = getAuth(app);


// const client = createClient('n5JnI2uR4dlQnkk1bUGu5sSpL0igFPrPfNxTL3vrzfpWgkibzdCBKmxG');
export default function ImageViewFav(props)
{
 const db= getDatabase();
  const user =auth.currentUser;
  const [checkAdded,setAdded]=useState(true);


function RemFav() {
  
      remove(ref(db, user.uid + "/Img/" + props.imgObj[0]));
   setAdded(false);
  }







    return (
        <div 
      className="col-lg-3 col-md-6 col-sm-12 imgDiv"
      style={{ paddingBottom: "10px" ,paddingTop:"10px"}} hidden={checkAdded?false:true}>
          <div
        style={{ position: "absolute",marginTop:"60%", height:"60px",backgroundColor:"inherit",borderTopRightRadius:"1rem",borderBottomRightRadius:"1rem",opacity:"inherit"}}
        
        onClick={RemFav}
      
      >
        <h1 className="iconTag" style={{padding:"5px"}}>{checkAdded ?  "❤️":"🤍" }</h1>
      </div>

         <img src={props.imgObj[1].ImgURL} alt='nature image' style={{width:"100%",borderStyle:"solid", borderRadius:"1rem",borderWidth:"1px", opacity:"100%",borderColor:"black"}}></img>
        </div>
        
    )




}




// export default function Img() {
//     const [arrVal, setArr] = useState([]);
  
//     client.photos
//       .search({ query, orientation: "square", size: "small", per_page: 24 })
//       .then((imgs) => {
//         setArr(imgs.photos);
//       });
  
//     return (
//       <div className="container">
//         <div className="row">
//           {arrVal.map((x) => (
//             <ImageView imgData={x} key={x.id} />
//           ))}
//         </div>
//       </div>
//     );
//   }