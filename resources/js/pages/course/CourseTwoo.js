import { useEffect, useState } from 'react'
import SEO from '../../common/SEO'
import Layout from '../../common/Layout'
import axiosClient from '../../utils/axiosClient'
import { useParams } from 'react-router-dom'
import banner from '../../assets/images/eventdetails.png'
import BannerEvent from '../../components/banner-event/BannerEvent'
import { BsFillCalendarDateFill } from 'react-icons/bs'
import Loading from '../../components/loading/Loading'
import { AiOutlinePaperClip } from 'react-icons/ai'
import { BsDownload } from 'react-icons/bs'
import './courseTwoo.css'
const CoruseTwoo = () => {
  const [loading, setLoading] = useState(true)
  const { slug } = useParams()
  const [content, setContent] = useState(null)

  const getWrites = async () => {
    await axiosClient.get(`/api/yazilar-detay/${slug}`).then((res) => {
      setContent(res.data), setLoading(false)
    })
  }

  useEffect(() => {
    getWrites()
  }, [])
  useEffect(() => {
    getWrites()
  }, [slug])

  return loading ? (
    <Loading />
  ) : (
    <>
      <SEO title={content?.title} />
      <Layout>
        <BannerEvent
          author={content?.author}
          title={content?.title}
          image={banner}
          date={content?.created_at}
        />
        <div className="edu-event-details-area edu-event-details edu-section-gap bg-color-white">
          <div className="container">
            <div className="row g-5">
              <div className="col-lg-7">
                <div className="content">
                  <div
                    className="yazilar-detay-text"
                    dangerouslySetInnerHTML={{ __html: content?.content }}
                  ></div>
                  {content?.tag && (
                    <div>
                      <b>Etiketler</b> :{' '}
                      {content?.tag.map((item, i) => (
                        <a
                          key={i}
                          className="write-tag"
                          href={`/etiketler/${item.slug}`}
                        >
                          {item.name},
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              <div className="col-lg-5">
                <div className="eduvibe-sidebar sticky-top">
                  <div className="event-widget event-widget-details mt--40 mb-3 ">
                    <div className="widget-content">
                      <div className="google-map">
                        <img
                          src={content?.image}
                          alt="Event Thumb"
                          style={{ marginTop: '20%', width: '100%' }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="eduvibe-widget eduvibe-widget-details">
                    <h5 className="title">Yazı Detayı</h5>
                    <div className="widget-content">
                      <ul>
                        {content?.created_at && (
                          <li>
                            <span>
                              <BsFillCalendarDateFill
                                className="m-2"
                                style={{ color: '#fba200' }}
                              />
                              Tarih
                            </span>
                            <span>
                              {/* {formattedDate.toLocaleDateString('en-GB')} */}
                              {content?.year}
                            </span>
                          </li>
                        )}
                        {content?.category?.name && (
                          <li>
                            <span>
                              <i
                                className="icon-calendar-2-line"
                                style={{ color: '#fba200' }}
                              ></i>{' '}
                              Kategori
                            </span>
                            <span>
                              {content?.category?.name.charAt(0).toUpperCase() +
                                content?.category?.name.slice(1)}
                            </span>
                          </li>
                        )}
                        {content?.pdf_link.length > 0 && (
                          <li>
                            <a
                              href={content?.pdf_link[0][0]}
                              target="_blank"
                              style={{ width: '100%' }}
                            >
                              <div className="event-detail-button-pdf">
                                <p>PDF'i indir</p>
                                <BsDownload
                                  style={{
                                    fontSize: '3rem',
                                    color: 'white',
                                    margin: '10px',
                                    width: '10%',
                                  }}
                                />
                              </div>
                            </a>
                          </li>
                        )}
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
  )
}

export default CoruseTwoo
