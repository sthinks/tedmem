import React from 'react'
import './bannerEvent.css'
import { AiOutlineClockCircle } from 'react-icons/ai'

function BannerEvent({ title, image, date, author, publish_house }) {
  const formattedDate = new Date(date)
  return (
    <div className="page-banner-event">
      <div className="page-banner-event-content-none" />
      <img src={image} className="page-banner-event-image" />
      <div className="page-banner-content">
        <div className="text-center page-banner-event-title">{title}</div>
        <div className="banner-event-date-author d-flex">
          {author ? <p>{author}</p> : <p>{publish_house}</p>}

          {date && (
            <p>
              <AiOutlineClockCircle className="page-banner-date-icon" />{' '}
              {formattedDate.toLocaleDateString('en-GB')}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default BannerEvent
