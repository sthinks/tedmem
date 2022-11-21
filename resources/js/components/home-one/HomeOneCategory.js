import React, { useEffect } from "react";
import CategoryOne from "../category/CategoryOne";
import SectionTitle from "../../components/sectionTitle/SectionTitle";
import Modal from "../category/Modal";
import ScrollAnimation from "react-animate-on-scroll";

const HomeOneCategory = ({ data }) => {
    const [showModal, setShowModal] = React.useState([])

    const handleModal = (id) => {
        setShowModal([])
        const modalData = data?.filter((item) => item.id == id )
        setShowModal(modalData)
    }

    return (
        <div className="home-one-cat edu-service-area service-wrapper-1 edu-section-gap bg-image">
            <div className="container eduvibe-animated-shape">
                <div className="row ">
                    <div className="col-lg-12">
                        <SectionTitle
                            classes="text-center"
                            slogan="Bülten"
                        />
                    </div>
                </div>

                {/* Bültenler */}

                <div className={`row "g-5"}`} style={{marginTop:'3%'}}>
                {data?.map((data, i) => (
                    <ScrollAnimation
                        animateIn="fadeInUp"
                        animateOut="fadeInOut"
                        className={`col-lg-3 col-md-6 col-sm-6 col-12`}
                        animateOnce={true}
                        key={i}
                    >
                        <div className="service-card service-card-1 radius-small h-100">
                            <div className="inner">
                                <div className="thumbnail" style={{height:'auto'}}>
                                    <a
                                    data-toggle="modal" data-target="#exampleModalCenter"
                                    onClick={() => handleModal(data?.id)}
                                    style={{cursor:'pointer'}}
                                     >
                                        <img
                                            src={data?.image}
                                            alt="Category Thumb"
                                            style={{height:'100%', width:'100%', objectFit:'fill',position:'relative'}}
                                        />
                                    <span className="badge" style={{position:'absolute',right:7,top:5,backgroundColor:'black'}}>
                                        {new Date(data?.date).toLocaleDateString('default', {month:"long",year:'numeric'})}
                                    </span>
                                    </a>
                                </div>
                                <div className="content"  >
                                    <div style={{
                                            height: "100%",
                                            display: "flex",
                                            flexDirection: "column",
                                            }}>
                                    <div>

                                    </div>

                                    <div>

                                    </div>

                                    <div className="text-center ">
                                            <div className="">
                                                <ScrollAnimation
                                                    animateIn="fadeInUp"
                                                    animateOut="fadeInOut"
                                                    className="load-more-btn"
                                                    animateOnce={true}
                                                >
                                                    <button
                                                        className="edu-btn"
                                                        data-toggle="modal" data-target="#exampleModalCenter"
                                                        onClick={() => handleModal(data?.id)}
                                                    >
                                                        Devamını Oku{" "}
                                                        <i className="icon-arrow-right-line-right"></i>
                                                    </button>
                                                </ScrollAnimation>
                                            </div>
                                        </div>
                                    </div>




                                </div>
                            </div>
                        </div>
                    </ScrollAnimation>
                ))}

                               <div className="text-center mt-4">
                <a
                    className="edu-btn "
                    href='/bulten'
                >
                    Bültenlerimiz{" "}
                    <i className="icon-arrow-right-line-right"></i>
                </a>
                </div>



                 </div>

                {/*       */}


                <div className="shape-dot-wrapper shape-wrapper d-xl-block d-none">
                    <div className="shape-image shape-image-1">
                        <img
                            src="/images/shapes/shape-03-01.png"
                            alt="Shape Thumb"
                        />
                    </div>
                    <div className="shape-image shape-image-2">
                        <img
                            src="/images/shapes/shape-08.png"
                            alt="Shape Thumb"
                        />
                    </div>
                    <div className="shape-image shape-image-3">
                        <img
                            src="/images/shapes/shape-04-01.png"
                            alt="Shape Thumb"
                        />
                    </div>
                    <div className="shape-image shape-image-4">
                        <img
                            src="/images/shapes/shape-03-02.png"
                            alt="Shape Thumb"
                        />
                    </div>
                </div>
            </div>

            <Modal data={showModal}/>
        </div>
    );
};

export default HomeOneCategory;
