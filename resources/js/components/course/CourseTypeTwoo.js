import React from "react";
import { Link, useParams } from "react-router-dom";

const CourseTwo = ({ classes, data }) => {
    const item = data && data[0];
    const formatted = new Date(item?.created_at)
    return (
        <>
            {!data && (
                <h2>veri yok</h2>
            )}
            <div
                className={`edu-card card-type-2 radius-small ${
                    classes ? classes : ""
                }`}
            >
                <div className="inner">
                    <div className="thumbnail">
                        <Link to={`/yazilar-detay/${item?.slug}`}>
                            <img
                                className="w-100"
                                src={item?.image}
                                alt="Course Thumb"
                            />
                        </Link>
                    </div>
                    <div className="content">
                        <p>{formatted.toLocaleDateString()}</p>
                        <h6 className="title">
                            {<Link to={`/yazilar-detay/${item?.slug}`}>{item?.title}</Link>}
                        </h6>
                        <p>
                            <div
                                style={{
                                    maxHeight: "30vh",
                                    overflow: "hidden",
                                }}
                                dangerouslySetInnerHTML={{
                                    __html: item?.content,
                                }}
                            ></div>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};
export default CourseTwo;
