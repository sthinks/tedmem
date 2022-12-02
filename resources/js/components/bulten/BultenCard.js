import React from "react";
import "./bultenCard.css";

function BultenCard({ data }) {
    return (
        <div>
          
           
             {data?.map((item) => (
                <div className="card d-flex flex-row mt-5 border-0 bulten-card col-xl-12 col-lg-12 col-sm-12">
                    <div className="card-img-left bulten-card-image-container">
                        <img className="bulten-card-image" src={item.image} />
                    </div>
                    <div className="card-body col-lg-12 ml-5 p-4">
                        <div className="d-flex justify-content-start bulten-card-title">
                            {item.title}
                        </div>
                        <div className="bulten-card-body">
                            <p className="d-flex justify-content-start">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                of the printing and typesetting industry. Lorem
                                Ipsum has been the industry's standard...
                            </p>
                        </div>
                        <div className="d-flex justify-content-end w-full p-0 bulten-card-download">
                            <a href={item.pdf_link}>
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
