import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './bannerNow.css'
import contentImage from '../../assets/images/now-image.png'
import headerImage from '../../assets/images/nowimage.png'
import splash from '../../assets/images/splash.png'
import yellowBrush from '../../assets/images/yellow-brush.png'
import BrushYellow from '../../components/brush-anim-yellow/BrushYellow'

function BannerNow({ data }) {
  const [homePageData, setHomePageData] = useState([])

  function homePageDataFilter(data) {
    data.map((item) => {
      if (item.homepage === 1) {
        setHomePageData([item])
      }
    })
    if (homePageData.length > 1) {
      setHomePageData(homePageData.slice(0, 1))
    }
  }

  useEffect(() => {
    homePageDataFilter(data)
  }, [data])

  return (
    <div className="">
      <div className="col-lg-12 headerImage">
        <BrushYellow title={'Şimdi Yayında'} />
      </div>

      <div
        className=" h-100 w-10 mt-5 "
        style={{
          height: '450px',
          marginTop: '550px',
          backgroundColor: '#edeef4',
        }}
      >
        {homePageData.map((item) => (
          <div
            className="row d-flex justify-content-center background"
            key={item}
          >
            <div className="text col-lg-6  col-sm-12 now-text-container">
              <p className="primary-text">
                {item.title.split(' ').slice(0, 2).join(' ')}
              </p>
              <p className="secondary-text">
                {item.title.split(' ').slice(2, 5).join(' ')}
              </p>
              <p className="tertiary-text">
                {item.title.split(' ').slice(4).join(' ')}
              </p>
              <Link
                className="button btn-hover-now-banner"
                to={`/yazilar-detay/${item.slug}`}
              >
                <a className="">Devamını Oku</a>
              </Link>
            </div>
            <div className="image col-lg-6 col-sm-12 image-banner-now">
              <div className="banner-now-right-container">
                <div className="banner-now-image">
                  <img className="banner-now-first-image" src={item.image} />
                  <img className="banner-now-second-image" src={item.image2} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BannerNow
