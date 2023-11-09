import React from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';

const CarouselRow = () => {
    return (

        <Container>
            <Row>
                <Col md={12}>
                    <Carousel controls={false} interval={4000}  pause={false}>
                        <Carousel.Item>

                                <div className="d-flex align-items-center">
                                    <div className="col-md-6">
                                        <h1>Title Text</h1>
                                        <h3>Goes Here</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium adipisci atque beatae blanditiis, debitis eius enim fugit illo, nihil quae quasi qui quo reprehenderit sequi ut velit veritatis. Commodi, nisi?</p>
                                    <div className="btn text-white fw-bold px-5 rounded-0" style={{backgroundColor:"#013571"}}>Buy Now</div>
                                    </div>
                                    <div className="col-md-6">
                                        <img
                                            src="/img/otb1_png.png" height={500}
                                            className="d-block mx-auto me-5 mt-5"
                                            alt="Image 1"
                                        />
                                    </div>
                                </div>
                        </Carousel.Item>
                        <Carousel.Item>

                                <div className="d-flex align-items-center">
                                    <div className="col-md-6">
                                        <h1>Out of The</h1>
                                        <h3>Goes Here</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium adipisci atque beatae blanditiis, debitis eius enim fugit illo, nihil quae quasi qui quo reprehenderit sequi ut velit veritatis. Commodi, nisi?</p>
                                    <div className="btn text-white fw-bold px-5 rounded-0" style={{backgroundColor:"#013571"}}>Buy Now</div>
                                    </div>
                                    <div className="col-md-6">
                                        <img
                                            src="/img/out2.png" height={500}
                                            className="d-block mx-auto me-5 mt-5"
                                            alt="Image 1"
                                        />
                                    </div>
                                </div>
                        </Carousel.Item>
                        <Carousel.Item>

                            <div className="d-flex align-items-center">
                                <div className="col-md-6">
                                    <h1>Title Text</h1>
                                    <h3>Goes Here</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium adipisci atque beatae blanditiis, debitis eius enim fugit illo, nihil quae quasi qui quo reprehenderit sequi ut velit veritatis. Commodi, nisi?</p>
                                    <div className="btn text-white fw-bold px-5 rounded-0" style={{backgroundColor:"#013571"}}>Buy Now</div>
                                </div>
                                <div className="col-md-6">
                                    <img
                                        src="/img/otb1_png.png" height={500}
                                        className="d-block mx-auto me-5 mt-5"
                                        alt="Image 1"
                                    />
                                </div>
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
        </Container>
    );
};

export default CarouselRow;
