import React, { useEffect } from "react";
import CategoryOne from "../category/CategoryOne";
import SectionTitle from "../../components/sectionTitle/SectionTitle";
import Modal from "../category/Modal";
import ScrollAnimation from "react-animate-on-scroll";
import BultenCard from "../bulten/BultenCard";
import bultenImage from "../../assets/images/bulten-image.png";

const HomeOneCategory = ({ data }) => {
    const [showModal, setShowModal] = React.useState([]);

    const handleModal = (id) => {
        setShowModal([]);
        const modalData = data?.filter((item) => item.id == id);
        setShowModal(modalData);
    };

    return (
        <div className="">
            <div className="container eduvibe-animated-shape">
                {/* Bültenler */}
                <div
                    className="d-flex justify-content-center"
                    style={{ width: "35%", marginLeft: "31%" }}
                >
                    <img src={bultenImage} />
                </div>
                <BultenCard data={data} />
                {/* <div className={`row "g-5"}`} style={{ marginTop: "3%" }}>
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
                                        style={{ height: "auto" }}
                                    >
                                        <a
                                            data-toggle="modal"
                                            data-target="#exampleModalCenter"
                                            onClick={() =>
                                                handleModal(data?.id)
                                            }
                                            style={{ cursor: "pointer" }}
                                        >
                                            <img
                                                src={data?.image}
                                                alt="Category Thumb"
                                                style={{
                                                    height: "100%",
                                                    width: "100%",
                                                    objectFit: "fill",
                                                    position: "relative",
                                                }}
                                            />
                                            <span
                                                className="badge"
                                                style={{
                                                    position: "absolute",
                                                    right: 7,
                                                    top: 5,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                {new Date(
                                                    data?.date
                                                ).toLocaleDateString(
                                                    "default",
                                                    {
                                                        month: "long",
                                                        year: "numeric",
                                                    }
                                                )}
                                            </span>
                                        </a>
                                    </div>
                                    <div className="content">
                                        <div
                                            style={{
                                                height: "100%",
                                                display: "flex",
                                                flexDirection: "column",
                                            }}
                                        >
                                            <div></div>

                                            <div></div>

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
                                                            data-toggle="modal"
                                                            data-target="#exampleModalCenter"
                                                            onClick={() =>
                                                                handleModal(
                                                                    data?.id
                                                                )
                                                            }
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
                        <a className="edu-btn " href="/bulten">
                            Bültenlerimiz{" "}
                            <i className="icon-arrow-right-line-right"></i>
                        </a>
                    </div>
                </div> */}

                {/*       */}
            </div>

            <Modal data={showModal} />
        </div>
    );
};

export default HomeOneCategory;
