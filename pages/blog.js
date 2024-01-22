import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import axios from "axios";
import {rtx} from "@/lib/Rh";

export default () =>{
const diya = useRouter()
    const [getx,setx] = useState({})

useEffect(() =>{
    if (diya.query.id)
    {

        axios.get("/api/admin/blog?id="+diya.query.id).then(ttf=>{

setx(ttf.data)
        })

    }
},[diya.query])




    return <>

    <div className="">{getx}</div>


    </>

}