import React,{useState} from "react";
import { getDatabase, ref, remove, set, get } from "firebase/database";
import { getAuth } from "firebase/auth";
import app from "./firebase";

const auth = getAuth(app);

const db = getDatabase();
const user = auth.currentUser;


function RetrieveData()
{

    const [ObjVal,setObj]= useState({});


const dbRef = ref(db);
get(child(dbRef,user.uid))
.then((snapshot)=>
{
    if(snapshot.exists())
    {
        setObj(snapshot.val());
    }else{
        console.log("No data available");
    }
})
.catch((error)=>
{
    console.error(error);
})

return ObjVal;

}

