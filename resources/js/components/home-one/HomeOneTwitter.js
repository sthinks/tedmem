import React from "react";
import { TwitterTimelineEmbed, TwitterTweetEmbed } from 'react-twitter-embed';
import splash from "../../assets/images/splash-blue.png";
import "./css/homeOneTwitter.css";

const HomeOneTwitter = () => {
    return (
        <>
            <div className="container">
                <div className="row py-5 d-flex justify-content-center">
                    <div className="col-lg-12"> 
                         <div
                            className="d-flex justify-content-center twitter-text-header"
                        >
                            <img className="splash-brush-twiiter" src={splash} />
                            <div className="home-twitter-main-text">
                                Tedmem'den Tweetler
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <TwitterTweetEmbed
                options={{
                    cards: 'hidden',
                    hideCard: true,
                    hideThread: false,
                    height: 200,
                    maxHeight: 200,
                    maxWidth: 200,
                    width: 200
                }}
                tweetId={'1598302542454489088'}
            /> */}
            <div className="twitter">
               <div className="container">
                    <div className="row d-flex justify-content-center">
                        <div className="col-lg-4  d-flex justify-content-center">
                            <TwitterTweetEmbed
                                options={{
                                    cards: 'hidden',
                                    hideCard: true,
                                    hideThread: false,                                    
                                }}  
                                tweetId={'1598302542454489088'}
                            />
                        </div>
                        <div className="col-lg-4 d-flex justify-content-center">
                            <TwitterTweetEmbed
                                options={{
                                    cards: 'hidden',
                                    hideCard: true,
                                    hideThread: false,
                                }}
                                tweetId={'1598302542454489088'}
                            />
                        </div>
                        <div className="col-lg-4  d-flex justify-content-center">
                            <TwitterTweetEmbed
                                options={{
                                    cards: 'hidden',
                                    hideCard: true,
                                    hideThread: false,                                    
                                }}
                                tweetId={'1598302542454489088'}
                            />
                        </div>
                   </div>
               </div>
            </div>
        </>
    );
};

export default HomeOneTwitter;
