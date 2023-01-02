import React from 'react'
import { Link } from 'react-router-dom'
import ScrollTopButton from './ScrollTopButton'
import Logo from '../../assets/images/bg/tedmem-logo.png'
import { BsInstagram } from 'react-icons/bs'
import './Footer.css'
import footerCard from '../../assets/images/footer-card.png'

const FooterOne = () => {
  return (
    <>
      <footer className="eduvibe-footer-one edu-footer footer-style-default position-relative">
        <div className="footer-top">
          <div className="row footer-card-container">
            <div className="footer-card-content">
              <img className="footer-card-picture" src={footerCard} />
            </div>
            <div className="footer-card-inside">
              <div className="footer-one-card-text">
                Bülten ve Yayınlarından <br /> Haberdar Olmak İçin
              </div>
              <button className="footer-one-card-button">Abone Ol</button>
            </div>
          </div>
          <div
            className="container eduvibe-animated-shape"
            style={{ marginTop: '150px' }}
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
                    Bir sivil toplum kuruluşu olarak TEDMEM’in üretken ve etkili
                    olması öncelik olarak belirlenmiştir. Bu önceliği en iyi
                    ifade edecek kavram ise insanın sosyal ve kültürel hayatıyla
                    ilgili bilgileri içeren kodlar ve birimler.
                  </p>
                  <ul className="social-share">
                    <li>
                      <a
                        style={{ backgroundColor: '#3a5493' }}
                        href="https://tr-tr.facebook.com/tedmem/"
                        target="_blank"
                      >
                        <i className="icon-Fb"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        style={{ backgroundColor: '#0961b8' }}
                        href="https://www.linkedin.com/company/tedmem1/?originalSubdomain=tr"
                        target="_blank"
                      >
                        <i className="icon-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        style={{ backgroundColor: '#1c98e5' }}
                        href="https://twitter.com/tedmem"
                        target="_blank"
                      >
                        <i className="icon-Twitter"></i>
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
                  <h5 className="widget-title">Yazılarımız</h5>
                  <div className="inner">
                    <ul className="footer-link link-hover">
                      <li>
                        <Link to="/yazilar/covid-19">COVID-19</Link>
                      </li>
                      <li>
                        <Link to="/yazilar/gorus">Görüş</Link>
                      </li>
                      <li>
                        <Link to="/yazilar/vurus">Vuruş</Link>
                      </li>
                      <li>
                        <Link to="/yazilar/degerlendirme">Değerlendirme</Link>
                      </li>
                      <li>
                        <Link to="/yazilar/soylesi">Söyleşi</Link>
                      </li>
                      <li>
                        <Link to="/yazilar/yuvarlak-masa">Yuvarlak Masa</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                <div className="edu-footer-widget quick-link-widget">
                  <h5 className="widget-title">Linklerimiz</h5>
                  <div className="inner">
                    <ul className="footer-link link-hover">
                      <li>
                        <Link to="/iletisim">İletişim</Link>
                      </li>
                      <li>
                        <Link to="/kurumsal/mem-nedir">Kurumsal</Link>
                      </li>
                      <li>
                        <Link to="/yayinlar">Yayınlar</Link>
                      </li>
                      <li>
                        <Link to="/etkinlikler">Etkinlikler</Link>
                      </li>
                      <li>
                        <Link to="/bulten">Bültenler</Link>
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
                          <a
                            href="https://goo.gl/maps/6wQzRBHG49oGaAY7A"
                            target="_blank"
                          >
                            Kocatepe Mah. Kızılırmak Cad. No: 8, 06420 Kocatepe,
                            Çankaya / Ankara
                          </a>
                        </li>
                        <li>
                          <i className="icon-phone-fill"></i>
                          <a href="tel:(0312) 939 50 20">(0312) 939 50 20</a>
                        </li>
                        <li>
                          <i className="icon-phone-fill"></i>
                          <a href="tel:(0312) 417 53 65">(0312) 417 53 65</a>
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
          </div>
        </div>
        <div className="copyright-area copyright-default">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="inner text-center">
                  <p
                    style={{
                      color: 'gray',
                      margin: '20px',
                    }}
                  >
                    Tüm hakları saklıdır. &copy; {new Date().getFullYear()}{' '}
                    TEDMEM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <ScrollTopButton />
    </>
  )
}

export default FooterOne
