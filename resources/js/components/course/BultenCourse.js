import React from "react";
import { Link, useParams } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";
import Modal from "../category/Modal";

const BultenCourse = ({ classes, data }) => {
    const [showModal, setShowModal] = React.useState([]);

    const handleModal = (id) => {
        setShowModal([]);
        const modalData = data?.filter((item) => item.id == id);
        setShowModal(modalData);
    };

    return (
        <>
            {data?.map((item) => {
                return (
                    <div className="col-md-4 col-sm-12">
                        <div
                            className={`edu-card card-type-2 radius-small ${
                                classes ? classes : ""
                            }`}
                        >
                            <div className="inner">
                                <div className="thumbnail">
                                    <img
                                        className="w-100"
                                        style={{
                                            height: "100%",
                                            width: "100%",
                                            objectFit: "fill",
                                            position: "relative",
                                        }}
                                        src={item.image}
                                        alt="Course Thumb"
                                        data-toggle="modal"
                                        data-target="#exampleModalCenter"
                                        onClick={() => handleModal(item?.id)}
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
                                            item?.date
                                        ).toLocaleDateString("default", {
                                            month: "long",
                                            year: "numeric",
                                        })}
                                    </span>
                                </div>
                                <div className="content text-center">
                                    <h6 className="title">{item.title}</h6>
                                    <button
                                        className="edu-btn"
                                        data-toggle="modal"
                                        data-target="#exampleModalCenter"
                                        onClick={() => handleModal(item?.id)}
                                    >
                                        Devamını Oku{" "}
                                        <i className="icon-arrow-right-line-right"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <Modal data={showModal} />
                    </div>
                );
            })}
        </>
    );
};
export default BultenCourse;
