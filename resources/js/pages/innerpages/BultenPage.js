import React, { useEffect, useState } from 'react'
import SEO from '../../common/SEO'
import Layout from '../../common/Layout'
import BreadcrumbOne from '../../common/breadcrumb/BreadcrumbOne'
import axiosClient from '../../utils/axiosClient'
import BultenCourse from '../../components/course/BultenCourse'
import PageBanner from '../../components/banner/PageBanner'
import banner from '../../assets/images/bulletin-image.png'
import BultenCard from '../../components/bulten/BultenCard'
import PaginationOne from '../../components/pagination/Pagination'

const BultenPage = () => {
  const [allData, setAllData] = useState([])
  const [content, setContent] = useState(null)
  const [sekme, setSekme] = useState(null)

  const [currentPage, setCurrentPage] = useState(1)
  const [postPerPage, setPostPage] = useState(4)
  const pathname = window.location.pathname

  const getWrites = async () => {
    await axiosClient.get(`/api/bulten`).then((res) => {
      setAllData(res.data)
    })
  }

  useEffect(() => {
    getWrites()
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
      <SEO title="Yazılar" />
      <Layout>
        <PageBanner title={'Bülten'} image={banner} id={'bulten'} />
        <div className="edu-course-area edu-section-gap bg-color-white">
          <div className="container">
            <div className="row">
              <BultenCard data={content} />
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <PaginationOne
            totalPosts={allData?.length}
            postPerPage={postPerPage}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
        </div>
      </Layout>
    </>
  )
}

export default BultenPage
