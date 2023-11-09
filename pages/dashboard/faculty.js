import STDash from "@/components/STDash";
import StProfile from "@/components/StProfile";
import HeadderX from "@/components/headerx";
import Futter from "@/components/futter";
import FacultyX from "@/components/dashboard/FacultyX";

export default function About() {


    return (
        <div className="bg-white">    <HeadderX/>

            <div className="d-flex" >
                <STDash/>
                <FacultyX/>

            </div>

            <Futter/>

        </div>
    );
}