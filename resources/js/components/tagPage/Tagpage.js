import React, { useState } from 'react'
import axiosClient from '../../utils/axiosClient'
import CourseTypeTwo from '../course/CourseTypeTwo'
import { FaArrowRight } from 'react-icons/fa'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import CourseTypeThree from '../course/CourseTypeThree'
import Loading from '../loading/Loading'

function Tagpage() {
  const [isLoading, setIsLoading] = useState()
  const [dataWrite, setDataWrite] = useState()
  const [dataEvent, setDataEvent] = useState()
  const [tag, setTag] = useState()
  const [writeCat, setWriteCat] = useState()
  const { slug } = useParams()
  const getTagWriteEventHandler = async () => {
    const resultWrite = await axiosClient
      .get(`/api/write-tag/${slug}`)
      .then((res) => res.data)
    setDataWrite(resultWrite)
    const resultEvent = await axiosClient
      .get(`/api/event-tag/${slug}`)
      .then((res) => res.data)
    setDataEvent(resultEvent)
    if (resultWrite && resultEvent) {
      setIsLoading(false)
    }
  }
  const getCategories = async () => {
    const result = await axiosClient
      .get('/api/write-category')
      .then((res) => res.data)
    setWriteCat(result)
  }
  const getTag = async () => {
    const result = await axiosClient.get('/api/alltag').then((res) => res.data)
    setTag(result)
  }
  const filterTag = (slugad) => {
    const result = tag?.filter((item) => item.slug === slugad)
    return result[0].name
  }
  useEffect(() => {
    setIsLoading(true)
    getCategories()
    getTagWriteEventHandler()
    getTag()
  }, [])
  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="container">
          <div className="d-flex align-items-center">
            <h1>Yazılar</h1>
            <FaArrowRight
              className="mr-4 ml-4 h3"
              style={{ marginBottom: '20px' }}
            />
            {tag && <h4 className="text-capitalize">{filterTag(slug)}</h4>}
          </div>

          <div className="row">
            {dataWrite?.map((item, i) => (
              <div className="col-lg-3 p-3" key={i}>
                <CourseTypeTwo data={item} category={writeCat} />
              </div>
            ))}
          </div>
          <div className="d-flex align-items-center mt-3">
            <h1>Etkinlikler</h1>
            <FaArrowRight
              className="mr-4 ml-4 h3"
              style={{ marginBottom: '20px' }}
            />
            {tag && <h4 className="text-capitalize">{filterTag(slug)}</h4>}
          </div>
          <div className="row">
            {dataEvent?.length < 0 ? (
              <div>asdas</div>
            ) : (
              dataEvent?.map((item, i) => (
                <div className="col-lg-6 p-2" key={i}>
                  <div className="event-card-container">
                    <CourseTypeThree data={item} />
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default Tagpage
