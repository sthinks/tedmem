import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ScrollAnimation from 'react-animate-on-scroll'
import SectionTitle from '../sectionTitle/SectionTitle'
import EditionCard from '../card/EditionCard'
import axiosClient from '../../utils/axiosClient'
import './css/homeOneAbout.css'
import Slider from 'react-slick'

const HomeOneAbout = ({ data }) => {
  const [publicCategory, setPublicCategory] = useState()
  useEffect(() => {
    console.log(window.screen.width)
  }, [window.screen.width])
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: window.screen.width > 768 ? 4 : 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  }
  const getPublicCategory = async () => {
    await axiosClient
      .get('/api/public-category')
      .then((res) => setPublicCategory(res.data))
  }
  useEffect(() => {
    getPublicCategory()
  }, [])
  return (
    <div className={window.screen.width < 768 ? 'px-3' : ''}>
      <div className="container eduvibe-animated-shape">
        <div className="row content">
          <Slider {...settings}>
            {data?.map((item) => (
              <div className="mt-5" key={item.id}>
                <div className="card" style={{ width: '100%' }}>
                  <EditionCard data={item} publicCategory={publicCategory} />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default HomeOneAbout
