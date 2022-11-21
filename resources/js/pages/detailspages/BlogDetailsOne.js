import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { slugify } from "../../utils";
import SEO from "../../common/SEO";
import Layout from "../../common/Layout";
import BreadcrumbOne from "../../common/breadcrumb/BreadcrumbOne";
import Comment from "../blog/Comment";
import PostData from "../../data/blog/PostData.json";
import axiosClient from "../../utils/axiosClient";

const BlogDetailsOne = () => {
    const { slug } = useParams();
    const [data, setData] = React.useState(null);

    const getData = async () => {
        await axiosClient
            .get(`/api/blog-details/${slug}`)
            .then((res) => setData(res.data));
    };

    useEffect(() => {
        getData()
    }, [])

    const formatted = new Date(data?.created_at)

    return (
        <>
            <SEO title={data?.title} />
            <Layout>
                <BreadcrumbOne
                    title={data?.title}
                    rootUrl="/"
                    parentUrl="Anasayfa"
                    currentUrl="Blog Detay"
                />
                <div className="edu-blog-details-area edu-section-gap bg-color-white">
                    <div className="container">
                        <div className="row g-5">
                            <div className="col-lg-10 offset-lg-1">
                                <div className="blog-details-1 style-variation3">
                                    <div className="content-blog-top">
                                        <div className="content-status-top d-flex justify-content-between mb--30 align-items-center">
                                            <div className="status-group">
                                                <Link
                                                    className="text-uppercase eduvibe-status status-05 color-primary w-600"
                                                    to='/blog'
                                                >
                                                   Blog
                                                </Link>
                                            </div>
                                            <ul className="blog-meta">
                                                <li className="blog-author">

                                                    <Link
                                                        to='/'
                                                    >
                                                        {data?.author?.name}
                                                    </Link>
                                                </li>
                                                <li>
                                                    <i className="icon-calendar-2-line"></i>
                                                    {formatted.toLocaleDateString()}
                                                </li>
                                            </ul>
                                        </div>

                                        <h4 className="title">{data?.title}</h4>

                                        <div className="thumbnail block-alignwide">
                                            <img
                                                className="radius-small w-100 mb--30"
                                                src={data?.image}
                                                alt="Blog Thumb"
                                            />
                                        </div>
                                    </div>

                                    <div className="blog-main-content">
                                    <div  dangerouslySetInnerHTML={{ __html: data?.body }}></div>

                                        <p>
                                            <img
                                                className="quote-image"
                                                src="/images/icons/quote-2.png"
                                                alt="Quote Images"
                                            />
                                        </p>
                                    </div>


                                    <div className="blog-author-wrapper">
                                        <div className="thumbnail">
                                            <img
                                                src={data?.author?.image}
                                                alt="Author Images"
                                            />
                                        </div>
                                        <div className="author-content">
                                            <h6 className="title">
                                                {data?.author?.name}
                                            </h6>
                                            <ul className="social-share icon-transparent">
                                                <li>
                                                    <a href={data?.author?.linkedin} target='_blank'>
                                                        <i className="icon-linkedin"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href={data?.author?.twitter} target='_blank'>
                                                        <i className="icon-Twitter"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
};

export default BlogDetailsOne;
