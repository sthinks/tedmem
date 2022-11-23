import React from "react";
import SEO from "../../common/SEO";
import Layout from "../../common/Layout";
import BreadcrumbOne from "../../common/breadcrumb/BreadcrumbOne";
import ContactMeForm from "../../components/contact/ContactMeForm";
import Tel from "../../assets/images/bg/tel.png";
import Adres from "../../assets/images/bg/adres.png";
import PageBanner from "../../components/banner/PageBanner";
import banner from "../../assets/images/contact-banner.png";
import "./Contact.css";

const ContactMe = () => {
    return (
        <>
            <SEO title="Contact Me" />
            <Layout>
                <PageBanner title="İletişim" image={banner} />

                <div className="eduvibe-contact-me-top edu-contact-me-area about-me-1 edu-section-gap bg-color-white d-flex justify-content-between ">
                    <div className="container eduvibe-animated-shape">
                        <div className="row g-5">
                            <div className="col-lg-6">
                                <div className="section-title text-start mb--60">
                                    <h3 className="title">İletişim Formu</h3>
                                </div>
                                <ContactMeForm formStyle="rnt-contact-form rwt-dynamic-form row" />
                            </div>
                            <div className="col-xl-6 d-flex justify-content-around">
                                <div className="contact-information">
                                    <div className="contact-information-text">
                                        <h5 style={{ fontWeight: "bold" }}>
                                            Türk Eğitim Derneği
                                        </h5>
                                        <p>
                                            Kocatepe Mah. Kızılırmak Cad. No:8,
                                            06420 Kocatepe, Çankaya / Ankara
                                        </p>
                                    </div>
                                    <div className="contact-information-text">
                                        <h5 style={{ fontWeight: "bold" }}>
                                            E-Posta
                                        </h5>
                                        <p>info@tedmem.org</p>
                                    </div>
                                    <div className="contact-information-text">
                                        <h5 style={{ fontWeight: "bold" }}>
                                            Phone
                                        </h5>
                                        <p style={{ fontSize: "18px" }}>
                                            Tel: (0312) 939 50 20 <br /> Faks:
                                            (0312) 417 53 65
                                        </p>
                                    </div>
                                    <div className="contact-information-text">
                                        <h5 style={{ fontWeight: "bold" }}>
                                            <img src="../../assets/images/iconnn.png" />
                                            Sosyal Medya
                                        </h5>
                                        <p style={{ fontSize: "18px" }}>
                                            Tel: (0312) 939 50 20 <br /> Faks:
                                            (0312) 417 53 65
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="shape-dot-wrapper shape-wrapper d-xl-block d-none">
                            <div className="shape-image shape-image-1">
                                <img
                                    src="/images/shapes/shape-03-11.png"
                                    alt="Shape Thumb"
                                />
                            </div>
                            <div className="shape-image shape-image-2">
                                <img
                                    src="/images/shapes/shape-15-06.png"
                                    alt="Shape Thumb"
                                />
                            </div>
                            <div className="shape-image shape-image-3">
                                <img
                                    src="/images/shapes/shape-09-03.png"
                                    alt="Shape Thumb"
                                />
                            </div>
                            <div className="shape-image shape-image-4">
                                <img
                                    src="/images/shapes/shape-03-02.png"
                                    alt="Shape Thumb"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
};
export default ContactMe;
