import React, { useEffect, useState } from "react";
import SEO from "../../common/SEO";
import HeaderTwo from "../../common/header/HeaderTwo";
import BannerOne from "../../components/banner/BannerOne";
import BannerNow from "../../components/banner/BannerNow";
import HomeOneAbout from "../../components/home-one/HomeOneAbout";
import HomeOneCategory from "../../components/home-one/HomeOneCategory";
import HomeOneBlog from "../../components/home-one/HomeOneBlog";
import FooterOne from "../../common/footer/FooterOne";
import HeaderOne from "../../common/header/HeaderOne";
import axiosClient from "../../utils/axiosClient";
import NewsLetterTwo from "../../components/home-one/NewsLetterTwo";
import HeaderTop from "../../common/header/HeaderTop";
import HomeOneTwitter from "../../components/home-one/HomeOneTwitter";
import { write } from "@popperjs/core";

const HomeOne = () => {
    const [bulten, setBulten] = useState([]);
    const [writes, setWrites] = useState([]);
    const [publics, setPublics] = useState([]);
    const [tweet, setTweet] = useState([]);
    const getData = async () => {
        await axiosClient
            .get(`/api/latest-bulten`)
            .then((res) => setBulten(res.data));
        await axiosClient
            .get(`/api/latest-writes`)
            .then((res) => setWrites(res.data));
        await axiosClient
            .get(`/api/latest-publics`)
            .then((res) => setPublics(res.data));
        await axiosClient
            .get("/api/getTweet")
            .then((res) => setTweet(res.data));
    };

    useEffect(() => {
        getData();
    }, []);

    const mixed = [...publics, ...writes].sort(
        (a, b) => b.created_at - a.created_at
    );

    return (
        <>
            <SEO title="TEDMEM | Ortak Paydamız Eğitim" />

            {/* <HeaderTop /> */}

            <BannerOne />

            <BannerNow />

            <HomeOneAbout data={mixed} />

            <HomeOneTwitter data={tweet} />

            <HomeOneCategory data={bulten} />

            {/* <NewsLetterTwo /> */}
        </>
    );
};

export default HomeOne;
