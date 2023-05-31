import React from "react";
import { TwitterTimelineEmbed, TwitterTweetEmbed } from "react-twitter-embed";
import splash from "../../assets/images/splash-blue.png";
import BrushAnimation from "../../components/brush-anim/BrushAnimation";
import "./css/homeOneTwitter.css";

const HomeOneTwitter = ({ data }) => {
    return (
        <>
            <div className="container">
                <div className="row py-5 d-flex justify-content-center">
                    <div className="col-lg-12">
                        <div className="d-flex justify-content-center twitter-text-header">
                            <BrushAnimation title={"Tedmem'den Tweetler"} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="twitter">
                <div className="container-for-twitter">
                    <div className="row">
                        {data?.map((item, i) => (
                            <div className="col-lg-4 p-2" key={i}>
                                <TwitterTweetEmbed
                                    options={{
                                        cards: "hidden",
                                        hideCard: true,
                                        hideThread: false,
                                    }}
                                    tweetId={item.tweet_id}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomeOneTwitter;
