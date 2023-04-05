import React from "react";
import ReactDOM from "react-dom";

export default function ImageView(props)
{
     const valData = props.imgData
    return (
          
        <div className="col-lg-3 col-md-6 col-sm-12">
            <img src={valData.src.original} style={{width:"100%"}}></img>
        </div>
    
    );
}

