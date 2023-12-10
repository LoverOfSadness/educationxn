import React, {useEffect, useState} from "react";
import axios from "axios";
import STDash from "@/components/STDash";
import HeadderX from "@/components/headerx";
import Futter from "@/components/futter";
import Swal from "sweetalert2";
import UserX from "@/lib/utils";

export default ()=>{

    const optionsx = { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit', hour12: true };
    const  [getxdat,setxdat]=useState([])

    const usr=UserX();



    useEffect(()=>{

        if (usr)

            axios.get("/api/admin/meet?groupx="+ usr.group ).then(value => {


                setxdat(value.data);


            })

    },[usr])



    // useEffect(()=>{
    //     axios.get("/api/admin/meet").then(value => {
    //
    //
    //         setxdat(value.data);
    //
    //
    //     })
    // },[])

    return <>


        <HeadderX/>
        <div className="d-flex">


            <STDash/>
        <div className="container  border m-4">
        <h1 className="text-center my-3"> Current Available Meeting </h1>


            <div className="">




                    <table className="table table-bordered text-white text-center " style= {{backgroundColor:"#013571"}}>
                        <thead >
                        <tr className="">
                            <th className="text-white" style= {{backgroundColor:"#e4b845"}}>Subject</th>
                            <th className="text-white" style= {{backgroundColor:"#e4b845"}}>Duration</th>
                            {/*<th className="text-white" style= {{backgroundColor:"#e4b845"}}>Group</th>*/}
                            <th className="text-white" style= {{backgroundColor:"#e4b845"}}>Time</th>
                            <th className="text-white" style= {{backgroundColor:"#e4b845"}}>Action</th>

                        </tr>
                        </thead>
                        <tbody> {
                            getxdat.map(value => {

                                return <tr className="">

                                    <td className="text-white"
                                        style={{backgroundColor: "#013571"}}>
                                        {value.sub}
                                    </td>   <td className="text-white"
                                                style={{backgroundColor: "#013571"}}>
                                    {value.duration}
                                </td>   <td className="text-white"
                                            style={{backgroundColor: "#013571"}}>
                                    { (new Date(value.time) ).toLocaleDateString('en-IN',optionsx) }
                                </td>    <td className="text-white"
                                             style={{backgroundColor: "#013571"}}>


                                    <div className="btn btn-primary  me-2" onClick={i=>{

                                        window.location.href=value.slink
                                    }}>Attend</div>



                                </td>
                                </tr>
                            })
                        }

                        </tbody>
                    </table>

            </div>


        </div>


        </div>
        <Futter/>
    </>


}