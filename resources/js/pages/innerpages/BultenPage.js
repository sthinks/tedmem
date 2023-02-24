import React, { useEffect, useState } from 'react'
import SEO from '../../common/SEO'
import Layout from '../../common/Layout'
import BreadcrumbOne from '../../common/breadcrumb/BreadcrumbOne'
import axiosClient from '../../utils/axiosClient'
import BultenCourse from '../../components/course/BultenCourse'
import PageBanner from '../../components/banner/PageBanner'
import banner from '../../assets/images/bulletin-image.png'
import BultenCard from '../../components/bulten/BultenCard'
import PaginationOne from '../../components/pagination/Pagination'
import Loading from '../../components/loading/Loading'
import PaginationBulten from '../../components/pagination/PaginationBulten'

const BultenPage = () => {
  const [isLoading, setIsLoading] = useState()
  const [selectYear, setSelectYear] = useState(0)
  const [allData, setAllData] = useState([])
  const [allSekme, setAllSekme] = useState([])
  const [content, setContent] = useState(null)
  const [total, setTotal] = useState(0)
  const [sekme, setSekme] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [postPerPage, setPostPage] = useState(4)
  const pathname = window.location.pathname
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
    {
      year: new Date().getFullYear() - 5,
    },
    {
      year: new Date().getFullYear() - 6,
    },
    {
      year: new Date().getFullYear() - 7,
    },
    {
      year: new Date().getFullYear() - 8,
    },
    {
      year: new Date().getFullYear() - 9,
    },
    {
      year: new Date().getFullYear() - 10,
    },
    {
      year: new Date().getFullYear() - 11,
    },
  ]

  const getWrites = async () => {
    await axiosClient.get(`/api/bulten`).then((res) => {
      setAllData(res.data)
    })
  }

  useEffect(() => {
    getWrites()
  }, [])
  useEffect(() => {
    setCurrentPage(1)
  }, [sekme])
  useEffect(() => {
    paginationHandler()
    let count = 0
    if (sekme?.length > 0) {
      if (sekme[0].null) {
        setTotal(0)
      } else {
        sekme?.map((item) => (count = count + 1))
        setTotal(count)
      }
    } else {
      allData?.map((item) => (count = count + 1))
      setTotal(count)
    }
  }, [currentPage, sekme, allData])

  const paginationHandler = () => {
    const lastPostIndex = currentPage * postPerPage
    const firstPostIndex = lastPostIndex - postPerPage
    if (sekme?.length > 0) {
      const currentPosts = sekme?.slice(firstPostIndex, lastPostIndex)
      setAllSekme(currentPosts)
    }
    const currentPosts = allData?.slice(firstPostIndex, lastPostIndex)
    setContent(currentPosts)
  }
  const filteredByYear = (year) => {
    setSelectYear(year)
    if (year == 0) {
      setSekme([])
    } else {
      const result = allData?.filter((item) => item.year == year)
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
      <SEO title="Yazılar" />
      <Layout>
        <PageBanner title={'Bülten'} image={banner} id={'bulten'} />
        <div className="edu-course-area edu-section-gap bg-color-white">
          <div className="container">
            <div
              className="row d-flex justify-content-center"
              style={{ marginBottom: '40px', marginTop: '40px' }}
            >
              <select
                className="custom-select"
                id="inputGroupSelect01"
                style={{ height: '45px', padding: '10px' }}
                onChange={(e) => filteredByYear(e.target.value)}
              >
                <option disabled selected>
                  Yıla göre filtrele.
                </option>
                <option value={0}>Tümü</option>
                {yearButton.map((item, i) => (
                  <option value={item.year} key={i}>
                    {item.year}
                  </option>
                ))}
              </select>

              {yearButton.map((item, i) => (
                <>
                  <div
                    key={i}
                    className="col-lg-2 col-sm-6 mb-2 p-1 year-container"
                  >
                    <button
                      onClick={() => filteredByYear(item.year)}
                      className={
                        selectYear === item.year
                          ? 'btn-lg btn-block course-button-top-active'
                          : 'btn btn-lg btn-block course-button-top'
                      }
                    >
                      {item.year}
                    </button>
                  </div>
                </>
              ))}
              <div className="col-lg-2 col-sm-6 mb-2 year-container">
                <a href={window.screen.width <= 991 ? '#card-content' : '#a'}>
                  <button
                    onClick={() => filteredByYear(0)}
                    className={
                      selectYear === 0
                        ? 'btn-lg btn-block course-button-top-active'
                        : 'btn btn-lg btn-block course-button-top'
                    }
                  >
                    Tümü
                  </button>
                </a>
              </div>
            </div>
            <div className="row">
              {sekme?.length > 0
                ? allSekme?.map((item, i) =>
                    item.null ? (
                      <div className="col-lg-4" key={i}>
                        {item.null}
                      </div>
                    ) : (
                      <div className="col-md-12" key={i}>
                        <BultenCard data={item} />
                      </div>
                    ),
                  )
                : content?.map((item, i) => (
                    <div className="col-md-12" key={i}>
                      <BultenCard data={item} />
                    </div>
                  ))}
            </div>
          </div>
        </div>
        {total > 0 ? (
          <div className="d-flex justify-content-center">
            <PaginationBulten
              totalPosts={total}
              postPerPage={postPerPage}
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
            />
          </div>
        ) : (
          <></>
        )}
      </Layout>
    </>
  )
}

export default BultenPage
