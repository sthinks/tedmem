import React from "react";
import { Link } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";
import SectionTitle from "../sectionTitle/SectionTitle";
import EditionCard from "../card/EditionCard";
import "./css/homeOneAbout.css";

const HomeOneAbout = ({ data }) => {
    return (
        <div className="">
            <div className="container eduvibe-animated-shape">
                <div className="row content">
                    {data?.map((item) => (
                        <div className="col-lg-3 col-sm-12 mt-5" key={item.id}>
                            <div
                                className="card card-event"
                                style={{ width: "100%" }}
                            >
                                <EditionCard data={item} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HomeOneAbout;
