import React from "react";
import { Link } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";
import SectionTitle from "../sectionTitle/SectionTitle";
import EditionCard from "../card/EditionCard";
import "./css/homeOneAbout.css";

const HomeOneAbout = ({ data }) => {
    return (
        <div className="">
            <div className="container eduvibe-animated-shape">
                <div className="row content">
                    {data?.map((item) => (
                        <div className="col-lg-3 col-sm-12 mt-5" key={item.id}>
                            <div
                                className="card card-event"
                                style={{ width: "100%" }}
                            >
                                <EditionCard data={item} />
                            </div>
                        </div>
                    ))}
                </div>

                {/* <div className={`row "g-5 mt--25"}`}>
                    {data?.map((data, i) => (
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
                                                objectFit: data?.category_info
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
                    ))}
                </div> */}
            </div>
        </div>
    );
};

export default HomeOneAbout;
