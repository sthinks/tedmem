import React from 'react';
import { Link } from 'react-router-dom';

const LatestPostOne = ( {data} ) => {
    const sorted = data && data.sort((a,b) => {
        return new Date(b.created_at) - new Date(a.created_at)
    })
    return (
        <div className={`edu-blog-widget widget-latest-post `}>
            <div className="inner">
                <h5 className="widget-title">Son Bloglar</h5>
                <div className="content latest-post-list">
                    {
                       sorted && sorted.slice(0,3).map( ( item ) => {
                            return(
                                <div className="latest-post" key={ item.id }>
                                    <div className="thumbnail">
                                        <Link className="d-block" to={`/blog-details/${item.id}`}>
                                            <img style={{ maxWidth:'60px', height:'60px' }} src={item.image} alt="Blog Thumb" />
                                        </Link>
                                    </div>
                                    <div className="post-content">
                                        <ul className="blog-meta">
                                            <li>{item.date}</li>
                                        </ul>
                                        <h6 className="title">
                                            <Link className="d-block" to={`/blog-details/${item.id}`}>{item.title}</Link>
                                        </h6>
                                    </div>
                                </div>
                            )
                        } )
                    }
                </div>
            </div>
        </div>
    )
}

export default LatestPostOne;
