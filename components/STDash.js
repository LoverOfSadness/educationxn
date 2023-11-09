import {FaAngleRight} from "react-icons/fa6";

const STDash = () => {

    return(

        <div className="d-flex  flex-column w-25 mx-3" style={{backgroundColor:"#013571",color:"white"}}>

            <h4 className="fw-bold w-100 p-2 text-center"  style={{ background: 'linear-gradient(to right, #e4b845, #f8e685)'}}> Course title Goes hare</h4>

            <p className="px-2"><FaAngleRight className="text-white" /><a className="text-white" href={"/dashboard"}> Student Dashboard</a></p>

            <h5 className="fw-bold w-100 p-2 "  style={{ background: 'linear-gradient(to right, #e4b845, #f8e685)'}}> Course Introduction</h5>

            <p className="px-2"><FaAngleRight className="text-white" /><a className="text-white" href={"/dashboard/cinfo"}> Course Information</a></p>
            <p className="px-2"><FaAngleRight className="text-white" /> <a className="text-white" href={"/dashboard/faculty"}>Faculty Information</a></p>
            <h5 className="fw-bold w-100 p-2 "  style={{ background: 'linear-gradient(to right, #e4b845, #f8e685)'}}> Course Work</h5>

            <p className="px-2"><FaAngleRight className="text-white" /> <a className="text-white" href={"/dashboard/assV"}>Announcement</a></p>
            <p className="px-2"><FaAngleRight className="text-white" /><a className="text-white" href={"/dashboard/asgnV"}> Assignment</a></p>
            <p className="px-2"><FaAngleRight className="text-white" /><a className="text-white" href={"/dashboard/cmatV"}> Course Material</a></p>
            <p className="px-2"><FaAngleRight className="text-white" /><a className="text-white" href={"/dashboard/faq"}> Take Test</a></p>
            <p className="px-2"><FaAngleRight className="text-white" /> <a className="text-white" href={"/dashboard/disV"}> Discussion Area</a></p>


          <h5 className="fw-bold w-100 p-2 "  style={{ background: 'linear-gradient(to right, #e4b845, #f8e685)'}}> My Portal</h5>

            <p className="px-2"><FaAngleRight className="text-white" /><a href={"/dashboard/grade"} className="text-white"> My Grades</a></p>
            <p className="px-2"><FaAngleRight className="text-white" /> Profile Settings</p>
            <h5 className="fw-bold w-100 p-2 "  style={{ background: 'linear-gradient(to right, #e4b845, #f8e685)'}}> <a className="text-white" href={"/dashboard/faq"}> Help </a></h5>
            <p className="px-2"><FaAngleRight className="text-white"  /><a className="text-white" href={"/dashboard/faq"}> Contact Support</a></p>
            <p className="px-2"><FaAngleRight className="text-white" /> <a className="text-white" href={"/dashboard/faq"}>FAQ</a> </p>

        </div>


            );



}
export  default  STDash;