import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import "./aboutSeven.css";

const AboutSeven = ({ data }) => {
    const [filter, setFilter] = useState();
    const [allData, setAllData] = useState([]);

    const corporateList = [
        {
            title: [data.first_title],
            slug: "about_goal",
            image: [data.goal_image],
            content: [data.goal],
        },
        {
            title: [data.second_title],
            slug: "about_who",
            image: [data.who_image],
            content: [data.who],
        },
        {
            title: [data.thirt_title],
            slug: "excerpt",
            image: [data.mem_image],
            content: [data.mem],
        },
        {
            title: [data.fourth],
            slug: "about_yol",
            image: [data.road_image],
            content: [data.road],
        },
    ];

    const filterHandler = (filterItem) => {
        for (let i = 0; i < corporateList.length; i++) {
            if (corporateList[i].slug === filterItem) {
                const item = [
                    {
                        content: corporateList[i].content,
                        title: corporateList[i].title,
                    },
                ];
                setFilter(item);
            }
        }
    };

    useEffect(() => {
        filterHandler("about_goal");
    }, [data]);

    return (
        <div className=" eduvibe-home-four-about edu-about-area about-style-2 edu-section-gap bg-color-white mt-5">
            <div className="container eduvibe-animated-shape">
                <div className="row d-flex justify-content-between">
                    <div className="col-lg-5">
                        <div className="row" style={{ marginTop: "50px" }}>
                            {corporateList.map((item) => (
                                <div
                                    className="col-lg-6 col-sm-12"
                                    href="content"
                                    key={item.title}
                                >
                                    <a
                                        href={
                                            window.screen.width <= 991
                                                ? "#content"
                                                : "#a"
                                        }
                                    >
                                        <div
                                            className="corporate-card"
                                            onClick={() =>
                                                filterHandler(item.slug)
                                            }
                                            style={{
                                                backgroundImage: `url(${item.image})`,
                                            }}
                                        >
                                            <div className="coprote-card-back" />
                                            <div className="corporate-card-body">
                                                <p className="corporate-card-text">
                                                    {item.title}
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div
                        className="col-lg-5 coprate-right-textt"
                        style={{ height: "100%" }}
                        id="content"
                    >
                        <div className="inner mt_md--40 mt_sm--40">
                            <div
                                className="description mt--40 mt_md--20 mt_sm--20"
                                id="biz"
                            >
                                {filter && (
                                    <>
                                        <div className="corporate-header-title">
                                            {filter[0].title}
                                        </div>
                                        <div
                                            className="corporate-content-text"
                                            dangerouslySetInnerHTML={{
                                                __html: filter[0].content,
                                            }}
                                        />
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSeven;
