import React from "react";
import { Link, useParams } from "react-router-dom";
import Ted from "../../assets/images/bg/ted.png";
import Tedmem from "../../assets/images/bg/tedmem.png";

const AboutSeven = ( { data } ) => {
    const { slug } = useParams();
  return (
    <div className=" eduvibe-home-four-about edu-about-area about-style-2 edu-section-gap bg-color-white">
      <div className="container eduvibe-animated-shape">
        <div className="row row--50">
          <div className="col-lg-6">
            <div className="about-image-gallery">
              <div className="eduvibe-about-1-img-wrapper">
                <img className="image-1" src={Tedmem} alt="About Images" />

              </div>
              <div className="circle-image-wrapper">
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="inner mt_md--40 mt_sm--40">
              <div className="description mt--40 mt_md--20 mt_sm--20">
                {slug == 'mem-nedir' && (
                    <>
                        <h3 className="title text-center" style={{color:'#525fe1'}}>Mem Nedir ?</h3>
                        <div className="text-center" dangerouslySetInnerHTML={{ __html: data?.excerpt }}></div>
                    </>
                )}
                {slug == 'biz-kimiz' && (
                    <>
                        <h3 className="title text-center" style={{color:'#525fe1'}}>Biz Kimiz ?</h3>
                        <div className="text-center" dangerouslySetInnerHTML={{ __html: data?.about_who }}></div>
                    </>
                )}
                {slug == 'yola-cıkarken' && (
                    <>
                        <h3 className="title text-center" style={{color:'#525fe1'}}>Yola Çıkarken</h3>
                        <div className="text-center" dangerouslySetInnerHTML={{ __html: data?.about_yol }}></div>
                    </>
                )}
                {slug == 'amacımız' && (
                    <>
                        <h3 className="title text-center" style={{color:'#525fe1'}}>Amacımız</h3>
                        <div className="text-center" dangerouslySetInnerHTML={{ __html: data?.about_goal }}></div>
                    </>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="shape-dot-wrapper shape-wrapper d-xl-block d-none">
          <div className="shape-image shape-image-1">
            <img src="/images/shapes/shape-11-05.png" alt="Shape Thumb" />
          </div>
          <div className="shape-image shape-image-2">
            <img src="/images/shapes/shape-08-01.png" alt="Shape Thumb" />
          </div>
          <div className="shape-image shape-image-3">
            <img src="/images/shapes/shape-30.png" alt="Shape Thumb" />
          </div>
          <div className="shape shape-1">
            <span className="shape-dot"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSeven;
