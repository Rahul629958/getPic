import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { createClient } from "pexels";
import ImageView from "./ImageView";

const client = createClient(
  "n5JnI2uR4dlQnkk1bUGu5sSpL0igFPrPfNxTL3vrzfpWgkibzdCBKmxG"
);


export default function Img(props) {
  const [arrVal, setArr] = useState([]);

  
  client.photos
    .search({ query:props.data, orientation: "square", size: "original", per_page: 6 })
    .then((imgs) => {
      setArr(imgs.photos);
    });



  

  return (<React.StrictMode>
    <div style={{fontWeight:"bolder",fontSize:"60px",visibility:"hidden"}}>.</div>
    <div className="container">
      <div className="row">
        {arrVal.size<1?(<h1 style={{marginTop:"20%",marginLeft:"30%"}}> {":-( "} No Results to show</h1>):
        (arrVal.map((x) => (
          <ImageView imgData={x} key={x.id} />
        )))}
      </div>
    </div>
    </React.StrictMode>
  );
}
