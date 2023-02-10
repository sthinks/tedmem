import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import SEO from '../../common/SEO'
import Layout from '../../common/Layout'
import axiosClient from '../../utils/axiosClient'
import banner from '../../assets/images/eventdetails.png'
import BannerEvent from '../../components/banner-event/BannerEvent'
import benzerYazilar from '../../assets/images/benzer-yazilar.png'
import { FaFacebookF, FaTwitter, FaPinterestP } from 'react-icons/fa'
import './eventDetails.css'
import EditionCard from '../../components/card/EditionCard'
import EventDetailSearch from '../../components/search/EventDetailSearch'
import { FacebookShareButton, TwitterShareButton } from 'react-share'
import BrushAnim from '../../components/brush-anim-yellow/BrushYellow'

const EventDetails = () => {
  const { slug } = useParams()
  const [content, setContent] = useState([])
  const [category, setCategory] = useState([])
  const [allCategory, setAllCategory] = useState([])
  const [similarDatas, setSimilarDatas] = useState([])
  const [allData, setAllData] = useState([])
  const [loading, setLoading] = useState(true)

  const handleClick = () => {
    setText(content.content)
    document.getElementById('devam').remove()
  }

  useEffect(() => {
    axiosClient
      .get('/api/publics')
      .then((res) => {
        setAllData(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  useEffect(() => {
    setLoading(true)
    axiosClient
      .get(`/api/public-details/${slug}`)
      .then((res) => {
        setContent(res.data)
        setCategory(res.data.category)
        setText(
          res.data.content
            .replace(/<br>(?=(?:\s*<[^>]*>)*$)|(<br>)|<[^>]*>/gi, (x, y) =>
              y ? ' & ' : '',
            )
            .slice(0, 250),
        )
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [slug])

  useEffect(() => {
    filterHandler(category)
    sameHandler()
  }, [category])

  const filterHandler = (value) => {
    const filteredItem = allData.filter((item) => {
      return item.category === value
    })
    setSimilarDatas(filteredItem)
  }
  const sameHandler = () => {
    const a = allData.reduce((acc, curr) => {
      if (!acc[curr.category]) {
        acc[curr.category] = new Set()
      }

      acc[curr.category].add(curr.category_slug)

      return acc
    }, {})

    let result = Object.entries(a).map((el) => ({
      category: el[0],
      slug: el[1],
    }))

    setAllCategory(result)
  }

  const deneme = (value) => {
    const result = `https://twitter.com/intent/tweet`
  }

  return (
    !loading && (
      <>
        <SEO title={content?.title} />
        <Layout>
          <BannerEvent
            title={content?.title}
            image={banner}
            date={content?.created_at}
            author={content?.editor}
          />

          <div className="container event-detail ">
            <div className="row d-flex event-detail-container">
              <div className="col-lg-9 col-sm-12 event-detail-content">
                <div
                  className="event-detail-text"
                  dangerouslySetInnerHTML={{
                    __html: content?.content,
                  }}
                />
                <div className="row event-detail-share d-flex justify-content-between">
                  <div className="col-xl-6 col-lg-6 col-sm-12">
                    <div className="btn-container ">
                      <button type="button" className="event-detail-button">
                        {content?.category}
                      </button>
                    </div>
                  </div>
                  <div className="d-flex col-xl-6 col-lg-6 col-sm-12 share-button-item">
                    <h6 style={{ marginRight: '15px' }}>Paylaş</h6>
                    <a target="_blank">
                      <div
                        className="social-media-icon-card  mb-3"
                        style={{
                          backgroundColor: '#e9eef5',
                        }}
                      >
                        <FacebookShareButton
                          url={`tedmem.loca.lt/yayinlar-detay/${slug}`}
                          hashtag={'#Tedmem, #OrtakPaydamıEğitim'}
                        >
                          <FaFacebookF style={{ color: '#124d97' }} />
                        </FacebookShareButton>
                      </div>
                    </a>

                    <a target="_blank">
                      <div
                        className="social-media-icon-card ml-4 mb-3"
                        style={{
                          backgroundColor: '#ebf6fe',
                        }}
                      >
                        <TwitterShareButton
                          url={`https://tedmem.loca.lt/yayinlar-detay/${slug}`}
                          title={content?.title}
                          via={'Tedmem'}
                        >
                          <FaTwitter style={{ color: '#01a4f4' }} />
                        </TwitterShareButton>
                      </div>
                    </a>
                    <a href="https://twitter.com/tedmem" target="_blank">
                      <div
                        className="social-media-icon-card ml-4 mb-3"
                        style={{
                          backgroundColor: '#fce7ea',
                        }}
                      >
                        <FaPinterestP style={{ color: '#da2347' }} />
                      </div>
                    </a>
                  </div>
                </div>
                <div className="event-detail-footer">
                  <div className="brush-animation-content-detail">
                    <div className="brush-anim-detail">
                      <div className="brush-title-detail">Benzer Yazılar</div>
                    </div>
                  </div>
                  <p>
                    Neque porro quisquam est qui dolorem ipsum quia dolor sit
                    amet, consectetur, adipisci velit...
                  </p>
                  <div className="row">
                    {/* Benzer kartlar sadece 4 adet olacak şekilde slice yapıldı. */}
                    {similarDatas?.slice(0, 4).map((item) => (
                      <div className="col-xl-4 mt-5">
                        <div className="event-detail-similar-posts">
                          <EditionCard data={item} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="col-lg-3 event-detail-cateogry">
                <EventDetailSearch data={allData} />

                <h5 className="detail-category">Kategoriler</h5>

                {allCategory.map((item) => (
                  <div>
                    <li className="category-list-item" key={item.category}>
                      <Link to={`/yayinlar/${item.category}`}>
                        {item.category}
                      </Link>
                    </li>
                  </div>
                ))}
                {!allCategory && <div>İlgili kategori bulunamadı.</div>}
              </div>
            </div>
          </div>
        </Layout>
      </>
    )
  )
}
export default EventDetails
