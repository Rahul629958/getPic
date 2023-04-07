import { hover } from "@testing-library/user-event/dist/hover";
import React, { useState } from "react";




export default function Navbar(props)
{
    const [queryVal,setQuery]=useState("");
  


    return (
      <div style={{zIndex:2}} className="navTop">
        <nav className="navbar navbar-expand-lg navbar-light " style={{backgroundColor:"#533F4D",opacity:0.9}} >
  <a className="navbar-brand brandBtn" name="homeBtn" onClick={props.compM} style={{color:"#EE7C53",fontWeight:"bold", fontSize:"30px", fontFamily:"cursive",marginLeft:"4rem"}}>getPic</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarText" style={{marginLeft:"20%"}}>
  {/* <form className="form-inline my-2 my-lg-0"> */}
      <input className="form-control mr-sm-2" type="search" placeholder="Search for images. eg.'ocean','night', etc" aria-label="Search" style={{width:"20rem"}} onChange={(e)=>setQuery(e.target.value)} value={queryVal}/>
      <button className="btn btn-outline-success my-2 my-sm-0" name="imgBtn" data-val={queryVal} onClick={props.compM}>Search</button>
    {/* </form> */}
    <ul className="navbar-nav mr-auto" style={{marginLeft:"30%"}}>
      <li className="nav-item">
        <a className="nav-link homeBtn" name="homeBtn" onClick={props.compM} style={{color:"#ffffff"}}>Home <span className="sr-only">(current)</span></a>
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