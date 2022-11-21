import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiUsers } from "react-icons/fi";
import { MdDateRange } from "react-icons/md";

const EventTwo = ({ data, shade, shadow, classes }) => {

    return (
        <div className={`edu-event event-grid-1 radius-small ${ classes ? classes : ''} ${ shade === 'enable' ? 'bg-shade' : '' } ${ shadow === 'enable' ? 'eduvibe-event-two-shadow' : '' }`}>
            <div className="inner">
                <div className="thumbnail">
                    <Link to={`/event-details/${data.slug}`}>
                        <img src={data?.image} alt="Event Thumb" />
                    </Link>
                    <div className="top-position status-group left-top">
                        <span className="eduvibe-status status-06">{data.publish_year}</span>
                    </div>
                </div>
                <div className="content">
                    <div className='d-flex justify-content-between align-items-center'>
                        <p><FiUsers style={{fontSize:'20px'}}/> {data.publisher}</p>
                        <p><MdDateRange style={{fontSize:'25px'}}/> {data.publish_year}</p>
                    </div>
                    <h5 className="title">
                        <Link to={`/event-details/${data.slug}`}>{data.title}</Link>
                    </h5>
                    <div className="read-more-btn">
                        <Link className="btn-transparent" to={`/event-details/${data.slug}`}>İncele<i className="icon-arrow-right-line-right"></i></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventTwo;
