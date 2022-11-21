import React from 'react';
import { Link } from 'react-router-dom';
import { slugify } from '../../utils';
import resim from "../../assets/images/bg/blog1.png"
import resim2 from "../../assets/images/bg/blog2.jpg"


const PostTwo = ( { data, classes, bgWhite } ) => {
    const formattedDate = new Date(data?.created_at);

    return (
        <div style={{ minHeight:'87vh' }} className={`edu-blog blog-type-3 radius-small ${classes ? classes : '' } ${bgWhite === 'enable' ? 'bg-color-white' : '' }`}>
            <div className="inner">
                <div className="content">
                    <div className="status-group">
                        <Link className="eduvibe-status status-05 color-primary w-800" to='/'>{data?.category}</Link>
                    </div>
                    <h4 className="title">
                        <Link to={`/blog-details/${data?.slug}`}>{data?.title}</Link>
                    </h4>
                    <div className="blog-card-bottom">
                        <ul className="blog-meta">
                            <li><i className="icon-calendar-2-line"></i>{ formattedDate.toLocaleDateString() }</li>
                            <li><i className="icon-user-line"></i>Yazar <Link to="#">{data?.author?.name}</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="thumbnail">
                    <Link to={`/blog-details/${data?.slug}`}>
                        <img src={data?.image} alt="Blog Thumb" />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default PostTwo;
