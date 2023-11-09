import HeadderX from "@/components/headerx";
import AboutUs from "@/components/AboutUs";
import Futter from "@/components/futter";
import StoreX from "@/components/StoreX";
import axios from "axios";
import {useEffect, useState} from "react";
import {rtx} from "@/lib/Rh";
import Swal from "sweetalert2";

export default function Store() {
    const [xdat,setxdat] = useState([]);


    function loaddata() {

        axios.get("/api/admin/store").then(value => {


            setxdat(value.data);



        })

    }

    useEffect(()=>{




        loaddata();

    },[])



    return  <><HeadderX/>
        <StoreX/>

<div className="" style={{backgroundColor:"#013571"}}>
        <div className="container mt-3">


            {/*<div className="d-flex justify-content-between py-3 mb-2  container w-100 rounded-3" style={{backgroundColor:"#013571",color:"white"}}>*/}
            {/*    <h3 >Manage store Information  </h3>*/}

            {/*    <div className="btn btn-primary" onClick={(i)=>{*/}
            {/*        seteditX({})*/}
            {/*        showModal()*/}
            {/*    }}>Add New </div>*/}
            {/*</div>*/}
            <div className=" ">

                <div className="card-body " style={{backgroundColor:"#013571"}}>

                    <div className="row">


                        {xdat.map((tp,n)=>{
                            return <div className="col-12 col-lg-3 mt-3" key={n}>

                                <div className="card" >

                                    <img src={rtx.cdn+"uploads/"+tp.thumb} alt="" className="p-3 align-self-center" style={{maxHeight:"300px",maxWidth:"250px"}}/>
                                    <div className="card-body">
                                        <div className="card-text text-center h2">
                                            {tp.name}
                                        </div>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="h5 ps-3 text-success">$ {tp.price}</div>
                                            <div className="btn btn-outline-primary text-center" onClick={()=> {

window.location.href="/courses/"+tp._id




                                            }}>View</div>
                                        </div>
                                    </div>
                                </div>




                            </div>

                        })}
                    </div>

                </div>


            </div>

        </div>
        </div>
        <Futter/>
    </>
}