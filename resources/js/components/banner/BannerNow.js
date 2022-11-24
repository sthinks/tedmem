import React from "react";
import "./bannerNow.css";
import contentImage from "../../assets/images/now-image.png";
import headerImage from "../../assets/images/nowimage.png";

function BannerNow() {
    return (
        <div>
            <div className="col-lg-12 headerImage">
                <img
                    style={{ width: "350px", marginTop: "150px" }}
                    src={headerImage}
                />
            </div>

            <div
                className="container-fluid h-100 w-100 mt-5 "
                style={{
                    height: "450px",
                    marginTop: "550px",
                    backgroundColor: "#edeef4",
                }}
            >
                <div className="row d-flex justify-content-center background">
                    <div className="text col-lg-6 ">
                        <p className="primary-text">İlk Bakış</p>
                        <p className="secondary-text">YKS 2022'ye</p>
                        <p className="tertiary-text">
                            Yükseköğretim Kurumları Sınavının (2022 YKS) <br />{" "}
                            sonuçları açıklandı.
                        </p>
                        <button className="button">Devamını Oku</button>
                    </div>
                    <div className="image col-lg-6">
                        <img src={contentImage} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BannerNow;
