import React from 'react'
import './bultenCard.css'

function BultenCard({ data }) {
  return (
    <>
      {data?.map((item) => (
        <div className="col-md-12" key={item.id}>
          <div className="bulten-card">
            <img src={item.image} className="bulten-card-img" alt="..." />
            <div className="bulten-card-body">
              <p className="bulten-card-header">{item.title}</p>
              <p className="bulten-card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <div className="bulten-card-download">
                <a className="" href={item.pdf_link}>
                  Bülteni İndir
                  <i className="icon-arrow-right-line-right mt-5"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default BultenCard
