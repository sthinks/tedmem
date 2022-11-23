import React from "react";
import { NavItem } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./CourseActivity.css";

const CourseTypeThree = ({ data, classes, bgWhite }) => {
    const formattedDate = new Date(data.date);
    const history = useNavigate();
    return (
        <div
            className={`edu-card card-type-1 radius-small ${
                classes ? classes : ""
            } ${bgWhite === "enable" ? "bg-white" : ""}`}
            style={{ width: "100%", height: "100%" }}
        >
            <div className="inner">
                <div className="thumbnail">
                    <img
                        className="activity-card-image"
                        src={data.image}
                        alt="Course Thumb"
                    />
                </div>
                <div
                    className="content d-flex justify-content-between flex-column"
                    style={{ height: "270px" }}
                >
                    <span className="badge">Etkinlikler</span>
                    <h6 className="title">{data.title}</h6>
                    <div className="card-content-date">
                        {formattedDate.toLocaleDateString("en-GB")}
                    </div>
                    <div className="card-link-text">
                        <p
                            onClick={() =>
                                history(`/course-details/${data.slug}`)
                            }
                        >
                            Devamını Oku
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseTypeThree;
