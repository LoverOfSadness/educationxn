import {useEffect, useState} from "react";
import axios from "axios";
import STDash from "@/components/STDash";
import HeadderX from "@/components/headerx";
import Futter from "@/components/futter";
import UserX from "@/lib/utils";

export default ()=>{

    const usr=UserX();

    const  [getxdat,setxdat]=useState([])


    useEffect(()=>{

        if (usr)

            axios.get("/api/admin/qgrp?h="+ usr.group ).then(value => {


                setxdat(value.data);


            })

    },[usr])

    return <>


        <HeadderX/>
        <div className="d-flex">


            <STDash/>
        <div className="container  border m-4">
        <h1 className="text-center my-3"> Current Available Test </h1>


            <div className="">


                { getxdat.map(r=>{

                   return  <div className="form-control d-flex align-items-center justify-content-between">
<div className="">{r}</div>


                       <div className="btn btn-primary" onClick={sd=>{
                           window.location="/dashboard/quiz/"+r
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