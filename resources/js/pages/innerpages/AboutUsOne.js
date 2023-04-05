import React, { useEffect, useState } from 'react'
import SEO from '../../common/SEO'
import HeaderOne from '../../common/header/HeaderOne'
import AboutSeven from '../../components/about/AboutSeven'
import AboutUsOneService from '../../components/about-us-one/AboutUsOneService'
import AboutUsOneTeam from '../../components/about-us-one/AboutUsOneTeam'
import FooterOne from '../../common/footer/FooterOne'
import axiosClient from '../../utils/axiosClient'
import Loading from '../../components/loading/Loading'
import PageBanner from '../../components/banner/PageBanner'
import banner from '../../assets/images/corporate/2.jpg'
import logo from '../../assets/images/bg/tedmem.png'

const AboutUsOne = () => {
  const [content, setContent] = React.useState(null)
  const [kadro, setKadro] = React.useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axiosClient
      .get(`/api/kurumsal`)
      .then((res) => setContent(res.data[0]))
      .then(() => setLoading(false))
  }, [])

  useEffect(() => {
    axiosClient.get(`/api/kadromuz`).then((res) => setKadro(res.data))
  }, [])

  return loading ? (
    <Loading />
  ) : (
    <>
      <SEO title="TEDMEM |Kurumsal" />

      <PageBanner logo={logo} image={banner} />

      <AboutSeven data={content} />

      <AboutUsOneService data={content} />

      <AboutUsOneTeam data={kadro} />
    </>
  )
}

export default AboutUsOne
