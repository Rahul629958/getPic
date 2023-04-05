import React,{useEffect,useState} from "react";
import ReactDOM from "react-dom";
import {createClient} from "pexels";


const client = createClient('n5JnI2uR4dlQnkk1bUGu5sSpL0igFPrPfNxTL3vrzfpWgkibzdCBKmxG');
const query = 'Nature';






export default function Img()
{
    const [arrVal,setArr]=useState([]);

    const fetchImg= ()=>
    {
      client.photos.search({ query, orientation:"square",size:"small", per_page: 24 })
      .then(imgs => {setArr(imgs.photos)})
    //   .then(data=>{
    //     setArr(data.photos)
    //   })
      

    }
    useEffect(()=>
    {
        fetchImg()
    },[])



    return (
        <React.StrictMode>
           <h1> This is Img {arrVal.length} </h1>
        </React.StrictMode>
    );
}