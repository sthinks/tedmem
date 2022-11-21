import React from "react";
import { Link, useNavigate } from "react-router-dom";

const CourseTypeThree = ({ data, classes, bgWhite }) => {
    const formattedDate = new Date(data.date);
    const history = useNavigate();
  return (
    <div
      className={`edu-card card-type-1 radius-small ${classes ? classes : ""} ${
        bgWhite === "enable" ? "bg-white" : ""
      }`}
      style={{width:'100%',height:'100%'}}
    >
      <div className="inner" >
        <div className="thumbnail">
          <Link to={`/course-details/${data.slug}`}>
            <img
              className="w-100"
              src={data.image}
              alt="Course Thumb"
            />
          </Link>
          <div className="top-position status-group left-top">
            <span className="eduvibe-status status-01">{formattedDate.toLocaleDateString()}</span>
          </div>
        </div>
        <div className="content d-flex justify-content-between flex-column" style={{height:'300px'}}>
          <ul className="edu-meta meta-01">
            <li>
              <i className="icon-file-list-4-line"></i>
              {data.location}
            </li>
            <li>
              <i className="icon-time-line"></i>
              {data.hour}
            </li>
          </ul>
          <h6 className="title">
            <Link to={`/course-details/${data.slug}`}>
              {data.title}
            </Link>
          </h6>
          <div className="card-bottom">
            <button onClick={() => history(`/course-details/${data.slug}`)} type="button" style={{ fontWeight:'bolder' }} class="btn btn-warning btn-lg btn-block">
              Kayıt
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseTypeThree;
