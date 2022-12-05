import React from "react";
import { Helmet } from "react-helmet";
import SectionTitle from "../sectionTitle/SectionTitle";
import Imagee from "../../assets/images/bg/ted2.png";
import socialMediaImage from "../../assets/images/twitter.png";
import { AiOutlineTwitter } from "react-icons/ai";
import { TwitterTweetEmbed } from 'react-twitter-embed';
import { Timeline } from 'react-twitter-widgets'
import "./css/homeOneTwitter.css";

const HomeOneTwitter = () => {
    return (
        <div className="twitter-content">
            <div className="container">
                <div className="row py-5 d-flex justify-content-center">
                    <div className="col-lg-12">
                        {/* <img
                            className="social-media-image"
                            src={socialMediaImage}
                        /> */}
                        
                       
                        {/* <div
                            className="d-flex justify-content-center"
                            style={{ color: "black", fontSize: "35px" }}
                        >
                            Tedmem'den Tweetler
                        </div> */}
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="d-flex justify-content-around">
                    <div className="col-lg-4 d-flex justify-content-start twitter-card">
                        <AiOutlineTwitter
                            style={{
                                color: "#61ccff",
                                fontSize: "55px",
                                marginTop: "25px",
                            }}
                        />
                        <div style={{height:"100%", width:"100%", overflow:"scroll"}}>
                            <TwitterTweetEmbed
                                tweetId={'1598302542454489088'}
                            />
                        </div>
                    </div>
                    <div className="col-lg-4 d-flex justify-content-start twitter-card">
                        <AiOutlineTwitter
                            style={{
                                color: "#61ccff",
                                fontSize: "55px",
                                marginTop: "25px",
                            }}
                        />
                        <div className="">
                            <TwitterTweetEmbed
                                tweetId={'1595672451731562496'}
                            />
                            
                        </div>
                    </div>

                    <div className="col-lg-4 d-flex justify-content-start twitter-card">
                        <AiOutlineTwitter
                            style={{
                                color: "#61ccff",
                                fontSize: "55px",
                                marginTop: "25px",
                            }}
                        />
                        <div className="">
                            <TwitterTweetEmbed
                                tweetId={'1590344144903294976'}
                            />
                        </div>
                    </div>

                    {/* <div
                        className="col-lg-6 text-center"
                        id="style-10"
                        style={{
                            height: "55vh",
                            width: "",
                            overflow: "scroll",
                            overflowX: "hidden",
                        }}
                    >
                        <a
                            class="twitter-timeline"
                            href="https://twitter.com/tedmem?ref_src=twsrc%5Etfw"
                        >
                            Tweets by tedmem
                        </a>
                        <Helmet>
                            <script
                                src="https://platform.twitter.com/widgets.js"
                                charset="utf-8"
                            ></script>
                        </Helmet>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default HomeOneTwitter;
