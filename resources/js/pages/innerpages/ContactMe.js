import React from "react";
import SEO from "../../common/SEO";
import Layout from "../../common/Layout";
import BreadcrumbOne from "../../common/breadcrumb/BreadcrumbOne";
import ContactMeForm from "../../components/contact/ContactMeForm";
import Tel from '../../assets/images/bg/tel.png';
import Adres from '../../assets/images/bg/adres.png';

const ContactMe = () => {


  return (
    <>
      <SEO title="Contact Me" />
      <Layout>
        <BreadcrumbOne
          title="İletişim"
          rootUrl="/"
          parentUrl="Anasayfa"
          currentUrl="İletişim"
        />
        <div className="eduvibe-contact-me-top edu-contact-me-area about-me-1 edu-section-gap bg-color-white">
          <div className="container eduvibe-animated-shape">
            <div className="row g-5">
              <div className="col-lg-6">
                <div className="pr--75 pr_lg--0 pr_md--0 pr_sm--0">
                  <div className="thumbnail">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3060.19672372839!2d32.855739350930186!3d39.9146135793257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34fa93e44d967%3A0x1af1feb1e56fc728!2zS29jYXRlcGUsIEvEsXrEsWzEsXJtYWsgQ2QuIE5vOjgsIDA2NjQwIMOHYW5rYXlhL0Fua2FyYQ!5e0!3m2!1str!2str!4v1652702771884!5m2!1str!2str"
                      width="600"
                      height="450"
                      style={{ border: "0" }}
                      allowfullscreen=""
                      loading="lazy"
                    ></iframe>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="section-title text-start mb--60">
                  <span className="pre-title">İletişim</span>
                  <h3 className="title">Bize Ulaşın</h3>
                </div>
                <ContactMeForm formStyle="rnt-contact-form rwt-dynamic-form row" />
              </div>
            </div>

            <div className="shape-dot-wrapper shape-wrapper d-xl-block d-none">
              <div className="shape-image shape-image-1">
                <img src="/images/shapes/shape-03-11.png" alt="Shape Thumb" />
              </div>
              <div className="shape-image shape-image-2">
                <img src="/images/shapes/shape-15-06.png" alt="Shape Thumb" />
              </div>
              <div className="shape-image shape-image-3">
                <img src="/images/shapes/shape-09-03.png" alt="Shape Thumb" />
              </div>
              <div className="shape-image shape-image-4">
                <img src="/images/shapes/shape-03-02.png" alt="Shape Thumb" />
              </div>
            </div>
          </div>
        </div>

        <div className="eduvibe-contact-me-bottom edu-contact-address contact-address-bottom-shape edu-section-gapBottom">
          <div className="container eduvibe-animated-shape">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title text-center">
                  <span className="pre-title">Bilgilerimiz</span>
                  <h3 className="title">İletişim Kanalları</h3>
                </div>
              </div>
            </div>

            <div className="row g-5 mt--20">
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="contact-address-card-2">
                  <div className="inner">
                    <div className="icon">
                      <img
                        src={Tel}
                        alt="Icon Images"
                        style={{width:'13%'}}
                      />
                    </div>
                    <div className="content">
                      <h6 className="title">İletişim</h6>
                      <p>
                        <span className="subtitle">Tel: </span>
                        <a>(0312) 939 50 20</a>
                      </p>
                      <p>
                        <span className="subtitle">Faks: </span>
                        <a>(0312) 417 53 65</a>
                      </p>
                      <p>
                        <span className="subtitle">Email: </span>
                        <a>info@tedmem.org</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-md-6 col-sm-12" >
                <div className="contact-address-card-2" style={{ paddingBottom:'13.6vh' }} >
                  <div className="inner">
                    <div className="icon">
                      <img
                        src={Adres}
                        alt="Icon Images"
                        style={{width:'13%'}}
                      />
                    </div>
                    <div className="content">
                      <h6 className="title">Adres</h6>
                      <p>
                        Türk Eğitim Derneği Kocatepe Mah. Kızılırmak Cad. No: 8,
                        06420 Kocatepe, Çankaya / Ankara
                      </p>
                    </div>
                  </div>
                </div>
              </div>


            </div>

            <div className="shape-dot-wrapper shape-wrapper d-xl-block d-none">
              <div className="shape-image shape-image-1">
                <img src="/images/shapes/shape-03-01.png" alt="Shape Thumb" />
              </div>
              <div className="shape-image shape-image-2">
                <img src="/images/shapes/shape-05-06.png" alt="Shape Thumb" />
              </div>
              <div className="shape-image shape-image-3">
                <img src="/images/shapes/shape-14-03.png" alt="Shape Thumb" />
              </div>
              <div className="shape-image shape-image-4">
                <img src="/images/shapes/shape-05-03.png" alt="Shape Thumb" />
              </div>
              <div className="shape-image shape-image-5">
                <img src="/images/shapes/shape-01-03.png" alt="Shape Thumb" />
              </div>
            </div>
          </div>
          <div className="bg-shape-image">
            <img
              src="/images/contact/contact-me/bg-image-27.jpg"
              alt="Shape Images"
            />
          </div>
        </div>
      </Layout>
    </>
  );
};
export default ContactMe;
