import React, { useRef, useState, useEffect } from 'react'
import { FiSearch } from 'react-icons/fi'
import axiosClient from '../../utils/axiosClient'
import { Link, useNavigate } from 'react-router-dom'
import { GrClose } from 'react-icons/gr'
import './mobilSearch.css'
function MobilSearch({ allSearchData, isActive, setIsActive }) {
  const [searchData, setSearchData] = useState([])
  const [value, setValue] = useState('')
  const [query, setQuery] = useState('')
  const [writesResultsNav, setWritesResults] = useState([])
  const inputRef = useRef()
  const containerRef = useRef()
  const navigate = useNavigate()
  useEffect(() => {
    {
      if (value.length > 0) {
        const delayDebounceFn = setTimeout(async () => {
          try {
            const response = await axiosClient.get(`/api/search/${value}`)
            const result = response.data
            setSearchData(result)
          } catch (err) {
            console.log(err)
          }
        }, 1000)
        return () => clearTimeout(delayDebounceFn)
      }
    }
  }, [value])

  // Empty screen click close search bar.
  useEffect(() => {
    const closeDropdown = (e) => {
      if (e.target.className === inputRef.current) {
        setIsActive(true)
      }
      if (e.target === 'svg.header-one-search-icon') {
        setIsActive(true)
      }
      if (e.target.className === 'mobil-search-container') {
        setIsActive(false)
      }
      if (e.target.className === 'mobile-search-content') {
        setIsActive(false)
      }
      if (e.target.className === 'mobil-search-container-result') {
        setIsActive(false)
      }
    }
    document.body.addEventListener('click', closeDropdown)
    return () => document.body.removeEventListener('click', closeDropdown)
  }, [])
  const inputClickHandler = (e) => {
    if (e.key === 'Enter') {
      navigate(`search-page/${value}`)
      setIsActive(false)
    }
  }
  return (
    <div className={isActive ? 'mobile-search-content' : ''}>
      {isActive && (
        <>
          <div className="mobil-search-container" ref={containerRef}>
            <div className="mobil-search-content" ref={inputRef}>
              <input
                className="mobil-search-input"
                placeholder="Arama yapın.."
                style={{ zIndex: '999999' }}
                value={value}
                onKeyDown={(e) => inputClickHandler(e)}
                onChange={(e) => setValue(e.target.value)}
              />
            </div>
          </div>
          <div className="row">
            <div className="mobil-search-close-button">
              <button
                className="close-button-mobil"
                onClick={() => setIsActive(false)}
              >
                <GrClose />
              </button>
            </div>
            <div className="mobil-search-container-result">
              {value && (
                <div className="mobil-search-result">
                  <ul>
                    {searchData?.slice(0, 12).map((item, i) => {
                      if (item.category_slug) {
                        return (
                          <li>
                            <Link
                              onClick={() => setIsActive(false)}
                              className="header-search-text"
                              key={i}
                              to={`/yayinlar-detay/${item.slug}`}
                            >
                              {item.title}
                            </Link>
                          </li>
                        )
                      } else if (item.speaker) {
                        return (
                          <li>
                            <Link
                              key={i}
                              onClick={() => setIsActive(false)}
                              to={`/etkinlik-detay/${item.slug}`}
                            >
                              {item.title}
                            </Link>
                          </li>
                        )
                      } else {
                        return (
                          <li>
                            <Link
                              onClick={() => setIsActive(false)}
                              key={i}
                              to={`/yazilar-detay/${item.slug}`}
                            >
                              {item.title}
                            </Link>
                          </li>
                        )
                      }
                    })}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default MobilSearch
