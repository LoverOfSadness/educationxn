import {FaFacebookF, FaGoogle, FaInstagram, FaTwitter} from "react-icons/fa6";
import {Spinner} from "react-bootstrap";
import {useState} from "react";
import {FaSign} from "react-icons/fa";
import {Field, Form, Formik} from "formik";
import axios from "axios";
import toast from "react-hot-toast";
import {useRouter} from "next/router";
import UserX from "@/lib/utils";

export default  ()=> {
    const [Saving, setSaving] = useState(false);
    const router = useRouter();
    const  rt=UserX();
    if (rt && rt.raju){

        router.push("/dashboard")

    }
    return <section className="text-center">
        <div className="p-5 bg-image" style={{
            backgroundImage: "url('/img/171.jpg')",
            height: "300px"
        }}></div>

        <div className="card mx-4 mx-md-5 shadow-5-strong" style={{
            marginTop: "-100px",
            background: "hsla(0, 0%, 100%, 0.8)",
            backdropFilter: "blur(30px)"
        }}>
            <div className="card-body py-5 px-md-5">

                <div className="row d-flex justify-content-center">
                    <div className="col-lg-8">
                        <h2 className="fw-bold mb-5">Login Form</h2>
                        <Formik

                            initialValues={
                            {
                                email:"",
                                password:"",

                            }
                            }
                            onSubmit={async (feil) => {

                                setSaving(true);

                                const Response = await axios.post("/api/users/login",feil);
                                // setSaving(false);




                                setSaving(false);
                                toast(Response.data.message);

                                if (Response.data.success) {
                                    localStorage.setItem("user", JSON.stringify(Response.data.user))

                                    localStorage.setItem("raju", "true")

                                    if (Response.data.user._id) {


                                        router.push("/dashboard")


                                    }
                                }





                            }

                            }






 >



                        <Form>


                            <div className="form-outline mb-4">
                                <Field name="email"  className="form-control" placeholder="Email address"/>
                            </div>

                            <div className="form-outline mb-4">
                                <Field name="password" type="password" className="form-control" placeholder="Password"/>

                            </div>

                            <div className="form-check d-flex justify-content-center mb-4">
                                <input className="form-check-input me-2" type="checkbox"
                                       />
                                <span className="form-check-label" >
                                    Remember me
                                </span>
                            </div>

                            <button type="submit" className="btn btn-primary mb-4 w-50" >
                                    {Saving ? (
                                        <Spinner as="span" animation="grow" size="sm" />
                                    ) : (
                                        <>
                                          Login
                                        </>
                                    )}
                            </button>

                        </Form>
                        </Formik>
                        <br/>

                            <div className="text-center link-primary" >

                            <button type="button" className="btn btn-link btn-floating mx-1">
                                <FaFacebookF/>
                            </button>

                            <button type="button" className="btn btn-link btn-floating mx-1">
                                <FaGoogle/>
                            </button>

                            <button type="button" className="btn btn-link btn-floating mx-1">
                                <FaTwitter/>
                            </button>

                            <button type="button" className="btn btn-link btn-floating mx-1">
                                <FaInstagram/>

                            </button>
                            <br/>
                            <a href="account/register" className="link-primary mt-4">Register</a>
                            </div>

                    </div>
                </div>
            </div>
        </div>
    </section>;

}




