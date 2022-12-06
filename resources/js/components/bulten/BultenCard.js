import React from "react";
import "./bultenCard.css";

function BultenCard({ data }) {
    return (
        <>
        
          
           
             {data?.map((item) => (
                <div className="col-md-12">
                    <div className="bulten-card">
                        <img src={item.image} className="bulten-card-img" alt="..." />
                        <div className="bulten-card-body">
                            <p className="bulten-card-header">{item.title}</p>
                            <p className="bulten-card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                             <div className="bulten-card-download">
                                <a className="" href={item.pdf_link}>Bülteni İndir<i className="icon-arrow-right-line-right mt-5"></i></a>
                            </div>
                        </div>
                    </div> 
                 </div>
                // <div className="card mt-4" style={{ width: 'auto' }}>
                //      <div className="row no-gutters">
                //          <div className="col-xl-4 col-lg-5 col-md-6 col-sm-12  bulten-card-image-container">
                //              <img className="bulten-card-image" src={item.image} alt="Suresh Dasari Card" />
                //          </div>
                //          <div className="col-xl-8 col-lg-6 col-md-6 col-sm-12">
                //              <div className="card-body">
                //                  <h5 className="bulten-card-title">{item.title}</h5>
                //                  <p className="card-text">Suresh Dasari is a founder and technical lead developer in tutlane.</p>
                //                  <div className="d-flex justify-content-end bulten-card-download">
                //                     <a href={item.pdf_link}>
                //                         Bülteni İndir{" "}
                //                         <i className="icon-arrow-right-line-right mt-5"></i>
                //                     </a>
                //                 </div>
                //              </div>
                //          </div>
                //      </div>
                //  </div>
                // <div className="card d-flex flex-row mt-5 border-0 bulten-card col-xl-12 col-lg-12 col-sm-12" key={item.id}>
                //     <div className="card-img-left bulten-card-image-container">
                //         <img className="bulten-card-image" src={item.image} />
                //     </div>
                //     <div className="card-body col-lg-12 ml-5 p-4">
                //         <div className="d-flex justify-content-start bulten-card-title">
                //             {item.title}
                //         </div>
                //         <div className="bulten-card-body">
                //             <p className="d-flex justify-content-start">
                //                 Lorem Ipsum is simply dummy text of the printing
                //                 and typesetting industry. Lorem Ipsum has been
                //                 of the printing and typesetting industry. Lorem
                //                 Ipsum has been the industry's standard...
                //             </p>
                //         </div>
                //         <div className="d-flex justify-content-end w-full p-0 bulten-card-download">
                //             <a href={item.pdf_link}>
                //                 Bülteni İndir{" "}
                //                 <i className="icon-arrow-right-line-right mt-5"></i>
                //             </a>
                //         </div>
                //     </div>
                // </div>
            ))} 
        </>
    );
}

export default BultenCard;
