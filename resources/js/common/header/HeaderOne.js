import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Nav from './Nav'
import HeaderSticky from './HeaderSticky'
import ResponsiveMenu from './ResponsiveMenu'
import Logo from '../../assets/images/temem-logoo.png'
import { FiSearch } from 'react-icons/fi'
import MobilSearch from '../../components/mobil-search/MobilSearch'
import { AiOutlineMenu } from 'react-icons/ai'
import axiosClient from '../../utils/axiosClient'
import './headerOne.css'

const HeaderOne = ({ styles, disableSticky }) => {
  const [mobilSearchActive, setMobileSearch] = useState(false)
  const [offcanvasShow, setOffcanvasShow] = useState(false)
  const [mobilNavActive, setmobilNavActive] = useState(false)
  const [allSearchData, setSearchData] = useState()
  const [writes, setWrites] = useState([])
  const [publics, setPublics] = useState([])
  const [bulten, setBulten] = useState([])
  const [writesResultsNav, setWritesResults] = useState([])
  const [query, setQuery] = useState('')
  const [searchPopup, setSearchPopup] = useState(false)
  const handlerData = async () => {
    const publicData = await axiosClient
      .get('/api/searchPublic')
      .then((res) => res.data)
    const writeData = await axiosClient
      .get('/api/searchWrite')
      .then((res) => res.data)

    if (publicData && writeData) {
      const article = [...publicData, ...writeData].sort(
        (a, b) => b.created_at - a.created_at,
      )
      setSearchData(article)
    }
  }
  useEffect(() => {
    handlerData()
  }, [])

  const MobilSearchFunction = () => {
    setMobileSearch(!mobilSearchActive)
  }
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleQuery()
    }
  }

  const handleQuery = (e) => {
    var writesResultsNav = allSearchData?.filter((data) =>
      data.title
        .toLocaleUpperCase('tr-TR')
        .includes(query.toLocaleUpperCase('tr-TR')),
    )
    setWritesResults(writesResultsNav)
    if (e === '') {
      setWritesResults([])
    }
  }

  const onCanvasHandler = () => {
    setOffcanvasShow((prevState) => !prevState)
  }

  const onSearchHandler = () => {
    setSearchPopup((prevState) => !prevState)
  }

  if (searchPopup) {
    document.body.classList.add('search-popup-active')
  } else {
    document.body.classList.remove('search-popup-active')
  }

  const sticky = HeaderSticky(50)
  const classes = sticky ? 'sticky' : ''
  const stickyStatus = disableSticky ? '' : ' header-sticky'
  return (
    <>
      <header
        className={`edu-header disable-transparent header-background ${stickyStatus} header-transparent  ${
          styles || ''
        } ${classes || ''}`}
      >
        <div className="">
          <div className="d-flex align-items-center">
            <div className="col-lg-4 col-xl-4 col-md-4 col-4 logo-container-item">
              <div className="logo">
                <Link to="/" className="d-flex">
                  <div className="logo-container-header d-flex align-items-center ">
                    <img className="logo-light" src={Logo} alt="Main Logo" />
                  </div>
                  <div className="logo-text">
                    <p>Ortak Paydamız Eğitim</p>{' '}
                  </div>
                </Link>
              </div>
            </div>

            <div className="col-lg-6 col-xl-6 d-flex justify-content-end header-one-navbar">
              <nav className="mainmenu-nav">
                <Nav />
              </nav>
            </div>

            <div className="col-lg-2 col-xl-2 d-flex justify-content-end header-one-searchbar">
              <div className="header-right">
                <div className="header-quote">
                  <div className="quote-icon quote-search">
                    <input
                      className="header-one-inputbar"
                      placeholder="Arama yapın.."
                      onKeyDown={handleKeyDown}
                      onChange={(e) => {
                        setQuery(e.target.value)
                        handleQuery(e.target.value)
                      }}
                    />
                    <FiSearch className="header-one-search-icon" />
                    <div className="header-input-result-detail">
                      {writesResultsNav?.length > 0 &&
                        writesResultsNav.slice(0, 6).map((item) => (
                          <div key={item} className="banner-one-results">
                            <ul>
                              <li>
                                <Link
                                  to={
                                    !item.category_slug
                                      ? `/yazilar-detay/${item.slug}`
                                      : `/yayinlar-detay/${item.slug}`
                                  }
                                >
                                  {item.title}
                                </Link>
                              </li>
                            </ul>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-1 mobil-search-icon">
              <FiSearch
                className="mobile-search-icon-popup"
                onClick={() => MobilSearchFunction()}
              />
            </div>

            <div className="col-sm-1 hamberger-menu">
              <div className="hamberger quote-icon d-block d-xl-none">
                <button
                  className="hamberger-button"
                  onClick={() => onCanvasHandler()}
                >
                  <AiOutlineMenu
                    className="position-absolute"
                    style={{ top: '6px', color: 'black' }}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
      <ResponsiveMenu
        show={offcanvasShow}
        onClose={onCanvasHandler}
        showSearch={searchPopup}
        onSearch={onSearchHandler}
        setIsActive={setmobilNavActive}
        mobilNavActive
        writes={writes}
      />
      <MobilSearch
        isActive={mobilSearchActive}
        setIsActive={setMobileSearch}
        data={allSearchData}
      />
    </>
  )
}

export default HeaderOne
