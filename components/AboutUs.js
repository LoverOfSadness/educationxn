import React, {useEffect, useState} from "react";
import Homebnr from "@/components/homebnr";
import axios from "axios";
import {rtx} from "@/lib/Rh";

const AboutUs = () => {




    const [getxdat, setxdat] = useState({})
    function loaddataU() {

        axios.get("/api/admin/cms?name=about").then(value => {

            setxdat(value.data);

        })

    }


    useEffect(()=>{


        loaddataU()
    },[])

    return (


<>
        <div className="container-fluid bg-white d-flex justify-content-center" >
            <img src={rtx.cdn+"/"+getxdat.dp} className="img-fluid p-lg-5"/>



        </div>

    <div className="w-100 bg-white">

         <div className="text-black container text-center pb-5" dangerouslySetInnerHTML={{__html:getxdat.text}}>


         </div>

    </div>

</>

    );

//      <div className="container-fluid bg-white text-black">
//
//          <div className="row justify-content-center justify-content-between pt-5">
//              <div className="col"></div>
// <div className="col-5 mt-5" >
//
//     <img src="/img/rectangle_3_copy_3.png"/>
// </div>
// <div className="col-5">
//     <h1 className="text-center"> About Us</h1>
//
// <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi asperiores aspernatur at consectetur cum debitis deserunt distinctio dolor dolore et excepturi facilis id in inventore laudantium molestiae neque nisi nulla numquam odio pariatur perferendis perspiciatis, porro quis similique unde ut voluptatibus. Neque nisi, ratione! Aliquid consectetur culpa cumque dignissimos, dolor doloremque esse ipsa iure nihil qui quibusdam, similique, totam velit! Aperiam cum enim in iure maxime odit officiis quae quisquam ut voluptate. Consectetur enim hic illum iure qui quos, sit! Blanditiis error est minima. A accusamus ad, aliquam amet assumenda blanditiis dolores exercitationem incidunt inventore iste iure laboriosam libero maiores, mollitia necessitatibus nihil nisi perferendis praesentium quo reiciendis repellat saepe sequi similique ullam veritatis. Eligendi error fugiat inventore magnam, placeat sit. Accusamus, alias asperiores culpa deserunt est, et incidunt iusto quaerat, sapiente temporibus totam veniam veritatis. Ab ad aliquam amet aperiam architecto assumenda atque consectetur delectus deserunt dignissimos ea eaque enim eos labore magnam minima nemo nostrum, officiis omnis placeat, quae quam quas recusandae reiciendis repudiandae similique soluta veniam. Aliquam doloribus ex necessitatibus voluptates. Debitis facere possimus quaerat? Adipisci dolor eius eos fugit id iste laudantium maxime minima modi veniam. Alias corporis dolorum ducimus eaque excepturi fugit quia voluptatem voluptatibus?</p>
//
//     <input type="button" className="btn fw-bolder p-3  btn-outline-light my-2 " style={{backgroundColor: "#013571"}} value="    Contact Us   "/>
//
// </div>
//              <div className="col"></div>
//
//          </div>
//
//
//
//
//
//          <div className="d-flex align-items-center  justify-content-center ">
//              <div className="col-md-4 mb-5">
//                  <h1 >Explainer Video</h1>
//                  <h1 >For the Course</h1>
//                  <p> site amet, consectetur adipisicing elit. Accusantium adipisci atque beatae blanditiis, debitis eius enim fugit illo, nihil quae quasi qui quo reprehenderit sequi ut velit veritatis. Commodi, nisi?</p>
//
//                  <input type="button" className="btn fw-bolder p-3  btn-outline-light my-2 " style={{backgroundColor: "#013571"}} value="    Register   "/>
//
//              </div>
//              <div className="col-md-7">
//                  <img
//                      src="/img/place_your_image_here_dou.png" height={490}
//                      className="d-block mx-auto me-5 mt-5"
//                      alt="Image 1"
//                  />
//              </div>
//          </div>
//          <Homebnr/>
//
//      </div>
//
//     );




}

export default AboutUs;