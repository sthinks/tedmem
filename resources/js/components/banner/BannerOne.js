import { useEffect, useState } from 'react'
import '../../assets/css/style.css'
import banner from '../../assets/images/Logo-orjinal.png'
import 'react-awesome-slider/dist/styles.css'
import 'react-awesome-slider/dist/custom-animations/fall-animation.css'
import { Link, useNavigate } from 'react-router-dom'
import PageBanner from './PageBanner'
import Chat from '../../assets/images/icon/chat.png'
import Comment from '../../assets/images/icon/comment.png'
import News from '../../assets/images/icon/News.png'
import Papper from '../../assets/images/icon/Papper.png'
import Reactİcon from '../../assets/images/icon/React.png'
import Ticket from '../../assets/images/icon/Ticket.png'
import axiosClient from '../../utils/axiosClient'
import { BsSearch } from 'react-icons/bs'

import './bannerOne.css'

const BannerOne = () => {
  const [searchLoading, setSearchLoading] = useState(false)
  const [data, setData] = useState()
  const [value, setValue] = useState('')
  const navigate = useNavigate()
  useEffect(() => {
    {
      if (value.length > 0) {
        const delayDebounceFn = setTimeout(async () => {
          try {
            const response = await axiosClient.get(`/api/search/${value}`)
            const result = response.data
            setData(result)
          } catch (err) {
            console.log(err)
          }
        }, 1000)
        return () => clearTimeout(delayDebounceFn)
      }
    }
  }, [value])
  const inputClickHandler = (e) => {
    if (e.key === 'Enter' || e.type === 'click') {
      navigate(`search-page/${value}`)
    }
  }
  return (
    <div className="">
      <div className="row align-items-center">
        <div>
          <PageBanner
            title="Ortak Paydamız <br /> Eğitim"
            image={banner}
            color="none"
          />
          <div
            style={{
              backgroundColor: '#rgb(255 255 255 / 26%)',
              position: 'relative',
            }}
          >
            <div className="container h-100">
              <div className="row sad text-center ">
                <div className="row d-flex justify-content-center align-items-center">
                  <div>
                    <div className="row d-flex justify-content-center mt-5">
                      <div className="col-md-12 mt-5">
                        <div className="d-flex position-relative">
                          <input
                            className="bg-white mb-2 py-2 banner-one-input"
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                            type="text"
                            onKeyDown={(e) => inputClickHandler(e)}
                            placeholder="Arayın..."
                          />
                          <BsSearch
                            className="search-box-icon"
                            style={{ cursor: 'pointer' }}
                            onClick={(e) => inputClickHandler(e)}
                          />
                        </div>
                        <div
                          className="position-absolute bg-white"
                          style={{ zIndex: '1555', width: '100%' }}
                        >
                          {value && (
                            <>
                              {data && searchLoading && (
                                <div className="write-loading-screen">
                                  <div
                                    class="spinner-border text-warning"
                                    role="status"
                                    style={{ width: '65px', height: '65px' }}
                                  >
                                    <span class="sr-only">Loading...</span>
                                  </div>
                                </div>
                              )}
                              {data?.slice(0, 10).map((item) => {
                                if (item.category_slug) {
                                  return (
                                    <Link to={`/yayinlar-detay/${item.slug}`}>
                                      <div className="border mb-2 input-result">
                                        {item.title}
                                      </div>
                                    </Link>
                                  )
                                } else if (item.speaker) {
                                  return (
                                    <Link to={`/etkinlik-detay/${item.slug}`}>
                                      <div className="border mb-2 input-result">
                                        {item.title}
                                      </div>
                                    </Link>
                                  )
                                } else {
                                  return (
                                    <Link to={`/yazilar-detay/${item.slug}`}>
                                      <div className="border mb-2 input-result">
                                        {item.title}
                                      </div>
                                    </Link>
                                  )
                                }
                              })}
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-xl-4 col-lg-4 col-sm-6  p-3">
                    <Link to="/yayinlar">
                      <div className="d-flex justify-content-start align-items-center my-auto banner-one-link">
                        <img src={News} className="banner-one-link-icon" />
                        <h6 className="banner-one-link-text">Yayınlar </h6>
                      </div>
                    </Link>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-sm-6  p-3">
                    <Link to="/yazilar/degerlendirme">
                      <div className="d-flex justify-content-start align-items-center my-auto banner-one-link">
                        <img src={Ticket} className="banner-one-link-icon" />
                        <h6 className="banner-one-link-text">
                          Değerlendirme Yazıları
                        </h6>
                      </div>
                    </Link>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-sm-6  p-3">
                    <Link to="/yazilar/soylesi">
                      <div className="d-flex justify-content-start align-items-center my-auto banner-one-link">
                        <img src={Comment} className="banner-one-link-icon" />
                        <h6 className="banner-one-link-text">Söyleşi</h6>
                      </div>
                    </Link>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-sm-6  p-3">
                    <Link to="/yazilar/gorus">
                      <div className="d-flex justify-content-start align-items-center my-auto banner-one-link">
                        <img src={Chat} className="banner-one-link-icon" />
                        <h6 className="banner-one-link-text">Görüş</h6>
                      </div>
                    </Link>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-sm-6  p-3">
                    <Link to="/etkinlikler">
                      <div className="d-flex justify-content-start align-items-center my-auto banner-one-link">
                        <img src={Reactİcon} className="banner-one-link-icon" />
                        <h6 className="banner-one-link-text">Etkinlikler</h6>
                      </div>
                    </Link>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-sm-6  p-3">
                    <Link to="/bulten">
                      <div className="d-flex justify-content-start align-items-center my-auto banner-one-link">
                        <img src={Papper} className="banner-one-link-icon" />
                        <h6 className="banner-one-link-text">Bülten</h6>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default BannerOne
