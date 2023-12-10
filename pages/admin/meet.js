import React, {useEffect, useState} from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import AdminDash from "@/components/AdminDash";
import axios from "axios";
import {Field, Form, Formik} from "formik";
import Swal from "sweetalert2";

export default () => {
    const optionsx = { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit', hour12: true };

    const  [getudat,setudat]=useState([])

    const [startDate, setStartDate] = useState(new Date());

    const filterPassedTime = (time) => {
        const currentDate = new Date();
        const selectedDate = new Date(time);

        return currentDate.getTime() < selectedDate.getTime();
    };

    const [getxdat, setxdat] = useState([])
    function loaddataU() {

        axios.get("/api/admin/meet").then(value => {



            setudat(value.data);




        })

    }
    function loaddata() {
        axios.get("/api/admin/grp").then(value => {


            setxdat(value.data);


        })

    }


    useEffect(() => {
        loaddata()
        loaddataU()

    }, []);
    return <>


        <div className="d-flex">

            <AdminDash/>

            <div className="container">

                <div className="mt-5 me-4 border p-5">
                    <Formik initialValues={{}} onSubmit={y => {


                        y.time=startDate.toISOString()


                      Swal.fire({
                          icon:"warning",
                          title:"Do You Want to Add Meeting",
                          showLoaderOnConfirm:true,
                          showConfirmButton:true,
                          showCancelButton:true,
                          preConfirm:()=>axios.post("/api/admin/meet",y)
                      })




                    }}>

                        <Form>
                        <Field type="text" name="sub" id="" placeholder={"Subject"}  className="form-control " />
                        <Field type="text" name="duration" id="" placeholder={"Duration"}  className="form-control " />
                        <Field as={"select"} className="form-control mt-1" name="group">
                            <option>Select Classroom</option>
                            {getxdat.map(valu => {

                                return <option key={valu._id} value={valu.name}>{valu.name}</option>
                            })

                            }

                        </Field>
                         <DatePicker className="form-control col-6 mt-1" selected={startDate}
                                    onChange={(date) => setStartDate(date)} showTimeSelect
                                    dateFormat="dd-MM-yyyy h:mm aa"/>


                            <input type="submit"  id=""  value={"Add New"} className="btn btn-primary mt-1 form-control"/>


                    </Form>

                    </Formik>
                </div>

                <div className="border mt-5 me-4 p-5 pt-2">
<div className="h3 text-center">All Meetings</div>

                    <table className="table table-bordered text-white text-center " style= {{backgroundColor:"#013571"}}>
                        <thead >
                        <tr className="">
                            <th className="text-white" style= {{backgroundColor:"#e4b845"}}>Subject</th>
                            <th className="text-white" style= {{backgroundColor:"#e4b845"}}>Duration</th>
                            <th className="text-white" style= {{backgroundColor:"#e4b845"}}>Classroom</th>
                            <th className="text-white" style= {{backgroundColor:"#e4b845"}}>Time</th>
                            <th className="text-white" style= {{backgroundColor:"#e4b845"}}>Action</th>

                        </tr>
                        </thead>
                        <tbody> {
                            getudat.map(value => {

                                return <tr className="">

                                    <td className="text-white"
                                        style={{backgroundColor: "#013571"}}>
                                        {value.sub}
                                    </td>   <td className="text-white"
                                        style={{backgroundColor: "#013571"}}>
                                    {value.duration}
                                    </td>   <td className="text-white"
                                        style={{backgroundColor: "#013571"}}>
                                    {value.group}
                                    </td>   <td className="text-white"
                                        style={{backgroundColor: "#013571"}}>
                                    { (new Date(value.time) ).toLocaleDateString('en-IN',optionsx) }
                                    </td>    <td className="text-white"
                                        style={{backgroundColor: "#013571"}}>


                                    <div className="btn btn-primary  me-2" onClick={i=>{

                                        window.location.href=value.alink
                                    }}>Host</div>
                                            <input type={"button"} onClick={et => {

                                                axios.delete("/api/admin/aquiz?id=" + value._id).then(res => {


                                                    Swal.fire("Success", "Group Created Successfully", "success").then(r => {

                                                        loaddata()


                                                    })


                                                })


                                            }} className="btn btn-danger" value="delete"/>


                                    </td>
                                </tr>
                            })
                        }

                                        </tbody>
                    </table>
                </div>
            </div>
        </div>


    </>


}