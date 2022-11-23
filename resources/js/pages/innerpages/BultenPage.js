import React, { useEffect } from "react";
import SEO from "../../common/SEO";
import Layout from "../../common/Layout";
import BreadcrumbOne from "../../common/breadcrumb/BreadcrumbOne";
import axiosClient from "../../utils/axiosClient";
import BultenCourse from "../../components/course/BultenCourse";
import PageBanner from "../../components/banner/PageBanner";
import banner from "../../assets/images/bulletin-image.png";

const BultenPage = () => {
    const [content, setContent] = React.useState(null);
    const [sekme, setSekme] = React.useState(null);

    const getWrites = async () => {
        await axiosClient
            .get(`/api/bulten`)
            .then((res) => setContent(res.data));
    };

    useEffect(() => {
        getWrites();
    }, []);
    const formatted = content?.map((item) => {
        item.year = new Date(item.date).getFullYear();
        return item;
    });

    const handleSekme = (string) => {
        setSekme([]);
        const filtered = formatted?.filter((item) => item.year == string);
        setSekme(filtered);
    };
    return (
        <>
            <SEO title="Yazılar" />
            <Layout>
                <PageBanner title="Bültenler" image={banner} />
                <div className="edu-course-area edu-section-gap bg-color-white">
                    <div className="container">
                        <div className="row">
                            <div className="card">
                                <div className="card-body">
                                    This is some text within a card body.
                                </div>
                            </div>
                        </div>
                        {sekme?.length > 0 ? (
                            <div className="row g-5 mt--10">
                                <BultenCourse data={sekme} />
                            </div>
                        ) : (
                            <div className="row g-5 mt--10">
                                <BultenCourse data={content} />
                            </div>
                        )}
                    </div>
                </div>
            </Layout>
        </>
    );
};

export default BultenPage;
