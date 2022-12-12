import React from "react";
import { NavItem } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./CourseActivity.css";
import { AiOutlineClockCircle } from "react-icons/ai";
const CourseTypeThree = ({ data, classes, bgWhite }) => {
    const formattedDate = new Date(data.date);
    const history = useNavigate();
    return (
        
        <div>
            <div className="card-content">
                <div className="thumbnail">
                    <img
                        className="activity-card-image"
                        src={data.image}
                        alt="Course Thumb"
                    />
                </div>
                <div className="activity-content d-flex justify-content-between flex-column course-card-text">
                    <span className="activity-badge">Etkinlikler</span>
                    <h6 className="activity-title">{data.title}</h6>
                    <div className="activity-content-date">
                        <AiOutlineClockCircle className="activity-date-icon" />  {formattedDate.toLocaleDateString("en-GB")}
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
