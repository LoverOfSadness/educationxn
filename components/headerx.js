import Image from "next/image";

import React, { useEffect } from 'react';
import Link from "next/link";
import UserX from "@/lib/utils";
import {useRouter} from "next/router";

const HeadderX = () => {
    const rot=                                        useRouter();
    const usr=UserX();
 /*   useEffect(() => {

        const { bootstrap } = require("bootstrap");

        const tooltipTriggerList = [].slice.call(
            document.querySelectorAll('[data-bs-toggle="tooltip"]')
        );
        tooltipTriggerList.map(function (tooltipTriggerEl) {


            return new bootstrap.Tooltip(tooltipTriggerEl);
        });

        const popoverTriggerList = [].slice.call(
            document.querySelectorAll('[data-bs-toggle="popover"]')
        );
        popoverTriggerList.map(function (popoverTriggerEl) {
            return new bootstrap.Popover(popoverTriggerEl);
        });
    }, []);*/



    return (

        <nav className="navbar navbar-expand-lg bg-white ">
            <div className="container bg-white pt-2">
                <Link href="/"
                     className="navbar-brand">
                        <img src="/img/layer_7.jpg" alt="Logo" width={130*1.4} height={65*1.4} />

                </Link>
                <ul className="d-flex align-items-center justify-content-between flex-grow-1 list-unstyled" >
                        <li className="">

                        </li>
                    <li className="">
                            <Link href="/" className="headersitem">Home</Link>
                        </li>
                        <li className="">
                            <Link href="/about">About</Link>
                        </li>
                        <li className="">
                            <Link href="/store">Courses</Link>
                        </li>
                        <li className="">
                            <Link href="/storex">Store</Link>
                        </li>
                        <li className="">
                            <Link href="/contact">Contact</Link>
                        </li>
                        <li className="">
                            <Link href="/archives">Archives</Link>
                        </li>
                    <li className="">

                    </li>


                        {
                            usr?.raju?
                                <div className=""><div className="btn btn-outline-dark me-2" onClick={()=>{

                                    rot.push("/dashboard")
                                }}>
                                    Dashboard
                                </div>
                                    <div className="btn btn-dark" onClick={()=>{

                                        localStorage.clear()
rot.push("/")
                                    }}>
LogOut
                                    </div>
                                </div>

                               :
                                <Link href={"/account"} className="">
                                <div className="d-flex btn btn-outline-dark">
Login & Register
                            </div>
                                </Link>

                        }

                </ul>
            </div>

        </nav>
    );
};


export default HeadderX;
