import React, { useEffect } from "react";
import SEO from "../../common/SEO";
import Layout from "../../common/Layout";
import BreadcrumbOne from "../../common/breadcrumb/BreadcrumbOne";
import axiosClient from "../../utils/axiosClient";
import BultenCourse from "../../components/course/BultenCourse";

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
    const formatted = content?.map((item) => {item.year = new Date(item.date).getFullYear(); return item})

    const handleSekme = (string) => {
        setSekme([])
        const filtered = formatted?.filter(item => item.year == string)
        setSekme(filtered)
    }
    return (
        <>
            <SEO title="Yazılar" />
            <Layout>
                <BreadcrumbOne
                    title="Bülten"
                    rootUrl="/"
                    parentUrl="Anasayfa"
                    currentUrl="Bülten"
                />
                <div className="edu-course-area edu-section-gap bg-color-white">
                    <div className="container">
                        <div className="d-flex justify-content-center">
                            <div className="col-md-2">
                            <button onClick={() => handleSekme('2022')} className="btn btn-lg btn-block" style={{fontWeight:'bolder',fontSize:'15px',backgroundColor:'#231f40',color:'white'}}>2022</button>
                            </div>
                            <div className="col-md-2">
                            <button onClick={() => handleSekme('2021')} className="btn btn-lg btn-block" style={{fontWeight:'bolder',fontSize:'15px',backgroundColor:'#231f40',color:'white'}}>2021</button>
                            </div>
                            <div className="col-md-2">
                            <button onClick={() => handleSekme('2020')} className="btn btn-lg btn-block" style={{fontWeight:'bolder',fontSize:'15px',backgroundColor:'#231f40',color:'white'}}>2020</button>
                            </div>
                            <div className="col-md-2">
                            <button onClick={() => handleSekme('2019')} className="btn btn-lg btn-block" style={{fontWeight:'bolder',fontSize:'15px',backgroundColor:'#231f40',color:'white'}}>2019</button>
                            </div>
                            <div className="col-md-2">
                            <button onClick={() => handleSekme('2018')} className="btn btn-lg btn-block" style={{fontWeight:'bolder',fontSize:'15px',backgroundColor:'#231f40',color:'white'}}>2018</button>
                            </div>
                            <div className="col-md-2">
                            <button onClick={() => setSekme([])} className="btn btn-lg btn-block" style={{fontWeight:'bolder',fontSize:'15px',backgroundColor:'#231f40',color:'white'}}>Tümü</button>
                            </div>
                        </div>
                        {sekme?.length > 0 ? (
                         <div className="row g-5 mt--10">
                            <BultenCourse data={sekme} />
                        </div>
                        ):(
                         <div className="row g-5 mt--10">
                            <BultenCourse data={content} />
                        </div>
                        ) }
                    </div>
                </div>
            </Layout>
        </>
    );
};

export default BultenPage;
