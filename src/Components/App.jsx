import React, {useState} from "react";
import ReactDOM from "react-dom";
import Profile from "./Profile";
import Fav from "./Fav";
import Auth from "./Auth";
import Img from "./Img";
import Home from "./Home";
import {} from "bootstrap";
import Navbar from "./Navbar";


export default function App()
{
    const [ProfileBtn,setProfile] = useState(false);
    const [FavBtn,setFav] = useState(false);
    const [AuthBtn,setAuth] = useState(false);
    const [ImgBtn, setImg] = useState(false);
    const [home,setHome] = useState(true);
    const [ImgProps,setImgProps]=useState("");
   function changeComponent(btnInfo)
    {
        const btnID = btnInfo.target.name;
        
        if(btnID ==="profileBtn")
        {
            setProfile(true);
            setFav(false);
            setAuth(false);
            setImg(false);
            setHome(false);
        }
        else   if(btnID ==="favBtn")
        {
            setProfile(false);
            setFav(true);
            setAuth(false);
            setImg(false);
            setHome(false);
        } else if(btnID ==="authBtn")
        {
            setProfile(false);
            setFav(false);
            setAuth(true);
            setImg(false);
            setHome(false);
        }  else if(btnID ==="imgBtn")
        {const query = btnInfo.target.dataset.val;
            
            setProfile(false);
            setFav(false);
            setAuth(false);
            setImg(true);
            setHome(false);
            setImgProps(query);
        }
        else if(btnID ==="homeBtn")
        {
            setProfile(false);
            setFav(false);
            setAuth(false);
            setImg(false);
            setHome(true);
        } 
         
    }
//    console.log("This is : " +ImgProps);
    return (
        <React.StrictMode>
            {(!AuthBtn)&&<Navbar compM={changeComponent}/>}
           {ProfileBtn?<Profile />: FavBtn?<Fav /> :AuthBtn?<Auth compM={changeComponent} />: ImgBtn?<Img data={ImgProps}/> :home?<Home compM={changeComponent}/>:<h1>Page Not Found!</h1>}
        </React.StrictMode>
    );
}