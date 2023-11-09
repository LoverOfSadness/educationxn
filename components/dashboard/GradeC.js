import  {Table} from "react-bootstrap";

export default function (){

    return <div className="container-fluid bg-white mt-1">

        <div className="d-flex justify-content-center text-white" style={{marginRight:"5%"}}>

            <div className="text-center w-100">


                <table className="table table-bordered text-white" style= {{backgroundColor:"#013571"}}>
                    <thead >
                    <tr className="bg-danger">
                        <th className="text-white" style= {{backgroundColor:"#e4b845"}}>Student Name</th>
                        <th className="text-white" style= {{backgroundColor:"#e4b845"}}>Total Marks</th>
                        <th className="text-white" style= {{backgroundColor:"#e4b845"}}>Marks Obtaied</th>
                        <th className="text-white" style= {{backgroundColor:"#e4b845"}}>Grade</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr >
                        <td className="text-white" style= {{backgroundColor:"#013571"}}>Alice Johnson</td>
                        <td className="text-white" style= {{backgroundColor:"#013571"}}>95</td>
                        <td className="text-white" style= {{backgroundColor:"#013571"}}>85</td>
                        <td className="text-white" style= {{backgroundColor:"#013571"}}>A</td>
                    </tr>
                    <tr>
                        <td className="text-white" style= {{backgroundColor:"#013571"}}>Bob Smith</td>
                        <td className="text-white" style= {{backgroundColor:"#013571"}}>98</td>
                        <td className="text-white" style= {{backgroundColor:"#013571"}}>92</td>
                        <td className="text-white" style= {{backgroundColor:"#013571"}}>A+</td>
                    </tr>
                    <tr>
                        <td className="text-white" style= {{backgroundColor:"#013571"}}>Lisa Davis</td>
                        <td className="text-white" style= {{backgroundColor:"#013571"}}>88</td>
                        <td className="text-white" style= {{backgroundColor:"#013571"}}>75</td>
                        <td className="text-white" style= {{backgroundColor:"#013571"}}>B</td>
                    </tr>
                    <tr>
                        <td className="text-white" style= {{backgroundColor:"#013571"}}>John Wilson</td>
                        <td className="text-white" style= {{backgroundColor:"#013571"}}>92</td>
                        <td className="text-white" style= {{backgroundColor:"#013571"}}>88</td>
                        <td className="text-white" style= {{backgroundColor:"#013571"}}>A</td>
                    </tr>
                    <tr>
                        <td className="text-white" style= {{backgroundColor:"#013571"}}>Raju</td>
                        <td className="text-white" style= {{backgroundColor:"#013571"}}>100</td>
                        <td className="text-white" style= {{backgroundColor:"#013571"}}>0</td>
                        <td className="text-white" style= {{backgroundColor:"#013571"}}>0</td>
                    </tr>

                    </tbody>
                </table>




        </div>

        <div className="row">


        </div>

        </div></div>;
}