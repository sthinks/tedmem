import React from 'react'
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
import { BsSearch } from 'react-icons/bs'
import './bannerOne.css'
import { useEffect } from 'react'

const BannerOne = ({ data }) => {
  const [writesResults, setWritesResults] = React.useState([])
  const [query, setQuery] = React.useState('')

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleQuery()
    }
  }

  const handleQuery = (e) => {
    var writesResults = data?.filter((data) =>
      data.title.toLowerCase().includes(query.toLowerCase()),
    )

    setWritesResults(writesResults)

    if (e === '') {
      setWritesResults([])
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
                            onKeyDown={handleKeyDown}
                            onChange={(e) => {
                              setQuery(e.target.value)
                              handleQuery(e.target.value)
                            }}
                            type="text"
                            placeholder="Arayın..."
                          />
                          <BsSearch className="search-box-icon" />
                        </div>
                        {writesResults?.length > 0 &&
                          writesResults.slice(0, 8).map((item) => (
                            <Link
                              to={
                                item.category_id
                                  ? `/yazilar-detay/${item.slug}`
                                  : `/yayinlar-detay/${item.slug}`
                              }
                            >
                              <div className="border mb-2 input-result">
                                {item.title}
                              </div>
                            </Link>
                          ))}
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
