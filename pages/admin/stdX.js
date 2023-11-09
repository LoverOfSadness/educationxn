import Swal from "sweetalert2";
import axios from "axios";
import {useEffect, useRef, useState} from "react";
import dynamic from "next/dynamic";

export default ()=>{

    const  [getxdat,setxdat]=useState([])
    const  [getudat,setudat]=useState([])

    const  [getclick,setclick]=useState([])



    const cdata=useRef("")
    const udata=useRef([])

    function loaddata() {
        axios.get("/api/admin/grp").then(value => {



            setxdat(value.data);


        })

    }
    function loaddataU(s="Not Assign") {
        axios.get("/api/admin/grp?g="+s).then(value => {



            setudat(value.data);




        })

    }

    useEffect(()=>{


        loaddata();

        loaddataU()

    },[])


    return <>


<div className="d-flex">

<div className="container">


    <h4>Manage Group</h4>
    <div className=" p-4 rounded border">
    <div className="d-flex justify-content-between"
    >

        <select className="form-control w-75" onChange={event => {





        }}>
<option>Select Group</option>
            {getxdat.map(valu => {

                return <option key={valu._id} value={valu.name}>{valu.name}</option>
            })

            }

        </select><div className="d-flex">
        <div className="btn btn-danger me-3">Delete</div>
        <div className="btn btn-primary" onClick={(o)=>{
            Swal.fire({
                title: 'Group Name',
                input: 'text',
                inputAttributes: {
                    autocapitalize: 'off'
                },
                showCancelButton: true,
                confirmButtonText: 'Look up',
                showLoaderOnConfirm: true,
                preConfirm: (s) => {



                    axios.post("/api/admin/grp",{name:s}).then(res=>{


                        Swal.fire("Success","Group Created Successfully","success").then(r=>{

                            loaddata()


                        })



                    })

                }

            })

        }}> Create</div>
    </div>
    </div>











        <table className="table table-bordered text-white text-center mt-5 ite" style= {{backgroundColor:"#013571"}}>
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
                        <td  className="text-white" style= {{backgroundColor:"#013571"}}>


                                <input type={"checkbox"} onChange={event =>
                                {

                                   if( udata.current.indexOf(value._id) !==-1)
                                   {
                                       udata.current= udata.current.filter(item => item !== value._id);

                                   } else {

                                       udata.current.push(value._id)

                                   }
                                }} />



                        </td>
                    </tr>

                })

            }


            </tbody>
        </table>



        <div className="d-flex justify-content-between"
        >

            <select className="form-control w-75"  onChange={(e)=>{

                cdata.current=e.target.value
            }}>

                <option value="" >Select a group Name</option>
                {getxdat.map(valu => {
                    return <option key={valu._id} value={valu.name}>{valu.name}</option>
                })

                }

            </select>
            <div className="btn btn-primary" onClick={(o)=>{




                if (udata.current.length<1) {

                    Swal.fire("Error","please select atleast one student","error")

                    return
                }


                Swal.fire({
                    title: 'Assign Group'+cdata.current,
                    html:"Do you want to assign selected Student to the  group  <p style='color:red'></p>",
                    // input: 'text',
                    // inputAttributes: {
                    //     autocapitalize: 'off'
                    // },
                    showCancelButton: true,
                    confirmButtonText: 'Assign',
                    showLoaderOnConfirm: true,
                    preConfirm: async (s) => {







                       // return  new Promise((r,v)=>{
                       //
                       //    setTimeout(()=>{
                       //
                       //
                       //        r(33);
                       //    },10000)
                       //
                       //
                       // })

                       return  axios.post("/api/admin/grp",{grp:cdata.current,user:getclick}).then(res=>{


                            Swal.fire("Success","Group Created Successfully","success").then(r=>{

                                loaddata()


                            })



                        })

                    }

                })


            }}> Assign to Group</div>
        </div>



    </div>




</div>



            </div>



    </>
}