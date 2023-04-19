import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { slugify } from '../../utils'
import SEO from '../../common/SEO'
import Layout from '../../common/Layout'
import PostOne from '../../components/post/PostOne'
import BreadcrumbOne from '../../common/breadcrumb/BreadcrumbOne'
import axiosClient from '../../utils/axiosClient'

const AuthorArchive = () => {
  const { slug } = useParams()
  const [data, setData] = React.useState(null)

  const getData = async () => {
    await axiosClient
      .get(`/api/author-details/${slug}`)
      .then((res) => setData(res.data))
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <SEO title={`${data?.name}`} />
      <Layout>
        <BreadcrumbOne
          title={` ${data?.name}`}
          rootUrl="/"
          parentUrl="Anasayfa"
          currentUrl="Blog Yazarı"
        />
        <div className="edu-elements-area edu-section-gap bg-color-white">
          <div className="container">
            <div className="row g-5">
              <div className="col-lg-12">
                <div className="row g-5">
                  {data?.blogs?.map((item) => (
                    <div className="col-lg-4 col-md-6 col-12" key={item.id}>
                      <PostOne data={item} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default AuthorArchive
