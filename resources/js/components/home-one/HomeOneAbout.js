import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";
import SectionTitle from "../sectionTitle/SectionTitle";
import EditionCard from "../card/EditionCard";
import axiosClient from "../../utils/axiosClient";
import "./css/homeOneAbout.css";
import Slider from "react-slick";

const HomeOneAbout = ({ data }) => {
    const [drag, setDrag] = useState();
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: window.screen.width > 768 ? 4 : 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
    };

    return (
        <div className={window.screen.width < 768 ? "px-3" : ""}>
            <div className="container eduvibe-animated-shape">
                <div className="row content">
                    <Slider {...settings}>
                        {data?.map((item) => (
                            <div className="mt-5" key={item.id}>
                                <div className="" style={{ width: "100%" }}>
                                    <EditionCard data={item} />
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default HomeOneAbout;
