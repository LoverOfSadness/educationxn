import {useEffect, useState} from "react";
import axios from "axios";
import UserX from "@/lib/utils";


export default function (){

    const usr=UserX()
    const [getx,setx]=useState([])

    useEffect(()=>{

        if (usr)
        axios.get("/api/admin/qes?id="+usr?._id).then(r =>{


            setx(r.data)
        })


    },[usr])

    return <div className="container-fluid bg-white mt-1">

        <div className="d-flex justify-content-center text-white" style={{marginRight:"5%"}}>

            <div className="text-center w-100">


                <table className="table table-bordered text-white" style= {{backgroundColor:"#013571"}}>
                    <thead >
                    <tr className="bg-danger">
                        <th className="text-white" style= {{backgroundColor:"#e4b845"}}>Test Name</th>
                        <th className="text-white" style= {{backgroundColor:"#e4b845"}}>Total Marks</th>
                        <th className="text-white" style= {{backgroundColor:"#e4b845"}}>Marks Obtained</th>
                        <th className="text-white" style= {{backgroundColor:"#e4b845"}}>Grade</th>
                    </tr>
                    </thead>
                    <tbody>



                    {getx.map(rt=> {
                        return <tr>
                            <td className="text-white" style={{backgroundColor: "#013571"}}>{rt.q}</td>
                            <td className="text-white" style={{backgroundColor: "#013571"}}>{rt.x[0]}</td>
                            <td className="text-white" style={{backgroundColor: "#013571"}}>{rt.x[1]}</td>
                            <td className="text-white" style={{backgroundColor: "#013571"}}>{rt.x[2]}</td>
                        </tr>

                    })
                }

                    </tbody>
                </table>




        </div>

        <div className="row">


        </div>

        </div></div>;
}