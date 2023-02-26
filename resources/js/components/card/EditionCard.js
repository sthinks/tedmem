import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './editionCard.css'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { NavItem } from 'react-bootstrap'

function EditionCard({ data }) {
  const formattedDate = new Date(data?.created_at)

  return (
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
          <div className="edition-badge">
            <span className="edition-badge-icon">
              {data?.category_info.name}
            </span>
          </div>

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
  )
}

export default EditionCard
