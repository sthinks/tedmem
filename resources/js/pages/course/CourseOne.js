import React from 'react'
import SEO from '../../common/SEO'
import Layout from '../../common/Layout'
import BreadcrumbOne from '../../common/breadcrumb/BreadcrumbOne'
import { useParams } from 'react-router-dom'

const CourseOne = () => {
  const { slug } = useParams()

  const [result, setResult] = React.useState(null)
  const [query, setQuery] = React.useState('')

  const handleQuery = () => {
    var blogResults = blog?.filter(
      (data) =>
        JSON.stringify(data).toLowerCase().indexOf(query.toLowerCase()) !== -1,
    )
    var writesResults = writes?.filter(
      (data) =>
        JSON.stringify(data).toLowerCase().indexOf(query.toLowerCase()) !== -1,
    )
    var kadroResults = kadro?.filter(
      (data) =>
        JSON.stringify(data).toLowerCase().indexOf(query.toLowerCase()) !== -1,
    )

    const final = [...blogResults, ...writesResults, ...kadroResults]
    setResult(final)
  }
  return (
    <>
      <SEO title="Course Style - 1" />
      <Layout>
        <BreadcrumbOne
          title="Arama Sonuçları"
          rootUrl="/"
          parentUrl="Home"
          currentUrl="Course Style - 1"
        />
        <div className="edu-course-area edu-section-gap bg-color-white">
          <div className="container">
            <div className="row g-5 mt--10"></div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default CourseOne
