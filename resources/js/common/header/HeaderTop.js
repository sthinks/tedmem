import React from "react";
import { BsTwitter } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

const HeaderTop = () => {
    return (
        <div className="container">
            <div
                className="row align-items-center topheader"
                style={{ backgroundColor: "#878786"}}
            >
                <div className="container">
                    <div className="d-flex justify-content-sm-center justify-content-md-between pb-1">
                        <div className="d-flex">

                        <a href="https://twitter.com/tedmem" className="mr-4 text-white" target="_blank">
                            <BsTwitter />
                        </a>
                        <a href="https://www.facebook.com/tedmem" className="mr-4 text-white" target="_blank">
                            <BsFacebook />
                        </a>
                        <a href="https://www.linkedin.com/company/tedmem1/" className="mr-4 text-white" target="_blank">
                            <BsLinkedin />
                        </a>
                        <a href="https://www.instagram.com/tedmem" className="mr-4 text-white" target="_blank">
                            <BsInstagram />
                        </a>
                        </div>
                        <div className="d-flex align-items-center">

                          <div className="text-white mr-3"><AiOutlineMail  /> <small>tedmem@tedmem.com</small></div>
                          <div className="text-white"><BsFillTelephoneFill/> <small>(0312) 939 50 20</small></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderTop;
