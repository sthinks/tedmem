import React from "react";
import "./bultenCard.css";
import { BsArrowRight } from "react-icons/bs";
function BultenCard({ data }) {
    return (
        <>
            <div className="row bulten-card">
                <div className="col-lg-5 bulten-card-head">
                    <img
                        src={data.image}
                        className="bulten-card-img"
                        alt="..."
                        style={{ width: "100%" }}
                    />
                </div>
                <div className="col-lg-7 bulten-card-body">
                    <p className="bulten-card-header">{data.title}</p>
                    <p
                        className="bulten-card-text"
                        dangerouslySetInnerHTML={{ __html: data.body }}
                    />
                    <div className="bulten-card-download">
                        <a className="" href={data.pdf_link} target="_blank">
                            Bülteni İndir
                            <BsArrowRight
                                style={{
                                    marginLeft: "5px",
                                    marginRight: "5px",
                                    fontSize: "20px",
                                }}
                            />
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BultenCard;
