import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { createClient } from "pexels";
import ImageView from "./ImageView";

const client = createClient(
  "n5JnI2uR4dlQnkk1bUGu5sSpL0igFPrPfNxTL3vrzfpWgkibzdCBKmxG"
);


export default function Img(props) {
  const [arrVal, setArr] = useState([]);
  const [pageNum,setPage]=useState(1);
  
  client.photos
    .search({ query:props.data, orientation: "square", size: "small",page:pageNum, per_page: 18 })
    .then((imgs) => {
      setArr(imgs.photos);
    });



  

  return (<React.StrictMode>
    <div style={{fontWeight:"bolder",fontSize:"60px",visibility:"hidden"}}>.</div>
    <p style={{textAlign:"center"}}>You are in page : <span style={{color:"yellow"}}>{pageNum}</span></p>
    <p style={{ textAlign:"center"}}>Goto : <span style={{color:pageNum>1?"#EE7C53":"gray"}} className="makePointer" onClick={(e)=>(pageNum>1&&setPage(pageNum-1))}>previous</span> <span className="nextBtn makePointer" onClick={()=>setPage(pageNum+1)}>next</span></p>
    <div className="container">
      <div className="row">
        {arrVal.length>=1? arrVal.map((x) => (
          <ImageView imgData={x} key={x.id} />
        ))
        
        
        :(<h1 style={{marginTop:"20%",marginLeft:"30%"}}> {":-( "} No Results to show</h1>)
       }
      </div>
      <p onClick={()=>setPage(pageNum+1)} className="seeMore makePointer" style={{textAlign:"center"}}>See more...</p>
    </div>
    </React.StrictMode>
  );
}
