import {useEffect, useRef, useState} from "react";
import axios from "axios";
import Swal from "sweetalert2";
import dynamic from "next/dynamic";

export async function getServerSideProps(context) {

    const res = await fetch("http://localhost:3000/api/admin/qgrp?g="+context.params.id);
    const data = await res.json();


    return {
        props: {
            data,
        },
    };
}


export default (pro)=>{
    const [Editor,seteditor] = useState(null);

    const  [getxdat,setxdat]=useState([])

    const  [curr,setcurrent]=useState({})
    const  currentx=useRef(0)

    useEffect(()=>{


        seteditor(dynamic(() => import("@/components/Editor/index")))
    },[])
    useEffect(()=>{


        setxdat(pro.data)
        setcurrent(pro.data[0])

    },[])


    const setvalueofdes=(d)=>{};
    return <>


        { getxdat.length>0?
        <div className="container my-5 pt-4 border">
            <h1 className="text-center"> Question Number {currentx.current} of {getxdat.length-1}</h1>


            <div className="my-5" onClick={l=>{
                console.log(pro)

            }}>




                      <div className="border p-5">
                          <div className="">{"ghgg"}</div>

                        <div className="mb-4    " dangerouslySetInnerHTML={{__html: curr.q }}></div>


                          { curr.t?<>


                          {curr.option.map((tx,xc)=> {
                            return <div className="form-check">
                                <input className="form-check-input" type="radio" name="exampleRadios" id={"exampleRadios"+xc} value={"option"+xc} checked/>
                                    <label className="form-check-label " htmlFor={"exampleRadios"+xc}>
                                        {tx}
                                    </label>
                            </div>






                          })
                          }
                              
                          </>  : ""+   <Editor form={setvalueofdes} ></Editor>

                }

                          </div>

                <div className="d-flex justify-content-between px-3 mt-4">

                    <div className="btn btn-primary" onClick={i=>{

                        if(getxdat.length<=currentx.current -1) {

                            currentx.current = currentx.current + -

                            setcurrent(getxdat[currentx.current])

                        }else {

                            alert("ddd")
                        }
                    }}>prev</div>


                    <div className="btn btn-primary" onClick={e=>{

                        if(getxdat.length>currentx.current +1) {

                            currentx.current = currentx.current + 1

                            setcurrent(getxdat[currentx.current])

                        }else {

                            Swal.fire("Complete","your task has been complete ","success").then(
                                r=>{
                                    window.location.href="/dashboard/Qtest"
                                }
                            )
                        }
                    }}>next</div>

                </div>



            </div>


        </div>:""}
    </>


}