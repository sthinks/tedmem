import React, { useRef, useState, useEffect } from 'react'
import { FiSearch } from 'react-icons/fi'
import axiosClient from '../../utils/axiosClient'
import { Link } from 'react-router-dom'
import { GrClose } from 'react-icons/gr'
import './mobilSearch.css'
function MobilSearch({ data, isActive, setIsActive }) {
  const [writes, setWrites] = useState([])
  const [publics, setPublics] = useState([])
  const [bulten, setBulten] = useState([])
  const [allData, setAllData] = useState()
  const [query, setQuery] = useState('')
  const [writesResultsNav, setWritesResults] = useState([])
  const inputRef = useRef()
  const containerRef = useRef()

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleQuery()
    }
  }
  const handleQuery = (e) => {
    var writesResultsNav = data?.filter((data) =>
      data.title
        .toLocaleUpperCase('tr-TR')
        .includes(query.toLocaleUpperCase('tr-TR')),
    )
    setWritesResults(writesResultsNav)
    if (e === '') {
      setWritesResults([])
    }
  }
  // Fetch search data.

  const JoinSearchData = () => {
    const allData = [...publics, ...writes, ...bulten]
    setAllData(allData)
  }

  useEffect(() => {
    JoinSearchData()
  }, [publics])

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
                onKeyDown={handleKeyDown}
                onChange={(e) => {
                  setQuery(e.target.value)
                  handleQuery(e.target.value)
                }}
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
              {writesResultsNav?.length > 0 && (
                <div className="mobil-search-result">
                  <ul>
                    {writesResultsNav.slice(0, 12).map((item) => (
                      <li>
                        <Link
                          onClick={() => setIsActive(false)}
                          to={
                            !item.category_slug
                              ? `/yazilar-detay/${item.slug}`
                              : `/yayinlar-detay/${item.slug}`
                          }
                        >
                          {item.title}
                        </Link>
                      </li>
                    ))}
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
