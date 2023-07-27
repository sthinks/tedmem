import React from "react";
import "./instructorOne.css";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
// import ScrollAnimation from 'react-animate-on-scroll';

const InstructorOne = ({ data }) => {
    return (
        <a href={`/kurumsal/${data?.slug}`}>
            <div className="edu-instructor-grid edu-instructor-1">
                <div className="edu-instructor">
                    <div className="inner">
                        <div className="thumbnail">
                            <img
                                className="personnel-img"
                                src={data?.image}
                                alt="Team Member"
                            />
                        </div>

                        <div className="team-share-info">
                            <a
                                className="linkedin"
                                target="_blank"
                                href={data?.linkedin}
                            >
                                <FaLinkedinIn className="icon-linkedin" />
                            </a>
                            <a
                                className="twitter"
                                target="_blank"
                                href={data?.twitter}
                            >
                                <FaTwitter className="icon-Twitter" />
                            </a>
                            <a
                                className="twitter"
                                target="_blank"
                                href={data?.email}
                            >
                                <FiMail className="icon-Twitter" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="edu-instructor-info">
                    <h5 className="title">{data?.name}</h5>
                    <span className="desc">{data?.role}</span>
                </div>
            </div>
        </a>
    );
};
export default InstructorOne;
