import React from "react";
import { Link, useNavigate } from "react-router-dom";
import ScrollTopButton from "./ScrollTopButton";
import Logo from "../../assets/images/bg/tedmem-logo.png";
import { BsInstagram } from "react-icons/bs";
import "./Footer.css";
import footerCard from "../../assets/images/footer-card.png";
import { RiFacebookFill, RiTwitterFill, RiLinkedinFill } from "react-icons/ri";
import { CiMap, CiPhone, CiMail } from "react-icons/ci";
import { ImPrinter } from "react-icons/im";
const FooterOne = () => {
    const navigate = useNavigate();

    return (
        <>
            <footer className="eduvibe-footer-one edu-footer footer-style-default position-relative">
                <div className="footer-top">
                    <div className="row footer-card-container">
                        <div className="footer-card-content">
                            <img
                                className="footer-card-picture"
                                src={footerCard}
                            />
                        </div>
                        <div className="footer-card-inside">
                            <div className="footer-one-card-text">
                                Bülten ve Yayınlarından <br /> Haberdar Olmak
                                İçin
                            </div>
                            <button
                                onClick={() => navigate("iletisim")}
                                className="footer-one-card-button"
                            >
                                Abone Ol
                            </button>
                        </div>
                    </div>
                    <div
                        className="container eduvibe-animated-shape"
                        style={{ marginTop: "150px" }}
                    >
                        <div className="row g-5">
                            <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                                <div className="edu-footer-widget">
                                    <div className="logo">
                                        <Link to="/">
                                            <img
                                                className="logo-light"
                                                src={Logo}
                                                alt="Footer Logo"
                                            />
                                        </Link>
                                    </div>
                                    <p className="description">
                                        Bir düşünce kuruluşu olarak TEDMEM; tüm
                                        çocuklarımızın daha adil ve nitelikli
                                        eğitim fırsatlarına ulaşmalarına katkı
                                        sağlayacak eğitim politikalarının hayata
                                        geçirilmesini amaçlar.
                                    </p>
                                    <ul className="social-share">
                                        <li>
                                            <a
                                                style={{
                                                    backgroundColor: "#3a5493",
                                                    fontSize: "22px",
                                                }}
                                                href="https://tr-tr.facebook.com/tedmem/"
                                                target="_blank"
                                            >
                                                <RiFacebookFill />
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                style={{
                                                    backgroundColor: "#0961b8",
                                                    fontSize: 22,
                                                }}
                                                href="https://www.linkedin.com/company/tedmem1/?originalSubdomain=tr"
                                                target="_blank"
                                            >
                                                <RiLinkedinFill />
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                style={{
                                                    backgroundColor: "#1c98e5",
                                                }}
                                                href="https://twitter.com/tedmem"
                                                target="_blank"
                                            >
                                                <RiTwitterFill
                                                    style={{ fontSize: 22 }}
                                                />
                                            </a>
                                        </li>
                                        <li className="instagram-footer-background">
                                            <a
                                                href="https://www.instagram.com/tedmem_/"
                                                target="_blank"
                                            >
                                                <BsInstagram
                                                    className="pb-2"
                                                    style={{ fontSize: 25 }}
                                                />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                                <div className="edu-footer-widget explore-widget">
                                    <h5 className="widget-title">
                                        Yazılarımız
                                    </h5>
                                    <div className="inner">
                                        <ul className="footer-link link-hover">
                                            <li>
                                                <Link to="/yazilar/covid-19">
                                                    COVID-19
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/yazilar/gorus">
                                                    Görüş
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/yazilar/vurus">
                                                    Vuruş
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/yazilar/degerlendirme">
                                                    Değerlendirme
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/yazilar/soylesi">
                                                    Söyleşi
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/yazilar/yuvarlak-masa">
                                                    Yuvarlak Masa
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                                <div className="edu-footer-widget quick-link-widget">
                                    <h5 className="widget-title">
                                        Linklerimiz
                                    </h5>
                                    <div className="inner">
                                        <ul className="footer-link link-hover">
                                            <li>
                                                <Link to="/iletisim">
                                                    İletişim
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/kurumsal/mem-nedir">
                                                    Kurumsal
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/yayinlar">
                                                    Yayınlar
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/etkinlikler">
                                                    Etkinlikler
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/bulten">
                                                    Bültenler
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                                <div className="edu-footer-widget">
                                    <h5 className="widget-title">İletişim</h5>
                                    <div className="inner">
                                        <div className="widget-information">
                                            <ul className="information-list">
                                                <li>
                                                    <a
                                                        href="https://goo.gl/maps/6wQzRBHG49oGaAY7A"
                                                        target="_blank"
                                                        className="d-flex justify-content-center align-items-center footer-icon"
                                                        style={{
                                                            marginLeft: "-35px",
                                                        }}
                                                    >
                                                        <CiMap
                                                            className="mr-2 footer-map-icon"
                                                            style={{
                                                                fontSize:
                                                                    "5rem",
                                                            }}
                                                        />
                                                        Kocatepe Mah. Kızılırmak
                                                        Cad. No: 8, 06420
                                                        Kocatepe, Çankaya /
                                                        Ankara
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="tel:(0312) 939 50 20"
                                                        className="d-flex justify-content-center align-items-center footer-icon"
                                                        style={{
                                                            marginLeft: "-35px",
                                                        }}
                                                    >
                                                        <CiPhone
                                                            className="mr-2"
                                                            style={{
                                                                fontSize:
                                                                    "3rem",
                                                            }}
                                                        />
                                                        (0312) 939 50 20
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="tel:(0312) 417 53 65"
                                                        className="d-flex justify-content-center align-items-center footer-icon"
                                                        style={{
                                                            marginLeft: "-35px",
                                                        }}
                                                    >
                                                        <ImPrinter
                                                            className="mr-2"
                                                            style={{
                                                                fontSize:
                                                                    "3rem",
                                                            }}
                                                        />
                                                        (0312) 417 53 65
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        target="_blank"
                                                        href="mailto:yourmailaddress@example.com"
                                                        className="d-flex justify-content-center align-items-center footer-icon"
                                                        style={{
                                                            marginLeft: "-35px",
                                                        }}
                                                    >
                                                        <CiMail
                                                            className="mr-2"
                                                            style={{
                                                                fontSize:
                                                                    "3rem",
                                                            }}
                                                        />
                                                        info@tedmem.org
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
                <div className="copyright-area copyright-default">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="inner text-center">
                                    <p
                                        style={{
                                            color: "gray",
                                            margin: "20px",
                                        }}
                                    >
                                        Tüm hakları saklıdır. &copy;{" "}
                                        {new Date().getFullYear()} TEDMEM
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <ScrollTopButton />
        </>
    );
};

export default FooterOne;
