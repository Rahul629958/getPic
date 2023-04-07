import { hover } from "@testing-library/user-event/dist/hover";
import React from "react";




export default function Navbar(props)
{
    return (
      <div style={{zIndex:2}} className="navTop">
        <nav className="navbar navbar-expand-lg navbar-light " style={{backgroundColor:"#533F4D"}} >
  <a className="navbar-brand brandBtn" name="imgBtn" onClick={props.compM} style={{color:"#EE7C53",fontWeight:"bold", fontSize:"30px", fontFamily:"cursive",marginLeft:"4rem"}}>getPic</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarText" style={{marginLeft:"70%"}}>
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <a className="nav-link homeBtn" name="imgBtn" onClick={props.compM} style={{color:"#ffffff"}}>Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link favBtn" name="favBtn" onClick={props.compM} style={{color:"#ffffff"}}>Favourites</a>
      </li>
      <li className="nav-item">
        <a className="nav-link profBtn" name="profileBtn" onClick={props.compM} style={{color:"#ffffff"}}>Profile</a>
      </li>
    </ul>
   
  </div>
</nav>
</div>


    );
}