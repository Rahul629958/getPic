import React, {useState} from "react";
import ReactDOM from "react-dom";
import Profile from "./Profile";
import Fav from "./Fav";
import Auth from "./Auth";
import Img from "./Img";


export default function App()
{
    const [ProfileBtn,setProfile] = useState(false);
    const [FavBtn,setFav] = useState(false);
    const [AuthBtn,setAuth] = useState(true);
    const [ImgBtn, setImg] = useState(false);

   function changeComponent(btnInfo)
    {
        const btnID = btnInfo.target.name;
        if(btnID ==="profileBtn")
        {
            setProfile(true);
            setFav(false);
            setAuth(false);
            setImg(false);
        }
        else   if(btnID ==="favBtn")
        {
            setProfile(false);
            setFav(true);
            setAuth(false);
            setImg(false);
        } else if(btnID ==="authBtn")
        {
            setProfile(false);
            setFav(false);
            setAuth(true);
            setImg(false);
        }  else if(btnID ==="imgBtn")
        {
            setProfile(false);
            setFav(false);
            setAuth(false);
            setImg(true);
        }
         
    }

    return (
        <React.StrictMode>
            <button name="profileBtn" onClick={changeComponent} hidden={AuthBtn?true:false}>Profile</button>
            <button name="favBtn" onClick={changeComponent} hidden={AuthBtn?true:false}>Fav</button>
            {/* <button name="authBtn" onClick={changeComponent}>Auth</button> */}
            <button name="imgBtn" onClick={changeComponent} hidden={AuthBtn?true:false}>Image</button>
           {ProfileBtn?<Profile />: FavBtn?<Fav /> :AuthBtn?<Auth compM={changeComponent} />: ImgBtn?<Img /> :<h1>Page Not Found!</h1>}
        </React.StrictMode>
    );
}