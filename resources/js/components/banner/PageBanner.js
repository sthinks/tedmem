import React from "react";
import "./pageBanner.css";

function PageBanner({ title, image, color,id}) {

    return (
        <div className="page-banner" id={id}>
            <div className={!color ? "page-banner-content-white" : "page-banner-content-none"}

            />
            <img src={image} className="page-banner-image"/>
            <h1
                className="text-center page-banner-title"
                dangerouslySetInnerHTML={{ __html: title }}
            />
        </div>
    );
}

export default PageBanner;
