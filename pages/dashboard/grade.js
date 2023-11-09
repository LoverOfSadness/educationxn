import HeadderX from "@/components/headerx";
import STDash from "@/components/STDash";
import StProfile from "@/components/StProfile";
import Futter from "@/components/futter";
import DsFaq from "@/components/dashboard/DsFAQ";
import GradeC from "@/components/dashboard/GradeC";



export default function () {
    return <div>


        <div className="bg-white">    <HeadderX/>

            <div className="d-flex" >
                <STDash/>
<GradeC/>
            </div>

            <Futter/>


        </div>
    </div>

}