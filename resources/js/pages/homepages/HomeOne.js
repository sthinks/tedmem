import React, { useEffect } from "react";
import SEO from "../../common/SEO";
import HeaderTwo from "../../common/header/HeaderTwo";
import BannerOne from "../../components/banner/BannerOne";
import HomeOneAbout from "../../components/home-one/HomeOneAbout";
import HomeOneCategory from "../../components/home-one/HomeOneCategory";
import HomeOneBlog from "../../components/home-one/HomeOneBlog";
import FooterOne from "../../common/footer/FooterOne";
import HeaderOne from "../../common/header/HeaderOne";
import axiosClient from "../../utils/axiosClient";
import NewsLetterTwo from "../../components/home-one/NewsLetterTwo";
import HeaderTop from "../../common/header/HeaderTop";
import HomeOneTwitter from "../../components/home-one/HomeOneTwitter";

const HomeOne = () => {
    const [bulten, setBulten] = React.useState([]);

    const [writes, setWrites] = React.useState([]);
    const [publics, setPublics] = React.useState([]);

    const getData = async () => {
        await axiosClient.get(`/api/latest-bulten`).then((res) => setBulten(res.data));
        await axiosClient
            .get(`/api/latest-writes`)
            .then((res) => setWrites(res.data));
        await axiosClient
            .get(`/api/latest-publics`)
            .then((res) => setPublics(res.data));
    };

    useEffect(() => {
        getData();
    }, []);

    const mixed = [...writes, ...publics].sort((a,b) => b.created_at - a.created_at)
    console.log(mixed)

    return (
        <>
            <SEO title="TEDMEM | Ortak Paydamız Eğitim" />

            <HeaderTop/>

            <HeaderOne styles="header-transparent header-style-2" />

            <BannerOne  data={mixed} />

            <HomeOneAbout data={mixed} />

            <HomeOneCategory data={bulten} />

            <HomeOneTwitter/>

            <NewsLetterTwo/>

            <FooterOne />
        </>
    );
};

export default HomeOne;
