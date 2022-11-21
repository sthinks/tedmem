import React, { useEffect } from 'react';
import SEO from '../../common/SEO';
import HeaderOne from '../../common/header/HeaderOne';
import BreadcrumbOne from '../../common/breadcrumb/BreadcrumbOne';
import AboutSeven from '../../components/about/AboutSeven';
import AboutUsOneService from '../../components/about-us-one/AboutUsOneService';
import AboutUsOneTeam from '../../components/about-us-one/AboutUsOneTeam';
import FooterOne from '../../common/footer/FooterOne';
import axiosClient from '../../utils/axiosClient';

const AboutUsOne = () => {
    const [content, setContent] = React.useState(null)
    const [kadro, setKadro] = React.useState(null)

    const getEvents = async () =>{
        await axiosClient.get(`/api/kurumsal`).then(res => setContent(res.data[0]))
        await axiosClient.get(`/api/kadromuz`).then(res => setKadro(res.data))
    }

    useEffect(() => {
        getEvents()
    }, [])

    return (
        <>
            <SEO title="TEDMEM |Kurumsal" />

            <HeaderOne />

            <BreadcrumbOne
                title="Kurumsal"
                rootUrl="/"
                parentUrl="Anasayfa"
                currentUrl="Kurumsal"
            />

            <AboutSeven data={content}/>

            <AboutUsOneService data={content}/>

            <AboutUsOneTeam data={kadro} />

            <FooterOne />
        </>
    )
}

export default AboutUsOne;
