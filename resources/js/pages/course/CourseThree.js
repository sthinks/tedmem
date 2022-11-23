import React, { useEffect } from "react";
import SEO from "../../common/SEO";
import Layout from "../../common/Layout";
import BreadcrumbOne from "../../common/breadcrumb/BreadcrumbOne";
import CourseTypeThree from "../../components/course/CourseTypeThree";
import axiosClient from "../../utils/axiosClient";
import PageBanner from "../../components/banner/PageBanner";
import banner from "../../assets/images/activity-banner.png";
import "./Course.css";

const CourseThree = () => {
    const [content, setContent] = React.useState(null);

    const getEvents = async () => {
        await axiosClient
            .get(`/api/events`)
            .then((res) => setContent(res.data));
        console.log(content);
    };

    useEffect(() => {
        getEvents();
    }, []);

    return (
        <>
            <SEO title="TEDMEM | Etkinlikler" />
            <Layout>
                <PageBanner title="Etkinlikler" image={banner} />
                <div className="edu-course-area edu-section-gap bg-color-white">
                    <div className="container">
                        <div className="row g-5 mt--10 justify-content-center">
                            {content?.map((item) => (
                                <div
                                    className="col-12 col-sm-6 col-lg-6"
                                    key={item.id}
                                >
                                    <CourseTypeThree data={item} />
                                </div>
                            ))}
                            {content?.map((item) => (
                                <div
                                    className="col-12 col-sm-6 col-lg-6"
                                    key={item.id}
                                >
                                    <CourseTypeThree data={item} />
                                </div>
                            ))}

                            {/*
                            {content?.map((item) => (
                                <div className="m-4">
                                    <div
                                        className="card w-100"
                                        style={{ width: "18rem" }}
                                    >
                                        <img
                                            className="card-img-top gap-2"
                                            src=".../100px180/"
                                            alt="Card image cap"
                                        />
                                        <div className="card-body">
                                            <h5 className="card-title">
                                                {{ item }}
                                            </h5>
                                            <p className="card-text">
                                                Some quick example text to build
                                                on the card title and make up
                                                the bulk of the card's content.
                                            </p>
                                            <a
                                                href="#"
                                                className="btn btn-primary"
                                            >
                                                Go somewhere
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))} */}
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
};

export default CourseThree;
