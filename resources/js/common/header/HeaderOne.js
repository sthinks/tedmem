import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Nav from './Nav'
import HeaderSticky from './HeaderSticky'
import ResponsiveMenu from './ResponsiveMenu'
import Logo from '../../assets/images/bg/logo.png'
import axiosClient from '../../utils/axiosClient'
import { FiSearch } from 'react-icons/fi'
import MobilSearch from '../../components/mobil-search/MobilSearch'
import './headerOne.css'

const HeaderOne = ({ styles, disableSticky }) => {
  const [mobilSearchActive, setMobileSearch] = useState(false)
  const [offcanvasShow, setOffcanvasShow] = useState(false)
  const [mobilNavActive, setmobilNavActive] = useState(false)
  const [kadro, setKadro] = useState()
  const [allSearchData, setSearchData] = useState()
  const [writes, setWrites] = useState([])
  const [publics, setPublics] = useState([])
  const [bulten, setBulten] = useState([])
  const [writesResultsNav, setWritesResults] = useState([])
  const [query, setQuery] = useState('')

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
      data.title.toLowerCase().includes(query.toLocaleLowerCase()),
    )
    setWritesResults(writesResultsNav)
    if (e === '') {
      setWritesResults([])
    }
  }

  const getData = async () => {
    await axiosClient
      .get(`/api/latest-bulten`)
      .then((res) => setBulten(res.data))
    await axiosClient
      .get(`/api/latest-writes`)
      .then((res) => setWrites(res.data))
    await axiosClient
      .get(`/api/latest-publics`)
      .then((res) => setPublics(res.data))
    await axiosClient.get(`/api/kadromuz`).then((res) => setKadro(res.data))
  }

  useEffect(() => {
    getData()
  }, [])

  useEffect(() => {
    const allData = [...publics, ...writes, ...bulten].sort()
    setSearchData(allData)
  }, [kadro])

  const [searchPopup, setSearchPopup] = useState(false)
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
                  <img className="logo-light" src={Logo} alt="Main Logo" />
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
                        writesResultsNav.slice(0, 12).map((item) => (
                          <div className="banner-one-results">
                            <ul>
                              <li>
                                <Link
                                  to={
                                    item.category_id
                                      ? `/yayinlar-detay/${item.slug}`
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
                  <i className="ri-menu-line"></i>
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
