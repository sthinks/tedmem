import React from 'react'
import { Link } from 'react-router-dom'
import ScrollAnimation from 'react-animate-on-scroll'
import SectionTitle from '../sectionTitle/SectionTitle'
import EditionCard from '../card/EditionCard'
import './css/homeOneAbout.css'
import Slider from 'react-slick'

const HomeOneAbout = ({ data }) => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  }
  return (
    <div className="">
      <div className="container eduvibe-animated-shape">
        <div className="row content">
          <Slider {...settings}>
            {data?.map((item) => (
              <div className="mt-5" key={item.id}>
                <div className="card card-event" style={{ width: '100%' }}>
                  <EditionCard data={item} />
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
