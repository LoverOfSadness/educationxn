import UserX from "@/lib/utils";


export default function (){

    const usr=UserX();


    return <div className="container-fluid bg-white">

        <div className="d-flex justify-content-center text-white" style={{marginLeft:"20%"}}>

            <div className="text-center w-100"><div className="w-75">
                <img src="/img/ellipse_3.png" alt="Image" className="img-fluid" /></div>
                <div className="py-2 px-5 rounded mt-2 w-75 mt-3" style={{backgroundColor:"#cbcbcb"}}>{usr?.name}</div>
                <div className="w-75 d-flex">
                <div className="py-2 px-5 rounded  mt-2 w-50  mt-3 me-1" style={{backgroundColor:"#cbcbcb"}}>{usr?.age}</div>
                <div className="py-2 px-5 rounded  mt-2 w-50 mt-3 ms-1" style={{backgroundColor:"#cbcbcb"}}>{usr?.sex}</div>
                </div>
                <div className="w-75 d-flex">
                <div className="py-2 px-5 rounded  mt-2 w-50 me-1 mt-3" style={{backgroundColor:"#cbcbcb"}}>{usr?.phone}</div>
                <div className="py-2 px-5 rounded  mt-2 w-50 mt-3 ms-1" style={{backgroundColor:"#cbcbcb"}}>{usr?.email}</div>
                </div>
                <div className="py-2 px-5 rounded  mt-2 w-75 mt-3" style={{backgroundColor:"#cbcbcb"}}>{usr?.addr}</div>


            </div>


        </div>

        <div className="row">


        </div>

    </div>
}