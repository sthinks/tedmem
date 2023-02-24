import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { FaAngleRight } from 'react-icons/fa'
import { BsFillArrowRightCircleFill } from 'react-icons/bs'
import './couseTypeTwo.css'

import { AiOutlineClockCircle } from 'react-icons/ai'
const CourseTwo = ({ category, data }) => {
  const formattedDate = new Date(data?.created_at)

  const catergoryHandler = (cat_id) => {
    if (category) {
      const result = category.filter((item) => item.id == cat_id)
      return result[0].name
    }
  }
  return (
    <>
      <Link
        to={
          data?.publish_house
            ? `/yayinlar-detay/${data.slug}`
            : `/yazilar-detay/${data.slug}`
        }
      >
        <div className="card">
          <img
            className="card-event-img"
            src={data?.image}
            alt="Card image cap"
          />
          <div className="card-body">
            {data.category_info ? (
              <div className="edition-badge">
                <span className="edition-badge-icon">
                  {data?.category_info.name}
                </span>
              </div>
            ) : (
              <div className="edition-badge">
                <span className="edition-badge-icon">
                  {catergoryHandler(data?.category_id)}
                </span>
              </div>
            )}

            <div className="card-date">
              <h5 className="card-title">{data.title}</h5>
              <div className="card-date-content">
                <AiOutlineClockCircle className="card-date-icon" />
                {formattedDate.toLocaleDateString('en-GB')}
              </div>
            </div>
            <p className="card-read-more">
              {data?.publish_house ? (
                <Link to={`/yayinlar-detay/${data.slug}`}>Devamını Oku</Link>
              ) : (
                <Link to={`/yazilar-detay/${data.slug}`}>Devamını Oku</Link>
              )}
            </p>
          </div>
        </div>
      </Link>
    </>
  )
}
export default CourseTwo
