import React from "react";




export default function Navbar(props)
{
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{zIndex:2}}>
  <a className="navbar-brand" name="imgBtn" onClick={props.compM} >getPic</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarText" style={{marginLeft:"80%"}}>
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <a className="nav-link" name="imgBtn" onClick={props.compM}>Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" name="favBtn" onClick={props.compM}>Favourites</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" name="profileBtn" onClick={props.compM}>Profile</a>
      </li>
    </ul>
   
  </div>
</nav>

    );
}