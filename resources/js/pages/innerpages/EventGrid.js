import React, { useEffect, useState } from 'react'
import SEO from '../../common/SEO'
import Layout from '../../common/Layout'
import BreadcrumbOne from '../../common/breadcrumb/BreadcrumbOne'
import PaginationOne from '../../components/pagination/Pagination'
import EventTwo from '../../components/event/EventTwo'
import { useParams } from 'react-router-dom'
import axiosClient from '../../utils/axiosClient'
import ReactPaginate from 'react-paginate'
import PageBanner from '../../components/banner/PageBanner'
import banner from '../../assets/images/article-banner.png'
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
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState(4)

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
            <div className="row">
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
                  <FaSortAmountDown className="btn-container-right-sort" />
                </button>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              {sekme?.length > 0
                ? sekme?.map((item) => (
                    <div className="col-lg-3" key={item.id}>
                      <div className="card card-event event-card-container">
                        <EditionCard data={item} />
                      </div>
                    </div>
                  ))
                : content?.map((item) => (
                    <div className="col-lg-3" key={item.id}>
                      <div className="card card-event event-card-container">
                        <EditionCard data={item} />
                      </div>
                    </div>
                  ))}
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default EventGrid
