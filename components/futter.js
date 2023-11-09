import {FaFacebook, FaInstagram, FaTwitter} from "react-icons/fa6";

const  Futter=() =>
{

    return (


        <div className="container-fluid bg-black text-white py-5">

            <div className="row py-5">
            <div className="col-4 d-flex justify-content-center align-items-center">
                <img src="/img/logo.png"/>
            </div>
            <div className="col-4">

                <h4>Quick Links</h4>

                <div className="row mt-4">

                    <div className="col-6 ">
<h6>Home</h6>
<h6>About Us</h6>
<h6>Courses</h6>
<h6>Contact Us</h6>

                    </div>

                    <div className="col-6">
                        <h6>Terms & Condition</h6>
                        <h6>Privacy Policy</h6>
                        <h6>FAQ</h6>
                        <h6>Blogs</h6>


                    </div>
                </div>

            </div>

            <div className="col-4  text-center"><h3> Follow Us On</h3>

                <div className="display-5">
                    <FaFacebook className=""/>
                    <FaInstagram className="mx-3"/>
                    <FaTwitter className=""/>
                </div>

            </div>
            </div>

        </div>

    );

}

export default Futter;
