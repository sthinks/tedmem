import React, { useEffect, useState } from 'react'
import SEO from '../../common/SEO'
import Layout from '../../common/Layout'
import CourseTypeTwo from '../../components/course/CourseTypeTwo'
import axiosClient from '../../utils/axiosClient'
import { useParams, Link } from 'react-router-dom'
import banner from '../../assets/images/writes-page-banner.jpg'
import PageBanner from '../../components/banner/PageBanner'
import PaginationOne from '../../components/pagination/Pagination'
import { BsNewspaper } from 'react-icons/bs'
import {
  FaSchool,
  FaVirus,
  FaScroll,
  FaMicrophone,
  FaHandRock,
  FaHandsHelping,
  FaGlasses,
} from 'react-icons/fa'
import './courseTwo.css'

const slugify = function (text) {
  var trMap = {
    çÇ: 'c',
    ğĞ: 'g',
    şŞ: 's',
    üÜ: 'u',
    ıİ: 'i',
    öÖ: 'o',
  }
  for (var key in trMap) {
    text = text.replace(new RegExp('[' + key + ']', 'g'), trMap[key])
  }
  return text
    .replace(/[^-a-zA-Z0-9\s]+/gi, '') // remove non-alphanumeric chars
    .replace(/\s/gi, '-') // convert spaces to dashes
    .replace(/[-]+/gi, '-') // trim repeated dashes
    .toLowerCase()
}

const CoruseTwo = () => {
  const [allData, setAllData] = useState(null)
  const [content, setContent] = useState(null)
  const [sekme, setSekme] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [postPerPage, setPostPage] = useState(9)

  const categoryList = [
    {
      name: 'Eğitim',
      slug: '/yazilar/egitim',
      icon: <FaSchool />,
    },
    {
      name: 'COVID-19',
      slug: '/yazilar/covid-19',
      icon: <FaVirus />,
    },
    {
      name: 'Değerlendirme',
      slug: '/yazilar/degerlendirme',
      icon: <FaGlasses />,
    },
    {
      name: 'Görüş',
      slug: '/yazilar/gorus',
      icon: <FaScroll />,
    },
    {
      name: 'Söyleşi',
      slug: '/yazilar/soylesi',
      icon: <FaMicrophone />,
    },
    {
      name: 'Vuruş',
      slug: '/yazilar/vurus',
      icon: <FaHandRock />,
    },
    {
      name: 'Yansıma',
      slug: '/yazilar/yansima',
      icon: <FaHandsHelping />,
    },
    {
      name: 'Yuvarlak Masa',
      slug: '/yazilar/yuvarlak-masa',
      icon: <BsNewspaper />,
    },
  ]

  const yearButton = [
    {
      year: new Date().getFullYear(),
    },
    {
      year: new Date().getFullYear() - 1,
    },
    {
      year: new Date().getFullYear() - 2,
    },
    {
      year: new Date().getFullYear() - 3,
    },
    {
      year: new Date().getFullYear() - 4,
    },
  ]

  let { slug } = useParams()
  const getWrites = async () => {
    const result = await axiosClient
      .get(`/api/yazilar/${slug}?page=1`)
      .then((res) => res.data.data)

    setAllData(result)
    setCurrentPage(1)
    setPostPage(9)
  }

  useEffect(() => {
    getWrites()
  }, [slug])

  // const handleChange = async (data) => {
  //   let currentPage = data.selected + 1
  //   await axiosClient
  //     .get(`/api/yazilar/${slugged}?page=${currentPage}`)
  //     .then((res) => {
  //       setContent(res.data)
  //     })
  // }

  const handleSekme = (string) => {
    setContent([])
    const currentPosts = allData?.slice(firstPostIndex, lastPostIndex)
    const filtered = currentPosts?.filter((item) => item.year == string)

    setSekme(filtered)
  }

  const lastPostIndex = currentPage * postPerPage
  const firstPostIndex = lastPostIndex - postPerPage

  return (
    <>
      <SEO title="Yazılar" />
      <Layout>
        <PageBanner title={'Yazılar'} image={banner} color="a" id="bülten" />

        <div className="edu-course-area edu-section-gap bg-color-white">
          <div className="container">
            <div
              className="row d-flex justify-content-center"
              style={{ marginBottom: '70px' }}
            >
              {yearButton.map((item, i) => (
                <>
                  <div key={i} className="col-md-2 col-sm-6 mb-2">
                    <a
                      href={window.screen.width <= 991 ? '#card-content' : '#a'}
                    >
                      <button
                        onClick={() => handleSekme(item.year)}
                        className="btn btn-lg btn-block course-button-top"
                      >
                        {item.year}
                      </button>
                    </a>
                  </div>
                </>
              ))}
              <div className="col-md-2 col-sm-6 mb-2">
                <a href={window.screen.width <= 991 ? '#card-content' : '#a'}>
                  <button
                    onClick={() => setSekme([])}
                    className="btn btn-lg btn-block course-button-top"
                  >
                    Tümü
                  </button>
                </a>
              </div>
            </div>
            <div className="row g-5 mt--10">
              <div className="col-lg-2">
                {categoryList.map((item, i) => (
                  <Link to={item.slug}>
                    <div
                      key={i}
                      className="d-flex justify-content-start align-items-center my-auto banner-one-link mb-2"
                    >
                      <div className="writes-category-list">
                        {item.icon} {item.name}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="col-lg-10" id="card-content">
                <div className="row">
                  {sekme?.length > 0 ? (
                    <>
                      {sekme?.map((item, i) => {
                        return (
                          <>
                            <CourseTypeTwo key={i} item={item} />
                          </>
                        )
                      })}
                    </>
                  ) : (
                    <>
                      {allData
                        ?.slice(firstPostIndex, lastPostIndex)
                        .map((item, i) => {
                          return (
                            <>
                              <CourseTypeTwo key={i} item={item} />
                            </>
                          )
                        })}
                    </>
                  )}
                </div>
              </div>
            </div>
            {sekme?.length > 0 ? (
              <div className="d-flex justify-content-center">
                <PaginationOne
                  totalPosts={sekme?.length}
                  postPerPage={postPerPage}
                  setCurrentPage={setCurrentPage}
                  currentPage={currentPage}
                />
              </div>
            ) : (
              <div className="d-flex justify-content-center">
                <PaginationOne
                  totalPosts={allData?.length}
                  postPerPage={postPerPage}
                  setCurrentPage={setCurrentPage}
                  currentPage={currentPage}
                />
              </div>
            )}
          </div>
        </div>
      </Layout>
    </>
  )
}

export default CoruseTwo
