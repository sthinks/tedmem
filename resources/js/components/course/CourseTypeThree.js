import React from "react";
import { NavItem } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./CourseActivity.css";

const CourseTypeThree = ({ data, classes, bgWhite }) => {
    const formattedDate = new Date(data.date);
    const history = useNavigate();
    return (
        // <div className="col-6">
        //     <div className="activity-card">
        //         <div className="activity-card-image">
        //             <img className="" src={data.image} />
        //         </div>
        //         <div className="activity-card-content">
        //             Lorem asdasd asdasd asdasd asdasd asdasd asdasd asdasd
        //             asdasd asdasd asdasd asdasd
        //         </div>
        //     </div>
        // </div>

        <div>
            <div className="inner card-content">
                <div className="thumbnail">
                    <img
                        className="activity-card-image"
                        src={data.image}
                        alt="Course Thumb"
                    />
                </div>
                <div className="content d-flex justify-content-between flex-column course-card-text">
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
