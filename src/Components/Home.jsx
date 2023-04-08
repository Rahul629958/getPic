import React, { useState } from "react";
import pic1 from "../Images/pic1.jpg";
import pic2 from "../Images/pic2.jpg";
import pic3 from "../Images/pic3.jpg";
import pic4 from "../Images/pic4.jpg";

export default function Home(props) {
  const [queryVal, setQuery] = useState("");

  return (
    <React.StrictMode>
      <div
        style={{ fontWeight: "bolder", fontSize: "60px", visibility: "hidden" }}
      >
        .
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 col-md-12 leftBox">
            <h1>getPic</h1>
            <div className="row">
              <input
                className="form-control mr-sm-2 inputHome col-6"
                type="search"
                placeholder="Get your pic here..."
                aria-label="Search"
                style={{ width: "10rem" }}
                onChange={(e) => setQuery(e.target.value)}
                value={queryVal}
              />
              <button
                className="btn btn-outline-warning my-2 my-sm-0 btnHome col-3"
                name="imgBtn"
                data-val={queryVal}
                onClick={props.compM}
              >
                Search
              </button>
            </div>
            <p>A good snapshot keeps a moment that's gone from running away.</p>
            
          </div>
          <div className="col-lg-6 col-md-12 rightBox">
            <div className="containerCustom">
              <div className="wrapper">
                {/* <img className="imgInC" src={pic1} /> */}
                <img className="imgInC" src={pic2} />
                <img className="imgInC" src={pic3} />
                <img className="imgInC" src={pic4} />
                <img
                  className="imgInC"
                  src="https://images.pexels.com/photos/2215380/pexels-photo-2215380.jpeg"
                />
                {/*<img className="imgInC"  src="https://images.pexels.com/photos/2215380/pexels-photo-2215380.jpeg"/>
            <img className="imgInC"  src="https://images.pexels.com/photos/2215380/pexels-photo-2215380.jpeg"/>
            <img className="imgInC"  src="https://images.pexels.com/photos/2215380/pexels-photo-2215380.jpeg"/> */}
              </div>
            </div>
            {/* <p><a href = "mailto: rahulsoniubr@gmail.com">Contact me</a></p> */}
          </div>
        </div>
      </div>
    </React.StrictMode>
  );
}
