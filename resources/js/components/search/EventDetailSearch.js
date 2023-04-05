import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './eventDetailSearch.css'
import axiosClient from '../../utils/axiosClient'

function EventDetailSearch() {
  const [value, setValue] = useState('')
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])

  useEffect(() => {
    {
      const search = async () => {
        await axiosClient
          .get(`/api/searchPublic/${value}`)
          .then(function (response) {
            setData(response.data)
            setLoading(false)
          })
          .catch(function (error) {
            console.log(error)
          })
      }

      if (value && !data?.length) {
        setLoading(true)
        search()
      } else {
        const timeoutId = setTimeout(() => {
          if (value) {
            setLoading(true)
            search()
          }
        }, 1000)
        return () => {
          clearTimeout(timeoutId)
        }
      }
    }
  }, [value])
  const inputBlur = () => {
    setTimeout(() => {
      setData([])
      setValue('')
    }, 150)
  }
  return (
    <div className="input-container">
      <input
        className="bg-white mb-2 py-2 banner-one-input-details"
        value={value}
        onBlur={inputBlur}
        onChange={(e) => setValue(e.target.value)}
        type="text"
        placeholder="Yazılarda Arayın..."
      />
      <i className="icon-search-line pt-3 search-icon-event"></i>
      {value && (
        <>
          {data?.slice(0, 8).map((item) => (
            <Link to={`/yayinlar-detay/${item.slug}`}>
              <div className="border mb-2 input-result-detail">
                {item.title}
              </div>
            </Link>
          ))}
        </>
      )}
    </div>
  )
}

export default EventDetailSearch
