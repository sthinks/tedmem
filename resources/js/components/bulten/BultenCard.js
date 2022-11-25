import React from "react";
import "./bultenCard.css";

function BultenCard({ data }) {
    return (
        <div>
            {data?.map((item) => (
                <div className="card d-flex flex-row mt-5 border-0 bulten-card">
                    <img className="bulten-card-image" src={item.image} />
                    <div className="card-body ml-5 p-4">
                        <div className="d-flex justify-content-start bulten-card-title">
                            {item.title}
                        </div>
                        <div className="">
                            <p className="d-flex justify-content-start">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                of the printing and typesetting industry. Lorem
                                Ipsum has been the industry's standard...
                            </p>
                        </div>
                        <div className="d-flex justify-content-end w-full m-0 p-0 bulten-card-download">
                            <a href={item.pdf_link} style={{ margin: "10px" }}>
                                Bülteni İndir{" "}
                                <i className="icon-arrow-right-line-right mt-5"></i>
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default BultenCard;
