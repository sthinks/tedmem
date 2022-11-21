import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { Helmet } from "react-helmet";
import SectionTitle from "../sectionTitle/SectionTitle";

const CategoryOne = ({ data }) => {
    return (
        <>
            <div className={`row "g-5"}`}>
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
                                     href={data?.pdf_link[0]}
                                     target='_blank'
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
                                <div className="content" style={{height: "300px"}}>
                                    <div style={{
                                            height: "100%",
                                            display: "flex",
                                            flexDirection: "column",
                                            justifyContent:"space-between"}}>
                                    <div>

                                    </div>

                                    <div>
                                    <h6 className="title">
                                        <a
                                        href={data?.pdf_link[0]}
                                        target='_blank'>{data?.title}</a>
                                    </h6>
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
            

        </>
    );
};

export default CategoryOne;
