import React, { useEffect } from "react";
import SEO from "../../common/SEO";
import Layout from "../../common/Layout";
import BreadcrumbOne from "../../common/breadcrumb/BreadcrumbOne";
import CourseTypeThree from "../../components/course/CourseTypeThree";
import axiosClient from "../../utils/axiosClient";
import PageBanner from "../../components/banner/PageBanner";
import banner from "../../assets/images/activity-banner.png";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import "./Course.css";
import { Pagination } from "../../components/pagination/PaginationOne";
const CourseThree = () => {
    const [content, setContent] = React.useState(null);

    const getEvents = async () => {
        await axiosClient.get(`/api/events`).then((res) => {
            setContent(res.data);
            console.log("content", res.data);
        });
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
                        <div className="row g-5 mt--10">
                            {content?.map((item) => (
                                <div className="col-lg-6 " key={item.id}>
                                    <CourseTypeThree data={item} />
                                </div>
                            ))}
                        </div>
                        {/* Pagination */}
                        <div className="pagination d-flex justify-content-center mt-5 pagination">
                            <div className="">
                                <FiArrowLeft /> Geri
                            </div>
                            <div></div>
                            <div className="">
                                İleri <FiArrowRight />
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
};

export default CourseThree;
