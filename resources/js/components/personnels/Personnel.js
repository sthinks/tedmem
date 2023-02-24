import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axiosClient from '../../utils/axiosClient'
import { FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import './personnel.css'

function Personnel() {
  const [content, setContent] = useState()
  const slug = useParams()
  const getPersonnel = async () => {
    await axiosClient.get(`/api/kadromuz/${slug.slug}`).then((res) => {
      setContent(res.data)
    })
  }
  useEffect(() => {
    getPersonnel()
  }, [])
  useEffect(() => {
    console.log(slug)
  }, [slug])
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-4">
          <div className="personel-card-info">
            <img src={content?.image} alt="" />
            <p style={{ fontSize: '2rem' }}>{content?.name}</p>
            <p>{content?.role}</p>
          </div>
        </div>
        <div className="col-lg-8">
          <p className='cv-info' dangerouslySetInnerHTML={{ __html: content?.cv }} />
        </div>
      </div>
    </div>
  )
}

export default Personnel
