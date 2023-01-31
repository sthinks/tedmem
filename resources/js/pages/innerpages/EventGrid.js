import React, { useEffect, useState } from 'react'
import SEO from '../../common/SEO'
import Layout from '../../common/Layout'
import BreadcrumbOne from '../../common/breadcrumb/BreadcrumbOne'
import PaginationOne from '../../components/pagination/Pagination'
import EventTwo from '../../components/event/EventTwo'
import { Link, useParams } from 'react-router-dom'
import axiosClient from '../../utils/axiosClient'
import ReactPaginate from 'react-paginate'
import PageBanner from '../../components/banner/PageBanner'
import banner from '../../assets/images/writes-page-banner.jpg'
import { FaSortAmountDown } from 'react-icons/fa'
import './EventGrid.css'
import EditionCard from '../../components/card/EditionCard'

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
  const [sekme, setSekme] = useState(null)
  const [button, setButton] = useState()
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState(4)

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

  //Pagination-start
  const lastPostIndex = currentPage * postsPerPage
  const firstPostIndex = lastPostIndex - postsPerPage
  // const currentPosts = content.slice(firstPostIndex,lastPostIndex);

  //Pagination-end
  const btnValue = [
    {
      title: 'Tümünü Gör',
      slug: '',
    },
    {
      title: 'Analiz',
      slug: 'analiz-dizisi',
    },
    {
      title: 'Değerlendirme',
      slug: 'degerlendirme-dizisi',
    },
    {
      title: 'Yayın',
      slug: 'etkinlik-raporları',
    },
    {
      title: 'Güncel',
      slug: 'guncel-yayinlar-dizisi',
    },
  ]
  function onlyUnique(value, index, self) {
    return self.indexOf(value) === index
  }
  const btnValueHandler = () => {
    const result = content?.map((item) => {
      return item.category.toLowerCase()
    })
    var uniqArray = result.filter(onlyUnique)
    setButton(uniqArray)
  }
  const slugged = slug && slugify(slug)
  const getPublics = async () => {
    await axiosClient
      .get(
        slugged != undefined
          ? `/api/publics/${slugged}`
          : `/api/publics?page=1`,
      )
      .then((res) => {
        setContent(res.data.data)
      })
  }

  useEffect(() => {
    getPublics()
  }, [slug])

  useEffect(() => {
    btnValueHandler()
  }, [content])

  const handleSekme = (string) => {
    setSekme([])
    const filtered = content?.filter((item) => item.category_slug == string)
    setSekme(filtered)
  }

  const hanndleChange = async (data) => {
    let currentPage = data.selected + 1
    await axiosClient.get(`/api/publics?page=${currentPage}`).then((res) => {
      {
        setContent(res.data)
      }
    })
  }

  //Data sorting for date
  const sortFunction = () => {
    const article = content
      ?.slice()
      .sort(
        (a, b) =>
          new Date(b.created_at).setHours(0, 0, 0, 0) -
          new Date(a.created_at).setHours(0, 0, 0, 0),
      )
    setContent(article)
  }

  return (
    <>
      <SEO title="Event Grid" />
      <Layout>
        <PageBanner title="Yayınlar" image={banner} />
        <div className="edu-elements-area edu-section-gap bg-color-white">
          <div className="container ">
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
            {/* <div className="row">
              <div className="btn-container">
                {slugged == undefined &&
                  btnValue.map((item) => (
                    <button
                      type="button"
                      onClick={() => handleSekme(item.slug)}
                      className="event-button col-sm-2 col-lg-1"
                    >
                      {item.title}
                    </button>
                  ))}
                <button
                  type="button"
                  className="event-button-right col-sm-1 col-lg-1 float-right"
                  onClick={() => sortFunction()}
                >
                  <FaSortAmountDown
                    className="btn-container-right-sort"
                    style={{ color: 'black' }}
                  />
                </button>
              </div>
            </div> */}

            <div className="row justify-content-between">
              <div className="col-lg-2 mt-5">
                {button?.map((item, i) => (
                  <Link to={item}>
                    <div
                      key={i}
                      className="d-flex justify-content-start align-items-center my-auto banner-one-link mb-2"
                    >
                      <div className="writes-category-list">{item}</div>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="col-lg-9">
                <div className="row">
                  {sekme?.length > 0
                    ? sekme?.map((item) => (
                        <div className="col-lg-4" key={item.id}>
                          <div className="card card-event event-card-container">
                            <EditionCard data={item} />
                          </div>
                        </div>
                      ))
                    : content?.map((item) => (
                        <div className="col-lg-4" key={item.id}>
                          <div className="card card-event event-card-container">
                            <EditionCard data={item} />
                          </div>
                        </div>
                      ))}
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
