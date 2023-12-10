import {FaAngleRight} from "react-icons/fa6";
import styles from "./AdminDash.module.css"
import React, {useEffect, useState} from "react";
import {useRouter} from "next/router";
import {FaSignOutAlt} from "react-icons/fa";

export default () => {

    const router = useRouter()
    const [current, setCurrent] = useState(router.pathname);
    const [user, setusr] = useState(null);
    useEffect ( () => {
        setCurrent(router.pathname)

        console.log(router.pathname)

    }, [router.pathname])



    useEffect(()=>{

        if (localStorage.getItem("sales")){

            setusr(JSON.parse(localStorage.getItem("sales")))
        }


    },[])



    return (
        <>



            {user?<>

                <div className={`d-flex  flex-column w-25 mx-3 vh-100 ${styles.error} ` }
                     style={{backgroundColor: "#013571", color: "white"}}>

                    <div className="fw-bold w-100 p-2 "
                         style={{background: 'linear-gradient(to right, #e4b845, #f8e685)'}}> <div className="h4">Teachers Panel</div>

                        {user.name}


                    </div>

                    <div className="tx mt-3">


                        {

                            JSON.parse( user.id).map((obj, index) => {
                                const [key, value] = Object.entries(obj)[0];
                                return (
                                    <div key={index}>


                                        <p className={(current==value?"bg-info p-2":"px-2")} ><FaAngleRight className="text-white"/><a href={value} className="text-white"> {key}</a></p>

                                    </div>
                                );
                            })




                        }


                        <p className={"px-2 text-danger "} onClick={r=>{

                            localStorage.removeItem("sales")
                            window.location.href="/teacher"

                        }} ><FaAngleRight className="text-white"/> Logout</p>





                    </div>

                </div>



            </>:<>

            <div className={`d-flex  flex-column w-25 mx-3 vh-100 ${styles.error} ` }
                 style={{backgroundColor: "#013571", color: "white"}}>

                <div className="fw-bold w-100 p-2 h4"
                     style={{background: 'linear-gradient(to right, #e4b845, #f8e685)'}}> Admin Panel
                    <br/>
                    <h5>
                        {styles.error}
                    </h5>
                </div>
                <div className="tx">


                </div>

                {/*<h5 className="fw-bold w-100 p-2 "  style={{ background: 'linear-gradient(to right, #e4b845, #f8e685)'}}> My Portal</h5>*/}

                <p className={(current=="/admin/grade"?"bg-info p-2":"px-2")} ><FaAngleRight className="text-white"/><a href={"/admin/grade"}
                                                                                                                           className="text-white"> Give Grades</a></p>
                <p className={(current=="/admin/assignment"?"bg-info p-2":"px-2")}><FaAngleRight className="text-white "/><a href={"/admin/assignment"}
                                                                             className="text-white "> Give Assignment</a>
                </p>
                <p className="px-2"><FaAngleRight className="text-white" /><a href={"/admin/facX"} className="text-white"> Manage Faculty</a></p>
                <p className={(current=="/admin/coursemat"?"bg-info p-2":"px-2")}><FaAngleRight className="text-white"/><a href={"/admin/coursemat"}
                                                                             className="text-white"> Manage Course
                    Material</a></p>
                <p className={(current=="/admin/assX"?"bg-info p-2":"px-2")}><FaAngleRight className="text-white"/><a className="text-white"
                                                                             href={"/admin/assX"}> Manage
                    Announcements </a></p>
                <p className={(current=="/admin/asgnX"?"bg-info p-2":"px-2")}><FaAngleRight className="text-white"/><a className="text-white"
                                                                             href={"/admin/asgnX"}> Manage
                    Assignment </a></p>
                <p className={(current=="/admin/CinfoX"?"bg-info p-2":"px-2")}><FaAngleRight className="text-white"/><a className="text-white"
                                                                             href={"/admin/CinfoX"}> Manage Course Information </a></p>
                <p className={(current=="/admin/NotiX"?"bg-info p-2":"px-2")}><FaAngleRight className="text-white"/><a className="text-white"
                                                                             href={"/admin/NotiX"}> Manage Notification </a></p>
                <p className={(current=="/admin/stdX"?"bg-info p-2":"px-2")}>
                    <FaAngleRight className="text-white"/><a className="text-white"
                                                                             href={"/admin/stdX"}> Manage Students</a>
                </p>


                <p className={(current=="/admin/meet"?"bg-info p-2":"px-2")}>
                    <FaAngleRight className="text-white"/><a className="text-white"
                                                                             href={"/admin/meet"}>Manage Class</a>
                </p>

                 <p className={(current=="/admin/disV"?"bg-info p-2":"px-2")}>
                    <FaAngleRight className="text-white"/><a className="text-white"
                                                                             href={"/admin/disV"}>Discussion Area</a>
                </p>
                <p className={(current=="/admin/Mqs"?"bg-info p-2":"px-2")}>

                    <FaAngleRight className="text-white"/><a className="text-white"
                                                                             href={"/admin/Mqs"}>Manage Test</a>
                </p>

                <p className={(current=="/admin/store"?"bg-info p-2":"px-2")}>

                    <FaAngleRight className="text-white"/><a className="text-white"
                                                                             href={"/admin/store"}>Manage Courses</a>
                </p>

                <p className={(current=="/admin/exstore"?"bg-info p-2":"px-2")}>

                    <FaAngleRight className="text-white"/><a className="text-white"
                                                                             href={"/admin/exstore"}>Manage Store</a>
                </p>
                
                  <p className={(current=="/admin/thr"?"bg-info p-2":"px-2")}>

                    <FaAngleRight className="text-white"/><a className="text-white"
                                                                             href={"/admin/thr"}>Manage Teacher</a>
                </p>
                
                
                {/*<p className="px-2"><FaAngleRight className="text-white" /> <a className="text-white" href={"faq"}>FAQ</a> </p>*/}


            </div>



            <div style={{height: "600px"}}></div>
                </>

}
        </>



    );


}
