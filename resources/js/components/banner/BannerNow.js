import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './bannerNow.css'
import contentImage from '../../assets/images/now-image.png'
import headerImage from '../../assets/images/nowimage.png'
import splash from '../../assets/images/splash.png'
import yellowBrush from '../../assets/images/yellow-brush.png'
import BrushYellow from '../../components/brush-anim-yellow/BrushYellow'
import axiosClient from '../../utils/axiosClient'

function BannerNow() {
  const [dataHome, setDataHome] = useState()
  const getHomePageData = async () => {
    await axiosClient
      .get('/api/home-write')
      .then((res) => setDataHome(res.data))
  }

  useEffect(() => {
    getHomePageData()
  }, [])
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
        <div className="row d-flex justify-content-center background">
          <div className="text col-lg-6  col-sm-12 now-text-container">
            <p className="primary-text">
              {dataHome?.title.split(' ').slice(0, 2).join(' ')}
            </p>
            <p className="secondary-text">
              {dataHome?.title.split(' ').slice(2, 5).join(' ')}
            </p>
            <p className="tertiary-text">
              {dataHome?.title.split(' ').slice(4).join(' ')}
            </p>
            <Link
              className="button btn-hover-now-banner"
              to={`/yazilar-detay/${dataHome?.slug}`}
            >
              Devamını Oku
            </Link>
          </div>
          <div className="image col-lg-6 col-sm-12 image-banner-now">
            <div className="banner-now-right-container">
              <div className="banner-now-image">
                <img className="banner-now-first-image" src={dataHome?.image} />
                <img
                  className="banner-now-second-image"
                  src={dataHome?.image2}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BannerNow
