import React from "react";
import { Link } from "react-router-dom";
import ScrollTopButton from "./ScrollTopButton";
import Logo from "../../assets/images/bg/tedmem-logo.png";
import { BsInstagram } from "react-icons/bs";
import "./Footer.css";
import footerCard from "../../assets/images/footer-card.png";

const FooterOne = () => {
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
                        <div className="aabb">
                            <div className="footer-one-card-text">
                                Bülten ve Yayınlarından <br /> Haberdar Olmak
                                İçin
                            </div>
                            <button className="footer-one-card-button">
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
                                        Bir sivil toplum kuruluşu olarak
                                        TEDMEM’in üretken ve etkili olması
                                        öncelik olarak belirlenmiştir. Bu
                                        önceliği en iyi ifade edecek kavram ise
                                        insanın sosyal ve kültürel hayatıyla
                                        ilgili bilgileri içeren kodlar ve
                                        birimler.
                                    </p>
                                    <ul className="social-share">
                                        <li>
                                            <a
                                                href="https://tr-tr.facebook.com/tedmem/"
                                                target="_blank"
                                            >
                                                <i className="icon-Fb"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://www.linkedin.com/company/tedmem1/?originalSubdomain=tr"
                                                target="_blank"
                                            >
                                                <i className="icon-linkedin"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://twitter.com/tedmem"
                                                target="_blank"
                                            >
                                                <i className="icon-Twitter"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://www.instagram.com/tedmem"
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
                                                    <i className="icon-map-pin-line"></i>
                                                    Kocatepe Mah. Kızılırmak
                                                    Cad. No: 8, 06420 Kocatepe,
                                                    Çankaya / Ankara
                                                </li>
                                                <li>
                                                    <i className="icon-phone-fill"></i>
                                                    <a href="tel:(0312) 939 50 20">
                                                        (0312) 939 50 20
                                                    </a>
                                                </li>
                                                <li>
                                                    <i className="icon-phone-fill"></i>
                                                    <a href="tel:(0312) 417 53 65">
                                                        (0312) 417 53 65
                                                    </a>
                                                </li>
                                                <li>
                                                    <i className="icon-mail-line-2"></i>
                                                    <a
                                                        target="_blank"
                                                        href="mailto:yourmailaddress@example.com"
                                                    >
                                                        info@tedmem.org
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="shape-dot-wrapper shape-wrapper d-md-block d-none">
                            <div className="shape-image shape-image-1">
                                <img
                                    src="/images/shapes/shape-21-01.png"
                                    alt="Shape Thumb"
                                />
                            </div>
                            <div className="shape-image shape-image-2">
                                <img
                                    src="/images/shapes/shape-35.png"
                                    alt="Shape Thumb"
                                />
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
