import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import SectionTitle from "../sectionTitle/SectionTitle";

const FeatureOne = ({ wrapperClass, data }) => {
    return (
        <div className={`row ${wrapperClass || "g-5 mt--20"}`}>
            <div className="col-sm-12 col-md-12">
                <ScrollAnimation
                    animateIn="fadeInUp"
                    animateOut="fadeInOut"
                    animateOnce={true}
                >
                    <div
                        dangerouslySetInnerHTML={{ __html: data?.body }}
                    ></div>
                </ScrollAnimation>
            </div>
        </div>
    );
};

export default FeatureOne;
