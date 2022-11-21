import React, { useEffect } from 'react';
import SEO from '../../common/SEO';
import Layout from '../../common/Layout';
import BreadcrumbOne from '../../common/breadcrumb/BreadcrumbOne';
import CourseTypeThree from '../../components/course/CourseTypeThree';
import axiosClient from '../../utils/axiosClient';

const CourseThree = () => {
    const [content, setContent] = React.useState(null)

    const getEvents = async () =>{
        await axiosClient.get(`/api/events`).then(res => setContent(res.data))
    }

    useEffect(() => {
        getEvents()
    }, [])

    return (
        <>
            <SEO title="TEDMEM | Etkinlikler" />
            <Layout>
                <BreadcrumbOne
                    title="Etkinlikler"
                    rootUrl="/"
                    parentUrl="Anasayfa"
                    currentUrl="Etkinlikler"
                />
                <div className="edu-course-area edu-section-gap bg-color-white">
                    <div className="container">
                        <div className="row g-5 mt--10">
                            {
                                content?.map((item) => (
                                    <div className="col-12 col-sm-6 col-lg-4" key={ item.id }>
                                        <CourseTypeThree data={item} />
                                    </div>
                                ) )
                            }
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default CourseThree;
