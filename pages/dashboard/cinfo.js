import HeadderX from "@/components/headerx";
import STDash from "@/components/STDash";
import StProfile from "@/components/StProfile";
import Futter from "@/components/futter";
import Cinfo from "@/components/dashboard/Cinfo";
import {useEffect, useState} from "react";
import {Button, Card, Collapse} from "react-bootstrap";
import axios from "axios";
import {FaArrowDown, FaArrowRight} from "react-icons/fa6";


function CollapsibleContent({ title,datax }) {
    const [open, setOpen] = useState(false);
    return (
        <div className="text-center w-100 px-5">
            <Button
                className="py-2 w-100 mt-1 d-flex justify-content-between px-5"
                onClick={() => setOpen(!open)}
                aria-controls={`collapse-${title}`}
                aria-expanded={open}
                style={{backgroundColor:"#013571"}}
            >
                {title}
                <FaArrowDown/>

            </Button>

            <Collapse in={open}>
                <div id={`collapse-${title}`}>
                    <Card>
                        <Card.Body>
                            <div dangerouslySetInnerHTML={{__html:datax}}></div>

                        </Card.Body>
                    </Card>
                </div>
            </Collapse>
        </div>
    );
}

export default () =>{
    const [xdat,setxdat] = useState([]);

    function loaddata() {
        axios.get("/api/admin/cinfo").then(value => {


            setxdat(value.data);


        })

    }

    useEffect(()=>{


        loaddata();
    },[])

    return (
        <div className="bg-white"> <HeadderX/>

            <div className="d-flex" >
                <STDash/>


                <div className="w-100">
                    {xdat.map((title, index) => (
                        <CollapsibleContent key={index} title={title.title} datax={title.data} />
                    ))}
                </div>


            </div>

            <Futter/>

        </div>
    );
}