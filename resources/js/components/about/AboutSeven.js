import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import MemNedir from '../../assets//images/corporate/mem2.jpg'
import BizKimiz from '../../assets/images/corporate/biz-kimiz.jpg'
import Amac from '../../assets/images/corporate/amacımız.jpg'
import Yola from '../../assets/images/ontheroad.png'
import './aboutSeven.css'

const AboutSeven = ({ data }) => {
  const [filter, setFilter] = useState()
  const [allData, setAllData] = useState([])

  const corporateList = [
    {
      title: 'Amacımız',
      slug: 'about_goal',
      image: Amac,
      content: [data.about_goal],
    },
    {
      title: 'Biz Kimiz',
      slug: 'about_who',
      image: BizKimiz,
      content: [data.about_who],
    },
    {
      title: 'Mem Nedir ?',
      slug: 'excerpt',
      image: MemNedir,
      content: [data.excerpt],
    },
    {
      title: 'Yola Çıkarken',
      slug: 'about_yol',
      image: Yola,
      content: [data.about_yol],
    },
  ]

  const filterHandler = (filterItem) => {
    // const filteredItem = corporateList.filter((item) => {
    //   return item.slug === filterItem
    // })
    // setFilter(filteredItem[0])

    for (let i = 0; i < corporateList.length; i++) {
      if (corporateList[i].slug === filterItem) {
        const item = [
          {
            content: corporateList[i].content,
            title: corporateList[i].title,
          },
        ]
        setFilter(item)
      }
    }
  }

  useEffect(() => {
    filterHandler('about_goal')
  }, [data])

  return (
    <div className=" eduvibe-home-four-about edu-about-area about-style-2 edu-section-gap bg-color-white mt-5">
      <div className="container eduvibe-animated-shape">
        <div className="row d-flex justify-content-between">
          <div className="col-lg-5">
            <div className="row" style={{ marginTop: '50px' }}>
              {corporateList.map((item) => (
                <div
                  className="col-lg-6 col-sm-12"
                  href="content"
                  key={item.title}
                >
                  <a href={window.screen.width <= 991 ? '#content' : '#a'}>
                    <div
                      className="corporate-card"
                      onClick={() => filterHandler(item.slug)}
                      style={{ backgroundImage: `url(${item.image})` }}
                    >
                      <div className="coprote-card-back" />
                      <div className="corporate-card-body">
                        <p className="corporate-card-text">{item.title}</p>
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
          <div
            className="col-lg-5 coprate-right-textt"
            style={{ height: '100%' }}
            id="content"
          >
            <div className="inner mt_md--40 mt_sm--40">
              <div className="description mt--40 mt_md--20 mt_sm--20" id="biz">
                {filter && (
                  <>
                    <div className="corporate-header-title">
                      {filter[0].title}
                    </div>
                    <div
                      className="corporate-content-text"
                      dangerouslySetInnerHTML={{ __html: filter[0].content }}
                    />
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutSeven
