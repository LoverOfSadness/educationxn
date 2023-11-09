import {FaEnvelope, FaLocationPin, FaLocationPinLock, FaMapLocation, FaPhone} from "react-icons/fa6";
import {FaMapMarkedAlt, FaMapMarkerAlt} from "react-icons/fa";
import React from "react";

const ContractPage = () => {

    return (

        <div className="container-fluid pb-5">


            <img src="/img/contractpage.png" className="img-fluid p-5"/>

            <p className="display-4 fw-bold text-center">We are Here and ready to help!</p>

<h5 className="text-center mx-5 px-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad aliquam amet animi architecto at beatae commodi delectus eius, enim est harum id iure minima nam officiis pariatur quisquam rem soluta temporibus velit veniam voluptas. A animi delectus fugiat illum iste libero molestiae natus quas ratione sequi. Dolor dolorum ea et iusto, perspiciatis placeat porro quas rem repellendus similique velitperspiciatis placeat porro quas rem repellendus similique velitperspiciatis placeat porro quas rem repellendus similique velitperspiciatis placeat porro quas rem repellendus similique velit.</h5>

            <div className="row d-flex align-items-center justify-content-evenly mt-5">
                <div className="col-3 text-center">
                    <FaPhone className="h1" style={{color:"#013571"}}/>
                    <h4 className="mt-2">+1 (234) 76543456</h4>
                </div> <div className="col-3 text-center">
                    <FaEnvelope className="h1" style={{color:"#013571"}}/>
                    <h4 className="mt-2">abc3465@gmail.com</h4>
                </div> <div className="col-3 text-center">
                    <FaMapMarkerAlt className="h1" style={{color:"#013571"}}/>
                    <h4 className="mt-2">address goess here</h4>
                </div>
            </div>


            <div className="d-flex flex-column justify-content-center px-5 mx-5 ">
                <input placeholder="First Name" className="mt-3 p-2 form-control"/>
                <input placeholder="Last Name" className="mt-3 p-2 form-control"/>
                <input placeholder="Email Subject" className="mt-3 p-2 form-control"/>
                <textarea placeholder="Write Someting here ...." className="mt-3 p-2 form-control"
                          style={{height: "200px"}}/>

                <input type="button" className="btn fw-bolder px-5  btn-outline-light mt-5 py-3 "
                       style={{backgroundColor: "#013571"}} value=" SEND MESSAGE "/>

            </div>
        </div>



    );

}

export  default  ContractPage;