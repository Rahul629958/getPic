import React, { useState } from "react";

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
                style={{ width: "20rem" }}
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
          </div>
          <div className="col-lg-6 col-md-12 rightBox">
            <h2>Hi there 2</h2>
          </div>
        </div>
      </div>
    </React.StrictMode>
  );
}
