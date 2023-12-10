import React, {useEffect, useRef, useState} from "react";

import Swal from "sweetalert2";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import {FaEnvelope, FaKey, FaTrash} from "react-icons/fa";
import dynamic from "next/dynamic";
import AdminDash from "@/components/AdminDash";

export default ()=>{
    const  [getudat,setudat]=useState([])
    const  [isOpen,setIsOpen]=useState(false)
    const  [isOpenE,setIsOpenE]=useState(false)

    const [xtxcc,xxxtt] = useState("");
    const cdata=useRef("")

    const [Editor,seteditor] = useState(null);



    function loaddataU(s="u") {

        axios.get("/api/sales?x=index").then(value => {


            setudat(value.data);

        })

    }

    useEffect(() => {
        loaddataU()
    }, []);

    useEffect(()=>{


        seteditor(dynamic(() => import("@/components/Editor/index")))


    },[])

    async function setvalueofdes  (rtzg)  {

        cdata.current=""+rtzg

    }




    return<>



        <div className="d-flex">

            <AdminDash/>



            <Modal show={isOpenE} onHide={()=>{setIsOpenE(false)}} fullscreen={true} >
                <Modal.Header>
                    <div className="w-100 h3"><div className="text-center">Sending Message To {xtxcc} </div>
                    </div>
                    <button onClick={event => {setIsOpenE(false)}} className="bg-transparent border-0 h1 m-0">&times;</button>
                </Modal.Header>
                <Modal.Body style={{backgroundColor:"lightgray"}}>

                    <input className="form-control py-3 h1"  id="coursex" placeholder="Subject ......"/>

                    {Editor?
                        <Editor form={setvalueofdes} hi={600}/>
                        :""}


                    <h3 className="p-3 rounded w-100 mt-3 fixed-bottom text-center btn" style={{backgroundColor:"#013571",color:"white"}} onClick={(e)=>{


                        Swal.fire({
                            title: `Do you want to Send mail payment status for ${xtxcc}`,
                            icon: "question",
                            showLoaderOnConfirm: true,
                            showCancelButton: true,
                            preConfirm() {


                                axios.post("/api/sales", {

                                        ue: xtxcc,
                                        sub: document.getElementById("coursex").value,
                                        text: cdata.current

                                    }
                                ).then(() => {

                                    setIsOpenE(false)

                                    Swal.fire("Mail Sent","Your Email Hash been sent ","success")


                                })

                            }
                        })


                    }}> Send Message </h3>

                </Modal.Body>


            </Modal>


            <Modal show={isOpen} onHide={(i)=>{setIsOpen(false)}} fullscreen={false}  centered={true} onEscapeKeyDown={ip=>{ip.preventDefault()}}>
                <Modal.Header style={{backgroundColor:"#013571",color:"white"}}>
                    <div className="w-100 h3"><div className="text-center">Add New Teacher</div>
                    </div>
                    <button onClick={(i)=>{setIsOpen(false)}} className="bg-transparent border-0 h1 m-0">&times;</button>
                </Modal.Header>
                <Modal.Body style={{backgroundColor:"#013571",color:"white"}}>


                    <div className="card  bg-transparent p-5" style={{
                    }}>


                        <input type="text"  name="name" className="form-control mt-1 rtx" placeholder="Name"/>
                        <input type="text"  name="email" className="form-control mt-1 rtx" placeholder="Email"/>



<div className="text-white  border rounded p-3">


    <input type="checkbox" name="Give Grades" value="/admin/grade" style={{transform:"scale(2)"}} className="mx-3"/>Give Grades
    <br/><input type="checkbox" name="Give Assignment" value="/admin/assignment" style={{transform:"scale(2)"}} className="mx-3"/>Give Assignment
    <br/><input type="checkbox" name="Manage Course" value="/admin/coursemat" style={{transform:"scale(2)"}} className="mx-3"/>Manage Course
    <br/><input type="checkbox" name="Manage Announcements" value="/admin/assX" style={{transform:"scale(2)"}} className="mx-3"/>Manage Announcements
    <br/><input type="checkbox" name="Manage Assignment" value="/admin/asgnX" style={{transform:"scale(2)"}} className="mx-3"/>Manage Assignment
    <br/><input type="checkbox" name="Manage Course Information" value="/admin/CinfoX" style={{transform:"scale(2)"}} className="mx-3"/>Manage Course Information
    <br/><input type="checkbox" name="Manage Notification" value="/admin/NotiX" style={{transform:"scale(2)"}} className="mx-3"/>Manage Notification
    <br/><input type="checkbox" name="Manage User" value="/admin/stdX" style={{transform:"scale(2)"}} className="mx-3"/>Manage User
    <br/><input type="checkbox" name="Manage Test" value="/admin/Mqs" style={{transform:"scale(2)"}} className="mx-3"/>Manage Test
    <br/><input type="checkbox" name="Manage Faculty" value="/admin/facX" style={{transform:"scale(2)"}} className="mx-3"/>Manage Faculty
    <br/><input type="checkbox" name="Manage Teacher" value="/admin/thr" style={{transform:"scale(2)"}} className="mx-3"/>Manage Teacher


    <br/><input type="checkbox" name="Manage Courses" value="/admin/store" style={{transform:"scale(2)"}} className="mx-3"/>Manage User
    <br/><input type="checkbox" name="Manage User" value="/admin/stdX" style={{transform:"scale(2)"}} className="mx-3"/>Manage User
    <br/><input type="checkbox" name="Manage User" value="/admin/stdX" style={{transform:"scale(2)"}} className="mx-3"/>Manage User
    <br/><input type="checkbox" name="Manage Meeting" value="/admin/meet" style={{transform:"scale(2)"}} className="mx-3"/>Manage Meeting
    <br/><input type="checkbox" name="Messages" value="/admin/disV" style={{transform:"scale(2)"}} className="mx-3"/>Messages


</div>








                        <input type="text"  name="pass" className="form-control mt-1 rtx" placeholder="Password"/>

                        <div className="mt-3 align-self-center">

                            <div className="btn btn-primary" onClick={event => {


                                let r= document.querySelectorAll(".rtx")

                                let checkboxes = document.querySelectorAll('input[type="checkbox"]');
                                let checkedCheckboxes = Array.from(checkboxes).filter(function (checkbox) {
                                    return checkbox.checked;
                                });

                                let rg=[]
                                checkedCheckboxes.forEach(function (checkbox) {

                                    let p={}
                                    p[checkbox.name]=checkbox.value
                                    rg.push(p)


                                })

                                let dat={}

                                dat["id"]=JSON.stringify(rg)

                                r.forEach(rx=>{
                                    dat[rx.name]=rx.value
                                })





                                Swal.fire(
                                    {title:"Details are",html: '<div style="white-space: pre-wrap;">'+JSON.stringify(dat) +"</div>",icon:"info",

                                        showCancelButton:true,
                                        showLoaderOnConfirm:true,

                                        preConfirm:async () => {

                                            Swal.showLoading()

                                            return await axios.post("/api/sales?x=reg", dat).then(r => {

                                                Swal.fire("Success", "Sales Person Created", "success").then(y=>{

                                                    setIsOpen(false)
                                                })


                                            })


                                        }


                                    })



                            }}
                            ><FaKey/> Register </div>

                        </div>
                    </div>

                </Modal.Body>

            </Modal>





            <div className="container-fluid py-3 bg-white rounded">


                <div className="container  text-center">


                    <div className="btn btn-primary float-end my-2" onClick={u=>{

                        setIsOpen(true)
                    }}>Add</div>


                    <table className="table table-bordered table-striped table-light">
                        <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Permission</th>
                            <th scope="col">Email</th>
                            <th scope="col">Action</th>
                        </tr>
                        </thead>
                        <tbody>


                        {getudat.map( (et,ind)=>{



                            return <tr key={ind}>
                                <td>{et.name}</td>
                                <td><pre>{

                                    JSON.parse( et.id).map((obj, index) => {
                                            const [key, value] = Object.entries(obj)[0];
                                            return (
                                                <div key={index}>
                                                    <p>{key}</p>

                                                </div>
                                            );
                                        })




                                }</pre></td>
                                <td>{et.email}</td>
                                <td className=" " onClick={y=>{

                                    axios.get("/api/sales?x=del&del="+et._id).then(y=>{

                                        window.location.reload()
                                    })

                                }}>
                                    <div className="btn btn-danger">

                                        <FaTrash/> Delete
                                    </div>
                                </td>


                            </tr>


                        })
                        }
                        </tbody>
                    </table>
                </div></div>

        </div>
    </>
}