import {FaAngleRight} from "react-icons/fa6";
import styles from "./AdminDash.module.css"

export default () => {


    return (
        <>

            <div className={`d-flex  flex-column w-25 mx-3 vh-100 ${styles.error} ` }
                 style={{backgroundColor: "#013571", color: "white"}}>

                <div className="fw-bold w-100 p-2 h4"
                     style={{background: 'linear-gradient(to right, #e4b845, #f8e685)'}}> Teachers Panel
                    <br/>
                    <h5>
                        {styles.error}
                    </h5>
                </div>
                <div className="tx">


                </div>

                {/*<h5 className="fw-bold w-100 p-2 "  style={{ background: 'linear-gradient(to right, #e4b845, #f8e685)'}}> My Portal</h5>*/}

                <p className={`px-2  `} ><FaAngleRight className="text-white"/><a href={"/admin/grade"}
                                                                                                                           className="text-white"> Give Grades</a></p>
                <p className="px-2"><FaAngleRight className="text-white"/><a href={"/admin/assignment"}
                                                                             className="text-white"> Give Assignment</a>
                </p>
                {/*<p className="px-2"><FaAngleRight className="text-white" /><a href={"/admin/facX"} className="text-white"> Manage Faculty</a></p>*/}
                <p className="px-2"><FaAngleRight className="text-white"/><a href={"/admin/coursemat"}
                                                                             className="text-white"> Manage Course
                    Material</a></p>
                <p className="px-2"><FaAngleRight className="text-white"/><a className="text-white"
                                                                             href={"/admin/assX"}> Manage
                    Announcements </a></p>
                <p className="px-2"><FaAngleRight className="text-white"/><a className="text-white"
                                                                             href={"/admin/asgnX"}> Manage
                    Assignment </a></p>
                <p className="px-2"><FaAngleRight className="text-white"/><a className="text-white"
                                                                             href={"/admin/CinfoX"}> Manage Course
                    Information </a></p>
                <p className="px-2"><FaAngleRight className="text-white"/><a className="text-white"
                                                                             href={"/admin/NotiX"}> Manage
                    Notification </a></p>
                <p className="px-2">
                    <FaAngleRight className="text-white"/><a className="text-white"
                                                                             href={"/admin/stdX"}> Contact Support</a>
                </p>
                <p className="px-2">
                    <FaAngleRight className="text-white"/><a className="text-white"
                                                                             href={""}>Manage Meeting</a>
                </p>
                <p className="px-2">

                    <FaAngleRight className="text-white"/><a className="text-white"
                                                                             href={"/admin/Mqs"}>Manage Test</a>
                </p>
                {/*<p className="px-2"><FaAngleRight className="text-white" /> <a className="text-white" href={"faq"}>FAQ</a> </p>*/}


            </div>
            <div style={{height: "600px"}}>.</div>
        </>


    );


}
