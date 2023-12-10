import UserX from "@/lib/utils";
import {useEffect, useState} from "react";
import Swal from "sweetalert2";
import UploadX from "@/components/UploadX";
import {rtx} from "@/lib/Rh";
import {FaPencil} from "react-icons/fa6";
import axios from "axios";


export default function (){


    const [dp,setdp]=useState("dp.jpg")
    const [xx,chx]=useState(true)

    const usr=UserX();


    useEffect(()=>{

        setdp(JSON.parse(window.localStorage.getItem('user')).dp)

    },[])
    const shox = (ti,v) => {

        Swal.fire({title:""+ti,


            icon:"question",
            showConfirmButton:true,
            confirmButtonText:"Change",
        input:"text",
            showCancelButton:true,
            showLoaderOnConfirm: true,
             preConfirm: async (inputValue) => {


            let yi={}
                 yi[v]=inputValue
               let h=  await  axios.post("/api/users/updatex?id="+usr._id,yi)

                 localStorage.setItem("user",JSON.stringify(h.data))

                 window.location.reload()

             }

        }).then(ii=>{

        })

    }

    const changedp = async (ty) => {


        let h = await axios.post("/api/users/updatex?id=" + usr._id, {dp:ty})

        localStorage.setItem("user", JSON.stringify(h.data))
        window.location.reload()


    }

    return <div className="container-fluid me-4 ">

        <h3 className="p-3 rounded w-100 mb-4  text-center" style={{backgroundColor:"#013571",color:"white"}}>Profile</h3>
        <div className="d-flex justify-content-center text-white fw-bold" style={{marginLeft:"20%"}}>

            <div className="text-center w-100" >
                <div className="w-75 justify-content-center d-flex">

                    <div className="">

                        <div className="rounded-circle p-1" style={{backgroundColor: xx?"gray":"white"}}>
                        {xx ? <img src={rtx.cdn+"/"+ dp} width={150} height={150} alt="Image" className="rounded-circle" />:<UploadX cb={changedp}  />}
                    </div>
                        <div className="rounded-4 text-bg-dark  border-primary border mt-2" onClick={r=>{chx(!xx)}}> <small style={{cursor:"pointer"}} >  {xx? "Change image" :"Cancel"}</small></div></div>

            </div>


                <div className="py-2 px-5 rounded mt-2 w-75 mt-3" style={{backgroundColor:"#013571"}}   onClick={(o)=>{

                    shox("Name...?","name")
                }}><div className="d-flex justify-content-between align-items-center">{usr?.name} <FaPencil/> </div> </div>


                <div className="w-75 d-flex">
                <div onClick={i=>{
                    shox("What is Your Age...?","age")
                }} className="py-2 px-5 rounded  mt-2 w-50  mt-3 me-1" style={{backgroundColor:"#013571"}}> <div className="d-flex justify-content-between align-items-center">{usr?.age} <FaPencil/> </div></div>
                <div onClick={i=>{
                    shox("What is Your Gender...?","sex")
                }} className="py-2 px-5 rounded  mt-2 w-50 mt-3 ms-1" style={{backgroundColor:"#013571"}}><div className="d-flex justify-content-between align-items-center">{usr?.sex} <FaPencil/> </div></div>
                </div>



                <div className="w-75 d-flex">
                <div   onClick={(o)=>{

                    shox("Whats Your Phone Number...?","phone")
                }}


                       className="py-2 px-5 rounded  mt-2 w-50 me-1 mt-3" style={{backgroundColor:"#013571"}}><div className="d-flex justify-content-between align-items-center">{usr?.phone} <FaPencil/> </div></div>



                    <div
                        onClick={(o)=>{

                            shox("Whats Your Email Address...?","email")
                        }}

                        className="py-2 px-5 rounded  mt-2 w-50 mt-3 ms-1" style={{backgroundColor:"#013571"}}><div className="d-flex justify-content-between align-items-center">{usr?.email} <FaPencil/> </div></div>
                </div>


                <div onClick={(o)=>{

                    shox("Whats Your Address...?","addr")
                }} className="py-2 px-5 rounded  mt-2 w-75 mt-3" style={{backgroundColor:"#013571"}}><div className="d-flex justify-content-between align-items-center">{usr?.addr} <FaPencil/> </div></div>


            </div>


        </div>

        <div className="row justify-content-center mt-4">

            <div className="btn btn-primary col-4 " onClick={r=>{


                shox(" Enter Your New Password","password")


            }}> Change Password</div>


        </div>

    </div>
}