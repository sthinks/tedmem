import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './eventDetailSearch.css'

function EventDetailSearch({ data }) {
  const [writesResults, setWritesResults] = useState([])
  const [query, setQuery] = useState('')

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleQuery()
    }
  }

  const handleQuery = (e) => {
    var writesResults = data?.filter((data) =>
      data.title.toLowerCase().match(query),
    )

    setWritesResults(writesResults)

    if (e === '') {
      setWritesResults([])
    }
  }

  return (
    <div className="input-container">
      <input
        className="bg-white mb-2 py-2 banner-one-input-details"
        onKeyDown={handleKeyDown}
        onChange={(e) => {
          setQuery(e.target.value)
          handleQuery(e.target.value)
        }}
        type="text"
        placeholder="Yazılarda Arayın..."
      />
      <i className="icon-search-line pt-3 search-icon-event"></i>
      {writesResults?.length > 0 &&
        writesResults.slice(0, 4).map((item) => (
          <Link
            to={
              item.category_id
                ? `/yayinlar-detay/${item.slug}`
                : `/yayinlar-detay/${item.slug}`
            }
          >
            <div className="border mb-2 input-result-detail">{item.title}</div>
          </Link>
        ))}
    </div>
  )
}

export default EventDetailSearch
