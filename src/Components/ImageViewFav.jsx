import React, { useState } from 'react';
// import { createClient } from 'pexels';




// const client = createClient('n5JnI2uR4dlQnkk1bUGu5sSpL0igFPrPfNxTL3vrzfpWgkibzdCBKmxG');
export default function ImageViewFav(props)
{
 
    // const [objVal,setObj]= useState({});
    // client.photos.show({ id: props.imgID }).then(photo =>
    //    setObj(photo)
    // );
    


    return (
        <div 
      className="col-lg-3 col-md-6 col-sm-12"
      style={{ paddingBottom: "10px" }} >
       

         <img src={props.imgObj.ImgURL} alt='nature image' style={{width:"100%"}}></img>
        </div>
        
    )




}




// export default function Img() {
//     const [arrVal, setArr] = useState([]);
  
//     client.photos
//       .search({ query, orientation: "square", size: "small", per_page: 24 })
//       .then((imgs) => {
//         setArr(imgs.photos);
//       });
  
//     return (
//       <div className="container">
//         <div className="row">
//           {arrVal.map((x) => (
//             <ImageView imgData={x} key={x.id} />
//           ))}
//         </div>
//       </div>
//     );
//   }