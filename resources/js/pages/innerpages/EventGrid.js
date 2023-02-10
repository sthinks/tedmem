import React, { useEffect, useState } from 'react'
import SEO from '../../common/SEO'
import Layout from '../../common/Layout'
import BreadcrumbOne from '../../common/breadcrumb/BreadcrumbOne'
import PaginationOne from '../../components/pagination/Pagination'
import EventTwo from '../../components/event/EventTwo'
import { Link, useParams, useNavigate } from 'react-router-dom'
import axiosClient from '../../utils/axiosClient'
import ReactPaginate from 'react-paginate'
import PageBanner from '../../components/banner/PageBanner'
import banner from '../../assets/images/writes-page-banner.jpg'
import { FaSortAmountDown } from 'react-icons/fa'
import './EventGrid.css'
import EditionCard from '../../components/card/EditionCard'
import { result } from 'lodash'

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

const EventGrid = () => {
  const [content, setContent] = useState([])
  const [sekme, setSekme] = useState([])
  const [total, setTotal] = useState()
  const [publicCategory, setPublicCategory] = useState()
  const [navigateBtn, setNavigateBtn] = useState()
  const [button, setButton] = useState()
  const [allData, setAllData] = useState()
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState(6)
  const navigate = useNavigate()
  const scrollToTop = () => {
    document.body.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
  }
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
  const slugged = slug && slugify(slug)

  const getPublics = async () => {
    await axiosClient
      .get(slugged ? `/api/publics/${slugged}` : `/api/publics`)
      .then((res) => {
        setContent(res.data)
      })
  }
  const getPublicCategory = async () => {
    await axiosClient
      .get('/api/public-category')
      .then((res) => setPublicCategory(res.data))
  }

  useEffect(() => {
    getPublicCategory()
  }, [])

  useEffect(() => {
    getPublics()
    setCurrentPage(1)
    setSekme([])
  }, [slugged])
  useEffect(() => {
    setCurrentPage(1)
  }, [sekme])

  useEffect(() => {
    paginationHandlerData()
    let count = 0
    if (sekme.length > 0) {
      sekme?.map((item) => (count = count + 1))
      setTotal(count)
    } else {
      content?.map((item) => (count = count + 1))
      setTotal(count)
    }
  }, [currentPage, content, sekme])

  const paginationHandlerData = () => {
    const lastPostIndex = currentPage * postsPerPage
    const firstPostIndex = lastPostIndex - postsPerPage
    const currentPosts = content?.slice(firstPostIndex, lastPostIndex)
    setAllData(currentPosts)
  }
  const filteredByYear = (year) => {
    if (year === 0) {
      setSekme([])
    } else {
      const result = content.filter((item) => item.publish_year == year)
      if (result.length === 0) {
        const nullData = [
          {
            null: 'Aradığınız tarihte içerik bulunamadı.',
          },
        ]
        setSekme(nullData)
      } else {
        setSekme(result)
      }
    }
  }
  return (
    <>
      <SEO title="Event Grid" />
      <Layout>
        <PageBanner title="Yayınlar" image={banner} />
        <div className="edu-elements-area edu-section-gap bg-color-white">
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
                        onClick={() => filteredByYear(item.year)}
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
                    onClick={() => filteredByYear(0)}
                    className="btn btn-lg btn-block course-button-top"
                  >
                    Tümü
                  </button>
                </a>
              </div>
            </div>

            <div className="row justify-content-between">
              <div className="col-lg-2 mt-5">
                <Link to={`/yayinlar`}>
                  <div className="d-flex justify-content-start align-items-center my-auto banner-one-link mb-2">
                    <div className="writes-category-list">Tümü</div>
                  </div>
                </Link>
                {publicCategory?.map((item, i) => (
                  <Link to={`/yayinlar/${item.id}`}>
                    <div
                      key={i}
                      className="d-flex justify-content-start align-items-center my-auto banner-one-link mb-2"
                    >
                      <div className="writes-category-list">{item.name}</div>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="col-lg-9">
                <div className="row">
                  {sekme.length > 0
                    ? sekme?.map((item, i) =>
                        item.null ? (
                          <div className="col-lg-4" key={i}>
                            {item.null}
                          </div>
                        ) : (
                          <div className="col-lg-4" key={i}>
                            <div className="event-card-container">
                              <EditionCard
                                data={item}
                                publicCategory={publicCategory}
                              />
                            </div>
                          </div>
                        ),
                      )
                    : allData?.map((item, i) => (
                        <div className="col-lg-4" key={i}>
                          <div className="event-card-container">
                            <EditionCard
                              data={item}
                              publicCategory={publicCategory}
                            />
                          </div>
                        </div>
                      ))}
                </div>
                <div className="d-flex justify-content-center">
                  <PaginationOne
                    totalPosts={total}
                    postPerPage={postsPerPage}
                    setCurrentPage={setCurrentPage}
                    currentPage={currentPage}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default EventGrid
