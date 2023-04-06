import React, { useState } from 'react';
import { createClient } from 'pexels';

const client = createClient('n5JnI2uR4dlQnkk1bUGu5sSpL0igFPrPfNxTL3vrzfpWgkibzdCBKmxG');



export default function ImageViewFav(props)
{
    const [objVal,setObj]= useState({});
    client.photos.show({ id: props.imgID }).then(photo => {
       setObj(photo);
    }).catch((error)=>console.log(error));
    


    return (
        <img src={objVal!=null?(objVal.src!=null?objVal.src.small:""):""} />
        
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