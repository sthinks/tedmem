import React from 'react'
import { FaFilePdf } from 'react-icons/fa'

const Modal = ({ data }) => {
  return (
    <div
      className="modal fade "
      data-backdrop="true"
      id="exampleModalCenter"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div
        className="modal-dialog modal-dialog-centered modal-lg"
        role="document"
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalCenterTitle">
              {data[0]?.title}
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span
                className="badge"
                style={{
                  backgroundColor: 'orange',
                  color: 'black',
                  fontSize: '20px',
                }}
                aria-hidden="true"
              >
                &times;
              </span>
            </button>
          </div>
          <div className="modal-body">
            <div className="container-fluid">
              <div className="row ">
                <div className="col-md-4">
                  <img
                    style={{ width: '100%', objectFit: 'contain' }}
                    src={data[0]?.image}
                  ></img>
                  <div className="eduvibe-widget eduvibe-widget-details mt--10 text-center">
                    <h6 className="text-center">PDF</h6>
                    {data[0]?.pdf_link[0] && (
                      <a href={data[0]?.pdf_link[0]} target="_blank">
                        <div className="d-flex pt-1">
                          <FaFilePdf
                            style={{
                              fontSize: '25px',
                              color: 'red',
                            }}
                          />
                          {'     '}
                          {data[0]?.title.toLowerCase()}
                        </div>
                      </a>
                    )}
                  </div>
                </div>
                <div className="col-md-8 text-center">
                  <div
                    dangerouslySetInnerHTML={{ __html: data[0]?.body }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
