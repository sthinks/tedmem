import React from 'react'
import './bultenCard.css'
import { BsArrowRight } from 'react-icons/bs'
function BultenCard({ data }) {
  return (
    <>
      {data?.map((item) => (
        <div className="col-md-12" key={item.id}>
          <div className="row bulten-card">
            <div className="col-lg-5">
              <img
                src={item.image}
                className="bulten-card-img"
                alt="..."
                style={{ width: '100%' }}
              />
            </div>
            <div className="col-lg-7 bulten-card-body">
              <p className="bulten-card-header">{item.title}</p>
              <p
                className="bulten-card-text"
                dangerouslySetInnerHTML={{ __html: item.body }}
              />
              <div className="bulten-card-download">
                <a className="" href={item.pdf_link}>
                  Bülteni İndir
                  <BsArrowRight
                    style={{
                      marginLeft: '5px',
                      marginRight: '5px',
                      fontSize: '20px',
                    }}
                  />
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
