import React, { useEffect, useState } from 'react'
import SEO from '../../common/SEO'
import Layout from '../../common/Layout'
import BreadcrumbOne from '../../common/breadcrumb/BreadcrumbOne'
import CourseTypeThree from '../../components/course/CourseTypeThree'
import axiosClient from '../../utils/axiosClient'
import PageBanner from '../../components/banner/PageBanner'
import banner from '../../assets/images/activity-banner.png'
import PaginationOne from '../../components/pagination/Pagination'
import './Course.css'
const CourseThree = () => {
  const [allData, setAllData] = useState([])
  const [content, setContent] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [postPerPage, setPostPage] = useState(4)
  const pathname = window.location.pathname

  const getEvents = async () => {
    await axiosClient.get(`/api/events`).then((res) => {
      setAllData(res.data)
    })
  }

  useEffect(() => {
    getEvents()
  }, [])

  useEffect(() => {
    paginationHandler(allData)
  }, [allData])

  useEffect(() => {
    paginationHandler(allData)
  }, [currentPage])

  const lastPostIndex = currentPage * postPerPage
  const firstPostIndex = lastPostIndex - postPerPage

  const paginationHandler = (data) => {
    const currentPosts = data?.slice(firstPostIndex, lastPostIndex)
    setContent(currentPosts)
  }

  return (
    <>
      <SEO title="TEDMEM | Etkinlikler" />
      <Layout>
        <PageBanner
          title="Etkinlikler"
          image={banner}
          id={pathname === '/' ? null : 'etkinlikler'}
        />
        <div className="edu-course-area edu-section-gap bg-color-white">
          <div className="container">
            <div className="row g-5 mt--10">
              {content?.map((item) => (
                <div className="col-lg-6 " key={item.id}>
                  <CourseTypeThree data={item} />
                </div>
              ))}
            </div>
            {/* Pagination */}
            <div className="pagination d-flex justify-content-center mt-5 pagination">
              <PaginationOne
                totalPosts={allData?.length}
                postPerPage={postPerPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
              />
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default CourseThree
