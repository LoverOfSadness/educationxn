import HeadderX from "@/components/headerx";
import Futter from "@/components/futter";
import Homebnr from "@/components/homebnr";
import {Carousel} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/swiper-bundle.css"
import {rtx} from "@/lib/Rh";
import axios from "axios";
import {useRouter} from "next/router";
import {useSearchParams} from "next/navigation";

const PersonCard = ({name, imageUrl}) => {
    return (
        <div className="d-flex justify-content-center align-items-center rounded-3 bg-white"
             style={{border: "2px #1E1E1E solid", height: "350px", width: "300px"}}>
            <div className="text-center">
                <img className="mb-3" src={imageUrl} alt="Person" width="150" height="250"/>
                <p className="h5">{name}</p>
            </div>
        </div>
    );
};

export async function getServerSideProps(context) {


   return {
       props: {
           raju: context.params.id,
       },
   }
    // Rest of `getServerSideProps` code
}

export default function Id(pro) {

    let prop={}
    const [xdat,setxdat] = useState({});


    const searchParams = useSearchParams()
    function loaddata() {

        axios.get("/api/admin/store?id="+pro.raju).then(value => {


            setxdat(value.data);



        })

    }

    useEffect(()=>{

        console.log(pro)


        loaddata();

    },[])


    return <>

        <HeadderX/>



        <div className="bg-white">
            <div className="row d-flex  justify-content-evenly">

                <div className="col-1">


                </div>
                <div className="col-4">
                    {/*<Carousel controls={false} interval={4000} pause={false}>*/}
                    {/*    <Carousel.Item>*/}
                    <img src={rtx.cdn+"uploads/"+xdat.thumb} className="" width="300px" height="450px"/>
                    {/*</Carousel.Item> <Carousel.Item>*/}
                    {/*<img src="/img/otb1_png.png" width="300px" height="450px"/>*/}
                    {/*</Carousel.Item>*/}
                    {/*</Carousel>*/}
                </div>
                <div className="h1 text-warning  col-3 ps-5">★★★★☆</div>

            </div>

            <div className="row d-flex bg-white justify-content-evenly pt-5">

                <div className="col-3"></div>
                <div className="col-4">
                    <h1>{xdat.name}</h1>
                </div>
                <div className="col-4 ps-3  ">

                    <div className="h1 ps-5" style={{color: "#1c2697"}}>${xdat.price} /-</div>

                    {/*<p className="h3 ps-3 " style={{color: "#9999a0"}}><del>$40</del> (50% off)</p>*/}


                </div>
            </div>

            <div className="row d-flex bg-white justify-content-evenly pb-5 pt-2">

                <div className="col-1"></div>
                <div className="col-5">

                    <div className="btn btn-outline-dark px-4 mx-5"> Description</div>
                    <div className="btn btn-outline-dark px-5"> Reviews</div>
                </div>
                <div className="col-3 d-flex  ">



                    <div className="btn fw-bolder px-5 py-2 btn-outline-light ms-2"
                         style={{backgroundColor: "#013571"}} onClick={(r)=>{
                             window.location.href="/admin/test"
                    }} > Register</div>


                </div>
            </div>


            <div className="row d-flex justify-content-center text-center">

                <div className="col-1"></div>
                <div className="col-10">
                    <p>

                        {xdat.dis}

                    </p>


                </div>
                <div className="col-1"></div>


            </div>


            <div className="d-flex align-items-center  justify-content-center p-5 ">
                <div className="col-md-4 mb-5">
                    <h1 >Explainer Video</h1>
                    <h1 >For the Course</h1>

                    <p>

                        {xdat.bnr}
                    </p>
                    <input type="button" className="btn fw-bolder p-2  btn-outline-light my-2 " style={{backgroundColor: "#013571"}} value="    Register   "/>

                </div>
                <div className="col-md-7">

                    <iframe height="490" width={650} src={"https://www.youtube.com/embed/"+xdat.vdo+"?autoplay=1&mute=1"} frameBorder="0" allowFullScreen

                        className="d-block mx-auto me-5 mt-5 "
                    ></iframe>
                </div>
            </div>

            <h1 className="text-center pb-3 fw-semibold display-4">Related Course</h1>

            <div className="d-flex justify-content-center ms-5 ">
                <div className="w-75 ">

                    <Swiper className="mb-5 d-block "

                            autoplay={{
                                delay: 500,
                                disableOnInteraction: false,
                            }}
                            spaceBetween={0}
                            slidesPerView={3}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                    >

                        <SwiperSlide className="">

                            <PersonCard name={"Out OF Box"} imageUrl="/img/otb1_png.png"></PersonCard>
                        </SwiperSlide>
                        <SwiperSlide>

                            <PersonCard name={"Cource 1"} imageUrl="/img/otb1_png.png"></PersonCard>
                        </SwiperSlide>
                        <SwiperSlide>

                            <PersonCard name={"Course 2"} imageUrl="/img/otb1_png.png"></PersonCard>
                        </SwiperSlide>

                        <SwiperSlide>

                            <PersonCard name={"Id 3"} imageUrl="/img/otb1_png.png"></PersonCard>
                        </SwiperSlide>


                    </Swiper>

                </div>

            </div>
        </div>
        )







        <Homebnr/>
        <Futter/>

        </>
}