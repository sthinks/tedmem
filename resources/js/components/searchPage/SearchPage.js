import { useEffect, useState } from 'react'
import './searchPage.css'
import { BsSearch } from 'react-icons/bs'
import axiosClient from '../../utils/axiosClient'
import { useParams } from 'react-router-dom'
import PaginationSearch from '../pagination/paginationSearch'
import Loading from '../loading/Loading'
function SearchPage() {
  const [value, setValue] = useState('')
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])
  const [content, setContent] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [postPerPage, setPostPage] = useState(10)
  const slug = useParams()

  useEffect(() => {
    setLoading(true)
    async function fetchData() {
      if (slug) {
        try {
          const response = await axiosClient.get(
            `/api/search-page/${slug.slug}`,
          )
          const result = response.data
          setData(result)
          if (result) {
            setLoading(false)
          }
        } catch (err) {
          console.log(err)
        }
      }
    }
    fetchData()
  }, [slug])
  async function handleKeyPress(event) {
    if (event.key === 'Enter' || event.type === 'click') {
      setLoading(true)
      if (value.length > 0) {
        const delayDebounceFn = setTimeout(async () => {
          try {
            const response = await axiosClient.get(`/api/search-page/${value}`)
            const result = response.data
            setData(result)
            if (result) {
              setLoading(false)
            }
          } catch (err) {
            console.log(err)
            setLoading(false)
          }
        }, 800)
        return () => clearTimeout(delayDebounceFn)
      }
    }
  }
  function handleChange(event) {
    setValue(event.target.value)
  }
  useEffect(() => {
    paginationHandler()
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
  }, [data, currentPage])
  const paginationHandler = () => {
    const lastPostIndex = currentPage * postPerPage
    const firstPostIndex = lastPostIndex - postPerPage
    const currentPosts = data?.slice(firstPostIndex, lastPostIndex)
    setContent(currentPosts)
  }
  return (
    <div className="d-flex justify-content-center my-5">
      <div className="container">
        <div className="search-container border-bottom-1 py-3">
          <h4>Yeni Arama</h4>
          <div className="d-flex position-relative">
            <input
              className="bg-white mb-2 py-2 banner-one-input"
              value={value}
              onChange={handleChange}
              onKeyDown={handleKeyPress}
              type="text"
              placeholder="Arayın..."
            />
            <BsSearch
              className="search-box-icon"
              style={{ cursor: 'pointer' }}
              onClick={(e) => handleKeyPress(e)}
            />
          </div>
        </div>
        {loading ? (
          <Loading />
        ) : (
          <>
            <div className="">
              {content.length > 0 ? (
                content?.map((item, i) => {
                  if (item?.category_slug) {
                    return (
                      <a
                        href={`/yayinlar-detay/${item.slug}`}
                        key={i}
                        target="blank"
                      >
                        <div className="search-page-card row my-5 ">
                          <img
                            className="col-2"
                            style={{
                              height: 'auto',
                              objectFit: 'cover',
                            }}
                            src={item.image}
                          />
                          <div className="col-10 search-page-card-text pl-4 d-flex justify-content-between flex-column">
                            <div>
                              <h6 className="p-0 mb-1">{item.title}</h6>
                              <div className="d-flex">
                                {item?.year && (
                                  <p className="mb-0 mr-3">Yıl: {item?.year}</p>
                                )}
                                {item?.author && (
                                  <p className="m-0">Yazar: {item?.author}</p>
                                )}
                              </div>
                            </div>
                            <p
                              className="search-page-text mb-0"
                              dangerouslySetInnerHTML={{
                                __html: item?.content.slice(0, 300),
                              }}
                            />
                          </div>
                        </div>
                      </a>
                    )
                  } else if (item?.speaker) {
                    return (
                      <a
                        href={`/etkinlik-detay/${item.slug}`}
                        key={i}
                        target="blank"
                      >
                        <div className="search-page-card row my-5 ">
                          <img
                            className="col-2"
                            style={{
                              height: 'auto',
                              objectFit: 'cover',
                            }}
                            src={item.image}
                          />
                          <div className="col-10 search-page-card-text pl-4 d-flex justify-content-between flex-column">
                            <div>
                              <h6 className="p-0 mb-1">{item.title}</h6>
                              <div className="d-flex">
                                {item?.year && (
                                  <p className="mb-0 mr-3">Yıl: {item?.year}</p>
                                )}
                                {item?.author && (
                                  <p className="m-0">Yazar: {item?.author}</p>
                                )}
                              </div>
                            </div>
                            <p
                              className="search-page-text mb-0"
                              dangerouslySetInnerHTML={{
                                __html: item?.content.slice(0, 300),
                              }}
                            />
                          </div>
                        </div>
                      </a>
                    )
                  } else {
                    return (
                      <a
                        href={`/yazilar-detay/${item.slug}`}
                        key={i}
                        target="blank"
                      >
                        <div className="search-page-card row my-5 ">
                          <img
                            className="col-2"
                            style={{
                              height: 'auto',
                              objectFit: 'cover',
                            }}
                            src={item.image}
                          />
                          <div className="col-10 search-page-card-text pl-4 d-flex justify-content-between flex-column">
                            <div>
                              <h6 className="p-0 mb-1">{item.title}</h6>
                              <div className="d-flex">
                                {item?.year && (
                                  <p className="mb-0 mr-3">Yıl: {item?.year}</p>
                                )}
                                {item?.author && (
                                  <p className="m-0">Yazar: {item?.author}</p>
                                )}
                              </div>
                            </div>
                            <p
                              className="search-page-text mb-0"
                              dangerouslySetInnerHTML={{
                                __html: item?.content.slice(0, 300),
                              }}
                            />
                          </div>
                        </div>
                      </a>
                    )
                  }
                })
              ) : (
                <div className="">Sonuç bulunamadı.</div>
              )}
            </div>
            {data?.length > 0 && (
              <PaginationSearch
                totalPosts={data?.length}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
                postPerPage={postPerPage}
              />
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default SearchPage
