
const CourceList = () => {

    return(

        <div className="bg-white container-fluid text-center pb-4">

            <div className="row gap-4 justify-content-center ">

                <div style={{backgroundColor:"#DFDFDF"}} className="col-3">
                    <div className="position-relative ">
                        <img src="/img/rectangle_3_copy_3.png" alt="Your Image" className="img-fluid p-4"/>
                        <div className="position-absolute top-0 end-0 m-2">



                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30"  fill="red" className="m-4">
                                <path stroke={"red"} strokeWidth={2} d="M12 21.35l-1.45-1.32C5.4 16.36 2 13.25 2 9.5 2 6.42 4.42 4 7.5 4c1.74 0 3.41.81 4.5 2.09C15.09 4.81 16.76 4 18.5 4 21.58 4 24 6.42 24 9.5c0 3.75-3.4 6.86-8.55 10.54L12 21.35z"/>
                            </svg>


                        </div>

                        <div className="h5 fw-bolder" style={{marginTop:-15}} >Out of The Box</div>
                        <div className="h5 text-warning" style={{marginTop:-10}} >★★★★★</div>

                        <div className="mx-5 ">
                            <div className="bg-white mx-5 rounded-4 ">
                                <span className="h5 fw-semibold"  >$20 </span><small>$40 (50% off)</small>
                            </div>
                            <div>

                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi beatae cumque dolorum ea enim explicabo, impedit neque odio placeat quo sed soluta suscipit temporibus velit.
                            </div>

                            <div className="btn fw-bolder px-5 rounded-0 btn-outline-light my-3" style={{backgroundColor: "#013571"}}>Buy Now</div>
                        </div>
                    </div>


                </div>
                <div style={{backgroundColor:"#DFDFDF"}} className="col-3">
                    <div className="position-relative ">
                        <img src="/img/rectangle_3_copy_4.png" alt="Your Image" className="img-fluid p-4"/>
                        <div className="position-absolute top-0 end-0 m-2">



                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30"  fill="none" className="m-4">
                                <path stroke={"grey"} strokeWidth={2} d="M12 21.35l-1.45-1.32C5.4 16.36 2 13.25 2 9.5 2 6.42 4.42 4 7.5 4c1.74 0 3.41.81 4.5 2.09C15.09 4.81 16.76 4 18.5 4 21.58 4 24 6.42 24 9.5c0 3.75-3.4 6.86-8.55 10.54L12 21.35z"/>
                            </svg>


                        </div>

                        <div className="h5 fw-bolder" style={{marginTop:-15}} >Course Title Goes Here</div>
                        <div className="h5 text-warning" style={{marginTop:-10}} >★★★★</div>

                        <div className="mx-5 ">
                            <div className="bg-white mx-5 rounded-4 ">
                                <span className="h5 fw-semibold"  >$20 </span><small>$40 (50% off)</small>
                            </div>
                            <div>

                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi beatae cumque dolorum ea enim explicabo, impedit neque odio placeat quo sed soluta suscipit temporibus velit.
                            </div>

                            <div className="btn fw-bolder px-5 rounded-0 btn-outline-light my-3" style={{backgroundColor: "#013571"}}>Buy Now</div>
                        </div>
                    </div>


                </div>



            </div>

            <div className="btn btn-outline-dark border-2 mt-4 px-5 "> Find More</div>

        </div>
    );

}
export default CourceList