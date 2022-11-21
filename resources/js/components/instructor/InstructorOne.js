import React from "react";
// import ScrollAnimation from 'react-animate-on-scroll';

const InstructorOne = ({ data }) => {
    return (
        <div className="edu-instructor-grid edu-instructor-1">
            <div className="edu-instructor">
                <div className="inner">
                    <div className="thumbnail">
                        <img src={data?.image} alt="Team Member" />
                    </div>
                    <div className="team-share-info">
                        <a className="linkedin" target='_blank' href={data?.linkedin}>
                            <i className="icon-linkedin"></i>
                        </a>
                        <a className="twitter" target='_blank' href={data?.twitter}>
                            <i className="icon-Twitter"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div className="edu-instructor-info">
                <h5 className="title">{data?.name}</h5>
                <span className="desc">{data?.role}</span>
            </div>
        </div>
    );
};
export default InstructorOne;
