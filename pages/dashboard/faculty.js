import STDash from "@/components/STDash";
import StProfile from "@/components/StProfile";
import HeadderX from "@/components/headerx";
import Futter from "@/components/futter";
import FacultyX from "@/components/dashboard/FacultyX";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {rtx} from "@/lib/Rh";

export default function About() {


    const  [getxdat,setxdat]=useState([])


    function loaddataU(s="u") {




        axios.get("/api/admin/fac?id="+JSON.parse(localStorage.getItem("user")).group).then(value => {


            setxdat(value.data);

        })

    }

    useEffect(() => {
        loaddataU()
    }, []);


    return (
        <div className="">    <HeadderX/>

            <div className="d-flex" >
                <STDash/>



                <div className="container" >

                    <div className="row me-2"  style={{backgroundColor:"#cbcbcb"}}>
                        <h3 className="p-3 rounded col-12" style={{backgroundColor:"#013571",color:"white"}}>Faculty Member</h3>

                        { getxdat.map(p=>{


                            return    <div className="d-flex col-4 justify-content-between align-items-center pt-4 card bg-transparent border-0" style={{ width:"400px"}}>
                                <div className="text-center">
                                    <img className="rounded-circle mb-3" src={rtx.cdn+"/"+p.dp} alt="Person" width="200" height="200"/>
                                    <p className="h4 " style={{color:"#013571"}}>{p.name}</p>
                                    <p className="text-black">{p.position}</p>
                                </div>

                            </div>


                        })


                        }

                    </div>
                </div>


            </div>

            <Futter/>

        </div>
    );
}