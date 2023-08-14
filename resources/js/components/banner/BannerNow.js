import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./bannerNow.css";
import contentImage from "../../assets/images/now-image.png";
import headerImage from "../../assets/images/nowimage.png";
import splash from "../../assets/images/splash.png";
import yellowBrush from "../../assets/images/yellow-brush.png";
import BrushYellow from "../../components/brush-anim-yellow/BrushYellow";
import axiosClient from "../../utils/axiosClient";

function BannerNow() {
    const [dataHome, setDataHome] = useState();
    const getHomePageData = async () => {
        await axiosClient
            .get("/api/home-write")
            .then((res) => setDataHome(res.data));
    };

    useEffect(() => {
        getHomePageData();
    }, []);
    return (
        <div className="">
            <div className="col-lg-12 headerImage">
                <BrushYellow title={"Şimdi Yayında"} />
            </div>
            {dataHome && console.log(dataHome)}
            {dataHome?.write != null && (
                <div
                    className=" h-100 w-10 mt-5 "
                    style={{
                        height: "450px",
                        marginTop: "550px",
                        backgroundColor: "#edeef4",
                    }}
                >
                    <div className="row d-flex justify-content-center background">
                        <div className="text col-lg-6  col-sm-12 now-text-container">
                            <p className="primary-text">
                                {dataHome?.write.title
                                    .split(" ")
                                    .slice(0, 2)
                                    .join(" ")}
                            </p>
                            <p className="secondary-text">
                                {dataHome?.write.title
                                    .split(" ")
                                    .slice(2, 5)
                                    .join(" ")}
                            </p>
                            <p className="tertiary-text">
                                {dataHome?.write.title
                                    .split(" ")
                                    .slice(4)
                                    .join(" ")}
                            </p>

                            <Link
                                className="button btn-hover-now-banner"
                                to={`/yazilar-detay/${dataHome?.write.slug}`}
                            >
                                Devamını Oku
                            </Link>
                        </div>
                        <div className="image col-lg-6 col-sm-12 image-banner-now">
                            <div
                                className={
                                    dataHome?.write.image2 === null
                                        ? "banner-now-right-container2"
                                        : "banner-now-right-container"
                                }
                            >
                                <div className="banner-now-image">
                                    <img
                                        className="banner-now-first-image"
                                        src={dataHome?.write.image}
                                    />
                                    {dataHome?.write.image2 != null && (
                                        <img
                                            className="banner-now-second-image"
                                            src={dataHome?.write.image2}
                                        />
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {dataHome?.publication != null && (
                <div>
                    <div
                        className=" h-100 w-10 mt-5 "
                        style={{
                            height: "450px",
                            marginTop: "550px",
                            backgroundColor: "#edeef4",
                        }}
                    >
                        <div className="row d-flex justify-content-center background">
                            <div className="text col-lg-6  col-sm-12 now-text-container">
                                <p className="primary-text">
                                    {dataHome?.publication.title
                                        .split(" ")
                                        .slice(0, 2)
                                        .join(" ")}
                                </p>
                                <p className="secondary-text">
                                    {dataHome?.publication.title
                                        .split(" ")
                                        .slice(2, 5)
                                        .join(" ")}
                                </p>
                                <p className="tertiary-text">
                                    {dataHome?.publication.title
                                        .split(" ")
                                        .slice(4)
                                        .join(" ")}
                                </p>
                                <Link
                                    className="button btn-hover-now-banner"
                                    to={`/yayinlar-detay/${dataHome?.publication.slug}`}
                                >
                                    Devamını Oku
                                </Link>
                            </div>
                            <div className="image col-lg-6 col-sm-12 image-banner-now">
                                <div className="banner-now-right-container2">
                                    <div className="banner-now-image">
                                        <img
                                            className="banner-now-first-image"
                                            src={dataHome?.publication.image}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {dataHome?.event != null && (
                <div>
                    <div
                        className=" h-100 w-10 mt-5 "
                        style={{
                            height: "450px",
                            marginTop: "550px",
                            backgroundColor: "#edeef4",
                        }}
                    >
                        <div className="row d-flex justify-content-center background">
                            <div className="text col-lg-6  col-sm-12 now-text-container">
                                <p className="primary-text">
                                    {dataHome?.event.title
                                        .split(" ")
                                        .slice(0, 2)
                                        .join(" ")}
                                </p>
                                <p className="secondary-text">
                                    {dataHome?.event.title
                                        .split(" ")
                                        .slice(2, 5)
                                        .join(" ")}
                                </p>
                                <p className="tertiary-text">
                                    {dataHome?.event.title
                                        .split(" ")
                                        .slice(4)
                                        .join(" ")}
                                </p>
                                <Link
                                    className="button btn-hover-now-banner"
                                    to={`/etkinlik-detay/${dataHome?.event.slug}`}
                                >
                                    Devamını Oku
                                </Link>
                            </div>
                            <div className="image col-lg-6 col-sm-12 image-banner-now">
                                <div className="banner-now-right-container2">
                                    <div className="banner-now-image">
                                        <img
                                            className="banner-now-first-image"
                                            src={dataHome?.event.image}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {dataHome?.bulten != null && (
                <div>
                    <div
                        className=" h-100 w-10 mt-5 "
                        style={{
                            height: "450px",
                            marginTop: "550px",
                            backgroundColor: "#edeef4",
                        }}
                    >
                        <div className="row d-flex justify-content-center background">
                            <div className="text col-lg-6  col-sm-12 now-text-container">
                                <p className="primary-text">
                                    {dataHome?.bulten.title
                                        .split(" ")
                                        .slice(0, 2)
                                        .join(" ")}
                                </p>
                                <p className="secondary-text">
                                    {dataHome?.bulten.title
                                        .split(" ")
                                        .slice(2, 5)
                                        .join(" ")}
                                </p>
                                <p className="tertiary-text">
                                    {dataHome?.bulten.title
                                        .split(" ")
                                        .slice(4)
                                        .join(" ")}
                                </p>
                                <a
                                    className="button btn-hover-now-banner"
                                    href={`/etkinlik-detay/${dataHome?.bulten.slug}`}
                                    target="blank"
                                >
                                    Devamını Oku
                                </a>
                            </div>
                            <div className="image col-lg-6 col-sm-12 image-banner-now">
                                <div className="banner-now-right-container2">
                                    <div className="banner-now-image">
                                        <img
                                            className="banner-now-first-image"
                                            src={dataHome?.bulten.image}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default BannerNow;
