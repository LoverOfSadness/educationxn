import Swal from "sweetalert2";
import axios from "axios";
import {useEffect, useRef, useState} from "react";
import dynamic from "next/dynamic";
import {Modal} from "react-bootstrap";
import AdminDash from "@/components/AdminDash";
import {Field, Form, Formik} from "formik";

export default ()=>{

    const  [getxdat,setxdat]=useState([])
    const  [rgrp,srgp]=useState([])
    const  [sq,sqq]=useState("")
    // const  [qg,qgx]=useState("")
    const  [getudat,setudat]=useState([])
    // const  [getclick,setclick]=useState([])
    const [isOpen, setIsOpen] = useState(false);
    const cdata=useRef("")
    const txc=useRef([])
    const txcxxx=useRef([])
    // const udata=useRef([])
    const clickx=useRef([])
    function loaddata() {
        axios.get("/api/admin/grp").then(value => {



            clickx.current=[]
            setxdat(value.data);


        })

    }
    function loaddataU(s="Not Assign") {
        sqq(null)
if (s!== "Not Assign") {
    srgp(getxdat.filter(ra => ra.name == s)[0].q)
}
        axios.get("/api/admin/grp?g="+s).then(value => {



            // udata.current=[]
            setudat(value.data);




        })

    }

    useEffect(()=>{


        loaddata();

        loaddataU()

    },[])


    return <>



        <Modal show={isOpen} onHide={i=>{setIsOpen(false)}} fullscreen={true} >
            <Modal.Header>
                <div className="text-center w-100 h4 ">{sq}</div>
                <button onClick={i=>{setIsOpen(false)}} className="bg-transparent border-0 h1 m-0">&times;</button>
            </Modal.Header>
            <Modal.Body>

                <div className="container-fluid bg-white">

                    <div className="d-flex justify-content-center h-100" >

                        <div className="border p-5 overflow-y-scroll w-100 h-75">


                        {txc.current.map((tc,ctP)=>{


                            return <>

                                Qustion {ctP+1}
                                <div className="mb-3 border p-4">
                                <div className="mb-4" dangerouslySetInnerHTML={{__html: tc.q }}></div>

                                <div className="bg-success w-100 p-2">

<div className="" dangerouslySetInnerHTML={{__html:txcxxx.current.a[ctP]}}></div>

                                </div>
                                </div>


                            </>

                        })}



                        </div>
                    </div>

                </div>




            </Modal.Body>

            <Modal.Footer>


                <Formik initialValues={{}} onSubmit={u=>{

                    Swal.fire({
                        title: "Submting Results..",
                        didOpen: () => {

                            Swal.showLoading();

                            axios.post("/api/admin/qes?idx=" + txcxxx.current._id,u).then(r => {


                            })
                        }
                    }
                    )


                }}>

                    <Form className="w-100 d-flex">
                        <Field name={"x[0]"} className="col form-control " placeholder="Total Mask"></Field>
                        <Field name={"x[1]"} className="col form-control mx-2" placeholder="Obtain Mask"></Field>
                        <Field name={"x[2]"} className="col form-control" placeholder="Obtain Grade"></Field>

                        <input type="submit"  className="btn btn-primary col mx-2" name="" id="" value={"Submit "}/>
                    </Form>


                </Formik>
            </Modal.Footer>

        </Modal>






        <div className="d-flex">

            <AdminDash/>
            <div className="container">


                <h4>Manage Group</h4>
                <div className=" p-4 rounded border">
                    <div className="d-flex justify-content-between"
                    >

                        <select className="form-control mx-4" onChange={event => {



                            loaddataU(event.target.value)


                        }}>
                            <option>Select Group</option>
                            {getxdat.map(valu => {

                                return <option key={valu._id} value={valu.name}>{valu.name}</option>
                            })

                            }

                        </select>

                        <select className="form-control " onChange={event => {


sqq(event.target.value)


                        }}>
                            <option>Select Question</option>
                            {rgrp.map(valu => {

                                return <option key={valu} value={valu}>{valu}</option>
                            })

                            }

                        </select>



                    </div>









                    {
                        sq===null?<></>:<table className="table table-bordered text-white text-center mt-5 ite" style= {{backgroundColor:"#013571"}}>
                        <thead >
                        <tr className="bg-danger">
                            <th className="text-white" style= {{backgroundColor:"#e4b845"}}>Student Name</th>
                            <th className="text-white" style= {{backgroundColor:"#e4b845"}}>Student Email</th>
                            <th className="text-white" style= {{backgroundColor:"#e4b845"}}>Phone Number</th>
                            <th className="text-white" style= {{backgroundColor:"#e4b845"}}>Action</th>
                        </tr>
                        </thead>
                        <tbody>

                        {
                            getudat.map(value => {

                                return <tr className="bg-danger">
                                    <td className="text-white" style= {{backgroundColor:"#013571"}}>{value.name}</td>
                                    <td className="text-white" style= {{backgroundColor:"#013571"}}>{value.email}</td>
                                    <td className="text-white" style= {{backgroundColor:"#013571"}}>{value.phone}</td>
                                    <td  className="text-white " style= {{backgroundColor:"#013571"}}>


                                        <div className="d-flex justify-content-center">

                                            <div className="mx-3 text-white" onClick={t=>{



                                              Swal.fire({
                                                  title:"Fetching Answer..",
                                                  allowOutsideClick: false,
                                                  showConfirmButton: false,
                                                  didOpen: () => {

                                                      Swal.showLoading();

                                                      axios.get("/api/admin/qes?id="+value._id+"&g="+sq).then(r =>{





                                                          if (
                                                              r.data.length>0

                                                          ){

                                                              axios.get("/api/admin/qgrp?g="+sq).then(rq => {

                                                                  txc.current = rq.data
                                                                  txcxxx.current=r.data[0]

                                                                  console.log(r.data,"wertyuio")
                                                                  Swal.close()
                                                                  setIsOpen(true);
                                                              })
                                                          }else {

                                                              Swal.close()
                                                              Swal.fire("Not Attened","Not Attented","warning")

                                                          }



                                                          }

                                                      )

                                                  },
                                              })


                                                // setIsOpen(true)



                                            }}>View</div>

<div className="text-white">


    {/*{  ( value.q.filter(cp=>cp==sq)).length>0 ?"Attempted":"UnAttempt" }*/}






</div>


                                            {/*<input type={"checkbox"} onChange={event =>*/}
                                            {/*{*/}

                                            {/*    if( udata.current.indexOf(value._id) !==-1)*/}
                                            {/*    {*/}
                                            {/*        udata.current= udata.current.filter(item => item !== value._id);*/}

                                            {/*    } else {*/}

                                            {/*        udata.current.push(value._id)*/}

                                            {/*    }*/}
                                            {/*}} /> */}


                                        </div>



                                    </td>
                                </tr>

                            })

                        }


                        </tbody>
                    </table>}



                </div>

            </div>

        </div>


    </>
}