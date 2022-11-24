import React from "react";
import { Link } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";
import SectionTitle from "../sectionTitle/SectionTitle";

const HomeOneAbout = ({ data }) => {
    return (
        <div className="home-one-cat edu-service-area service-wrapper-1 edu-section-gap bg-image ">
            <div className="container eduvibe-animated-shape">
                <div className="row mb-5">
                    <div className="col-lg-12">
                        <SectionTitle
                            classes="text-center"
                            slogan="Şimdi Yayında"
                        />
                    </div>
                </div>

                <div className={`row "g-5 mt--25"}`}>
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
                                    <div
                                        className="thumbnail"
                                        style={{ height: "25vh" }}
                                    >
                                        <Link
                                            to={
                                                data?.category_info
                                                    ? `/yazilar-detay/${data?.slug}`
                                                    : `/event-details/${data?.id}`
                                            }
                                        >
                                            <img
                                                src={data?.image}
                                                alt="Category Thumb"
                                                style={{
                                                    height: "100%",
                                                    width: "100%",
                                                    objectFit:
                                                        data?.category_info
                                                            ? "fill"
                                                            : "contain",
                                                    position: "relative",
                                                }}
                                            />
                                            <span
                                                className="badge"
                                                style={{
                                                    position: "absolute",
                                                    right: 7,
                                                    top: "10px",
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                {data?.category_info?.name ||
                                                    "Yayın"}
                                            </span>
                                        </Link>
                                    </div>
                                    <div
                                        className="content"
                                        style={{ height: "250px" }}
                                    >
                                        <div
                                            style={{
                                                height: "100%",
                                                display: "flex",
                                                flexDirection: "column",
                                                justifyContent: "space-between",
                                            }}
                                        >
                                            <div></div>

                                            <div>
                                                <h6 className="title">
                                                    <a href={data?.link}>
                                                        {data?.title}
                                                    </a>
                                                </h6>
                                            </div>

                                            <div className="text-center mb-2">
                                                <div className="">
                                                    <ScrollAnimation
                                                        animateIn="fadeInUp"
                                                        animateOut="fadeInOut"
                                                        className="load-more-btn"
                                                        animateOnce={true}
                                                    >
                                                        <Link
                                                            className="edu-btn"
                                                            to={
                                                                data?.category_info
                                                                    ? `/yazilar-detay/${data?.slug}`
                                                                    : `/event-details/${data?.slug}`
                                                            }
                                                        >
                                                            Devamını Oku{" "}
                                                            <i className="icon-arrow-right-line-right"></i>
                                                        </Link>
                                                    </ScrollAnimation>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ScrollAnimation>
                    ))}
                </div>

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
        </div>
    );
};

export default HomeOneAbout;
