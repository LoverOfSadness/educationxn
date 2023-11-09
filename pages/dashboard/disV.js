import {FaArrowRight} from "react-icons/fa6";
import {useState} from "react";
import HeadderX from "@/components/headerx";
import STDash from "@/components/STDash";



export default function Home() {


    const [getmsg,setmsg]=useState([]);



    // ]
    // let ty = "gfdfghj3cgfg3hjhjgjgh3hjnjkhgjjghjkkhj3jkljhgjkjh3bjhvgcfgghjghfdg3yutrdf";
    //
    // ty = ty.split("3");
    //
    //
    // let x = [2345, 7, 8, 9]
    //
    // ty.map(val => {
    //
    //     return <h1>{val}</h1>
    // })



    return <>
        <div className="bg-white">

            <div className="d-flex" >
                <STDash/>
        <div className="vh-100 " style={{width:"75%",backgroundColor:"lightgray"}}>
            <div className=" overflow-y-auto " style={{height:"92%",}}>
                {getmsg.map(Chatx=>{

                    return <>   <div className={`w-75 d-flex mb-2 ${Chatx.mera?"float-end":""}` } style={{transform:`${Chatx.mera?"scaleX(-1)":""}`}}>

                        <img src="/img/ellipse_3.png" width={50} height={50}/>
                        <div className="mt-1 px-4 p-2 shadow bg-white  w-75 ms-2 rounded-3 " style=  {{transform: `${Chatx.mera?"scaleX(-1)":""}`}}>
                            <div className="d-flex  justify-content-between fw-bold text-primary " style={{marginBottom:-15}} >
                                <p className="">{Chatx.name} 8:40am</p>
                                <p  className="">{Chatx.role}</p>
                            </div >

                            {Chatx.msg}
                        </div>


                    </div></>;

                })}


            </div>

            <div style={{height:"8%",backgroundColor:"#013571"}} className="d-flex align-items-center text-center" >

                <input id={"inputx"} style={{height:"100%",width:"88%"}}/>

                <div className="d-flex justify-content-center text-center" style={{width:"12%"}} onClick={(y)=>{


                    const td=document.getElementById("inputx");

                    setmsg([...getmsg,{ name:Math.random()>0.5?"Abcd Efgh":"Ijkl Monp", role: "Student", msg: td.value,mera:Math.random()>0.5}])



                }}>
           <h2 style={{color:"white "}}>Send </h2>
                </div>
                {/*<FaArrowRight style={{height:"100%",width:"12%",padding:"1em",color:"white"}} onClick={(y)=>{*/}


                {/*    const td=document.getElementById("inputx");*/}

                {/*    setmsg([...getmsg,{ name:Math.random()>0.5?"Abcd Efgh":"Ijkl Monp", role: "Student", msg: td.value,mera:Math.random()>0.5}])*/}



                {/*}} />*/}


            </div>
        </div>
        </div>
            </div>
    </>


        ;
}