import React from "react";
import { Helmet } from "react-helmet";
import SectionTitle from "../sectionTitle/SectionTitle";
import Imagee from "../../assets/images/bg/ted2.png"

const HomeOneTwitter = () => {
    return (
        <div
        style={{
            backgroundImage: `url(${Imagee})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            paddingBottom:'10vh'
        }}>
        <div className="container pb-5"  >
            <div className="row py-5">
                    <div className="col-lg-12">
                        <SectionTitle
                            classes="text-center"
                            slogan='Sosyal Medya'
                            title="Twitter"
                        />
                    </div>
                </div>
            <div className="row justify-content-center">
                <div className="col-lg-6 text-center align-items-center my-auto">
                    <h2>Eğitim Alanında Bir Referans Noktası</h2>
                </div>
                <div
                    className="col-lg-6 text-center"
                    id="style-10"
                    style={{ height: "55vh", width: "", overflow: "scroll" , overflowX:'hidden'}}
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
                </div>
            </div>
        </div>
        </div>
    );
};

export default HomeOneTwitter;
