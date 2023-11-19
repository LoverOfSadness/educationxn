import {useEffect, useState} from "react";
import axios from "axios";
import STDash from "@/components/STDash";
import HeadderX from "@/components/headerx";
import Futter from "@/components/futter";

export default ()=>{

    const  [getxdat,setxdat]=useState([])


    useEffect(()=>{
        axios.get("/api/admin/qgrp").then(value => {


            setxdat(value.data);


        })
    },[])

    return <>


        <HeadderX/>
        <div className="d-flex">


            <STDash/>
        <div className="container  border m-4">
        <h1 className="text-center my-3"> Current Available Test </h1>


            <div className="">


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


        </div>
        <Futter/>
    </>


}