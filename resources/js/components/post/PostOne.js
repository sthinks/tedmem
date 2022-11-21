import React from 'react';
import { Link } from 'react-router-dom';

const PostOne = ( { data, classes, bgWhite } ) => {
    const formatted = new Date(data.created_at)
    return (
        <div className={`edu-blog blog-type-2 radius-small ${classes ? classes : '' } ${bgWhite === 'enable' ? 'bg-color-white' : '' }`}>
            <div className="inner">
                <div className="thumbnail">
                    <Link to={`/blog-details/${data.slug}`}>
                        <img style={{ height:"25vh" }} src={data.image} alt="Blog Thumb" />
                    </Link>
                </div>
                <div className="content">
                    <div className="status-group">
                        <Link className="eduvibe-status status-05" to='/'>
                            <i className="icon-price-tag-3-line"></i> {data.tag}
                        </Link>
                    </div>
                    <h5 className="title">
                        <Link to={`/blog-details/${data.slug}`}>{data.title}</Link>
                    </h5>
                    <div className="blog-card-bottom">
                        <ul className="blog-meta">
                            <li><i className="icon-calendar-2-line"></i>{ formatted.toLocaleDateString() }</li>
                        </ul>
                        <div className="read-more-btn">
                            <Link className="btn-transparent" to={`/blog-details/${data.slug}`}>İncele<i className="icon-arrow-right-line-right"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostOne;
