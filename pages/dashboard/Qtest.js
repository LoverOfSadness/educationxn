import {useEffect, useState} from "react";
import axios from "axios";

export default ()=>{

    const  [getxdat,setxdat]=useState([])


    useEffect(()=>{
        axios.get("/api/admin/qgrp").then(value => {


            setxdat(value.data);


        })
    },[])

    return <>

        <div className="container my-5 pt-4 border">
        <h1 className="text-center"> Current Available Test </h1>


            <div className="my-5">


                { getxdat.map(r=>{

                   return  <div className="form-control d-flex align-items-center justify-content-between">
<div className="">{r.name}</div>


                       <div className="btn btn-primary" onClick={sd=>{
                           window.location="/dashboard/quiz/"+r.name
                       }}>


                           Take Test
                       </div>

                   </div>

                }) }


            </div>


        </div>
    </>


}