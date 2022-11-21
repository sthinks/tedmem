import React, { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import SEO from "../../common/SEO";
import Layout from "../../common/Layout";
import BreadcrumbOne from "../../common/breadcrumb/BreadcrumbOne";
import CourseData from "../../data/course/CourseData.json";
import axiosClient from "../../utils/axiosClient";
import ContactMeForm from "../../components/contact/ContactMeForm";

const CourseDetails = () => {
    const { slug } = useParams();
    const [content, setContent] = React.useState(null);

    const formattedDate = new Date(content?.date);

    const getDetails = async () => {
        await axiosClient
            .get(`/api/event-details/${slug}`)
            .then((res) => setContent(res.data));
    };

    useEffect(() => {
        getDetails();
    }, []);

    return (
        <>
            <SEO title={`TEDMEM | ${content?.title}`} />
            <Layout>
                <BreadcrumbOne
                    title={`${content?.title}`}
                    rootUrl="/"
                    parentUrl="Anasayfa"
                    currentUrl="Etkinlik Detayı"
                />
                <div className="edu-event-details-area edu-event-details edu-section-gap bg-color-white">
                    <div className="container">
                        <div className="row g-5">
                            <div className="col-lg-7">
                                <div className="content">
                                    <h3 className="title">{content?.title}</h3>
                                    <div
                                        style={{
                                            backgroundColor: "transparent",
                                        }}
                                        dangerouslySetInnerHTML={{
                                            __html: content?.content,
                                        }}
                                    ></div>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="eduvibe-sidebar">
                                    <div className="event-widget event-widget-details mt--40 mb-3 ">
                                        <div className="widget-content">
                                            <div className="google-map">
                                                <img
                                                    src={content?.image}
                                                    alt="Event Thumb"
                                                    style={{ marginTop: "20%", width:'100%'}}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="eduvibe-widget eduvibe-widget-details">
                                        <h5 className="title">
                                            Etkinlik Detayı
                                        </h5>
                                        <div className="widget-content">
                                            <ul>
                                                {formattedDate && (
                                                    <li>
                                                        <span>
                                                            <i className="icon-calendar-2-line"></i>{" "}
                                                            Etkinlik Tarihi
                                                        </span>
                                                        <span>
                                                            {formattedDate.toLocaleDateString()}
                                                        </span>
                                                    </li>
                                                )}
                                                {content?.person && (
                                                    <li>
                                                        <span>
                                                            <i className="icon-user-line"></i>{" "}
                                                            Konuşmacı
                                                        </span>
                                                        <span>
                                                            {content?.speaker}
                                                        </span>
                                                    </li>
                                                )}
                                                <div className="row text-center mt-5">
                                                    <div className="col-12">
                                                        <button
                                                            type="button"
                                                            data-toggle="modal" data-target="#exampleModalCenter"
                                                            style={{
                                                                fontWeight:
                                                                    "bolder",
                                                            }}
                                                            class="btn btn-warning btn-lg px-5"
                                                        >
                                                            Kayıt ol
                                                        </button>
                                                    </div>
                                                </div>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered" role="document">
                            <div class="modal-content border border-rounded p-4" style={{ borderRadius:'25px' }}>
                            <div class="modal-header">
                                <h5 class="modal-title  mx-auto" id="exampleModalCenterTitle">İletişim</h5>

                            </div>
                            <div class="modal-body">
                             <ContactMeForm formStyle="rnt-contact-form rwt-dynamic-form row" />
                            </div>
                            </div>
                        </div>
                        </div>
                </div>
            </Layout>
        </>
    );
};
export default CourseDetails;
