import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { FaAngleRight } from 'react-icons/fa'
import { BsFillArrowRightCircleFill } from 'react-icons/bs'
import './couseTypeTwo.css'

const CourseTwo = ({ classes, item }) => {
  return (
    <>
      <div className="col-md-4 col-sm-12 mb-3">
        <Link to={`/yazilar-detay/${item.slug}`}>
          <div
            className={`edu-card card-type-2 radius-small ${
              classes ? classes : ''
            }`}
            style={{ height: '90%', width: '90%' }}
          >
            <div className="inner">
              <div className="thumbnail">
                <Link to={`/yazilar-detay/${item.slug}`}>
                  <img
                    className="w-100"
                    style={{ height: '30vh', objectFit: 'cover' }}
                    src={item.image}
                    alt="Course Thumb"
                  />
                </Link>
              </div>
              <div className="details">
                <div className="center">
                  <Link to={`/yazilar-detay/${item.slug}`}>
                    <h6 className="text-white course-two-title">
                      {item.title}
                    </h6>
                  </Link>
                  <Link to={`/yazilar-detay/${item.slug}`}>
                    <span style={{ color: 'white' }}>
                      Devamını oku <BsFillArrowRightCircleFill />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  )
}
export default CourseTwo
