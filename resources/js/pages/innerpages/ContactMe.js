import SEO from '../../common/SEO'
import Layout from '../../common/Layout'
import ContactMeForm from '../../components/contact/ContactMeForm'
import PageBanner from '../../components/banner/PageBanner'
import banner from '../../assets/images/contact-banner.png'
import { FiMapPin, FiMail, FiPhone } from 'react-icons/fi'
import { FaFacebookF, FaTwitter, FaPinterestP } from 'react-icons/fa'

import './ContactCard.css'

const ContactMe = () => {
  return (
    <>
      <SEO title="Contact Me" />
      <Layout>
        <PageBanner title="İletişim" image={banner} />

        <div className="eduvibe-contact-me-top edu-contact-me-area about-me-1 edu-section-gap bg-color-white d-flex justify-content-between ">
          <div className="container eduvibe-animated-shape">
            <div className="row g-5">
              <div className="col-lg-8">
                <div className="section-title text-start mb-5">
                  <h3 className="title">İletişim Formu</h3>
                </div>
                <ContactMeForm formStyle="rnt-contact-form rwt-dynamic-form row" />
              </div>
              <div className="col-lg-4 d-flex justify-content-around">
                <div className="contact-information">
                  <div>
                    <h5 className="contact-information-title d-flex align-items-center">
                      <FiMapPin className="contact-icon" /> Türk Eğitim Derneği
                    </h5>
                    <div className="contact-information-text">
                      <p>
                        Kocatepe Mah. Kızılırmak Cad. No:8, 06420 Kocatepe,
                        Çankaya / Ankara
                      </p>
                    </div>
                  </div>
                  <div>
                    <h5 className="contact-information-title d-flex align-items-center">
                      <FiMail className="contact-icon" /> E-Posta
                    </h5>
                    <a a href="mailto:info@tedmem.org">
                      <div className="contact-information-text">
                        <p>info@tedmem.org</p>
                      </div>
                    </a>
                  </div>
                  <div>
                    <h5 className="contact-information-title d-flex align-items-center">
                      <FiPhone className="contact-icon" /> Phone
                    </h5>
                    <div className="contact-information-text">
                      <p>
                        Tel: (0312) 939 50 20 <br /> Faks: (0312) 417 53 65
                      </p>
                    </div>
                  </div>
                  <div>
                    <h5 className="contact-information-social-media">
                      Sosyal Medya
                    </h5>
                    <div className="contact-information-icon d-flex">
                      <a href="https://www.facebook.com/tedmem" target="_blank">
                        <div
                          className="social-media-icon-card  mb-3"
                          style={{ backgroundColor: '#e9eef5' }}
                        >
                          <FaFacebookF style={{ color: '#124d97' }} />
                        </div>
                      </a>
                      <a href="https://twitter.com/tedmem" target="_blank">
                        <div
                          className="social-media-icon-card ml-4 mb-3"
                          style={{ backgroundColor: '#ebf6fe' }}
                        >
                          <FaTwitter style={{ color: '#01a4f4' }} />
                        </div>
                      </a>
                      <a href="https://twitter.com/tedmem" target="_blank">
                        <div
                          className="social-media-icon-card ml-4 mb-3"
                          style={{ backgroundColor: '#fce7ea' }}
                        >
                          <FaPinterestP style={{ color: '#da2347' }} />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
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
      </Layout>
    </>
  )
}
export default ContactMe
