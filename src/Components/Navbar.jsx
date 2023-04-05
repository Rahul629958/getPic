import React from "react";




export default function Navbar(props)
{
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" name="imgBtn" onClick={props.compM} >getPic</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarText">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" name="imgBtn" onClick={props.compM}>Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" name="favBtn" onClick={props.compM}>Favourites</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" name="profileBtn" onClick={props.compM}>Profile</a>
      </li>
    </ul>
   
  </div>
</nav>

    );
}