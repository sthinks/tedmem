import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const PostStandard = ({ data, classes }) => {
    const formattedDate = new Date(data.created_at);
    return (
        <>
            {data && (
                <div className={`inner ${classes ? classes : ""}`}>
                    <div className="thumbnail">
                        <Link to={`/blog-details/${data.slug}`}>
                            <img src={data.image} alt="Blog Thumb" />
                        </Link>
                        <div className="top-position status-group left-top">
                            <div class="eduvibe-status status-01 bg-primary-color">
                                <i className="icon-price-tag-3-line"></i> {data.tag}
                            </div>
                        </div>
                    </div>
                    <div className="content">
                        <ul className="blog-meta">
                            <li>
                                <i className="icon-user-line"></i>
                                {data?.author[0].name}
                            </li>
                            <li>
                                <i className="icon-calendar-2-line"></i>
                                {formattedDate.toLocaleDateString("en-US")}
                            </li>
                        </ul>
                        <h4 className="title">
                            <Link to={`/blog-details/${data.slug}`}>
                                {data.title}
                            </Link>
                        </h4>
                        <p className="description">{data.excerpt}</p>
                    </div>
                </div>
            )}
        </>
    );
};

export default PostStandard;
