import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { createClient } from "pexels";
import ImageView from "./ImageView";

const client = createClient(
  "n5JnI2uR4dlQnkk1bUGu5sSpL0igFPrPfNxTL3vrzfpWgkibzdCBKmxG"
);
const query = "Nature";

export default function Img() {
  const [arrVal, setArr] = useState([]);

  client.photos
    .search({ query, orientation: "square", size: "small", per_page: 24 })
    .then((imgs) => {
      setArr(imgs.photos);
    });

  return (
    <div className="container">
      <div className="row">
        {arrVal.map((x) => (
          <ImageView imgData={x} />
        ))}
      </div>
    </div>
  );
}
