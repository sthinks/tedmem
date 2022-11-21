import React, { useEffect } from "react";
import SEO from "../../common/SEO";
import Layout from "../../common/Layout";
import BreadcrumbOne from "../../common/breadcrumb/BreadcrumbOne";
import CourseTypeTwo from "../../components/course/CourseTypeTwo";
import axiosClient from "../../utils/axiosClient";
import { useParams } from "react-router-dom";
import ReactPaginate from "react-paginate";

const slugify = function (text) {
    var trMap = {
        çÇ: "c",
        ğĞ: "g",
        şŞ: "s",
        üÜ: "u",
        ıİ: "i",
        öÖ: "o",
    };
    for (var key in trMap) {
        text = text.replace(new RegExp("[" + key + "]", "g"), trMap[key]);
    }
    return text
        .replace(/[^-a-zA-Z0-9\s]+/gi, "") // remove non-alphanumeric chars
        .replace(/\s/gi, "-") // convert spaces to dashes
        .replace(/[-]+/gi, "-") // trim repeated dashes
        .toLowerCase();
};

const CoruseTwo = () => {
    const [content, setContent] = React.useState(null);
    const [sekme, setSekme] = React.useState(null);

    let { slug } = useParams();
    const slugged = slugify(slug);

    const getWrites = async () => {
        await axiosClient
            .get(`/api/yazilar/${slugged}?page=1`)
            .then((res) => setContent(res.data));
    };

    useEffect(() => {
        getWrites();
    }, [slug]);

    const handleChange = async (data) => {
        let currentPage = data.selected + 1
        await axiosClient.get(`/api/yazilar/${slugged}?page=${currentPage}`).then(res => {setContent(res.data)})
    }

    const handleSekme = (string) => {
        setSekme([])
        const filtered = content?.data?.filter(item => item.year == string)
        setSekme(filtered)
    }
    return (
        <>
            <SEO title="Yazılar" />
            <Layout>
                <BreadcrumbOne
                    title="Yazılar"
                    rootUrl="/"
                    parentUrl="Anasayfa"
                    currentUrl="Covid-19"
                />
                <div className="edu-course-area edu-section-gap bg-color-white">
                    <div className="container">
                        <div className="row d-flex justify-content-center" style={{marginBottom:'70px'}}>
                            <div className="col-md-2 col-sm-12 mb-2">
                                <button onClick={() => handleSekme('2022')} className="btn btn-lg btn-block" style={{fontWeight:'bolder',fontSize:'15px',backgroundColor:'#8C8CA6',color:'white'}}>2022</button>
                            </div>
                            <div className="col-md-2 col-sm-12 mb-2">
                                <button onClick={() => handleSekme('2021')} className="btn btn-lg btn-block" style={{fontWeight:'bolder',fontSize:'15px',backgroundColor:'#8C8CA6',color:'white'}}>2021</button>
                            </div>
                            <div className="col-md-2 col-sm-12 mb-2">
                                <button onClick={() => handleSekme('2020')} className="btn btn-lg btn-block" style={{fontWeight:'bolder',fontSize:'15px',backgroundColor:'#8C8CA6',color:'white'}}>2020</button>
                            </div>
                            <div className="col-md-2 col-sm-12 mb-2">
                                <button onClick={() => handleSekme('2019')} className="btn btn-lg btn-block" style={{fontWeight:'bolder',fontSize:'15px',backgroundColor:'#8C8CA6',color:'white'}}>2019</button>
                            </div>
                            <div className="col-md-2 col-sm-12 mb-2">
                                <button onClick={() => handleSekme('2018')} className="btn btn-lg btn-block" style={{fontWeight:'bolder',fontSize:'15px',backgroundColor:'#8C8CA6',color:'white'}}>2018</button>
                            </div>
                            <div className="col-md-2 col-sm-12 mb-2">
                                <button onClick={() => setSekme([])} className="btn btn-lg btn-block"style={{fontWeight:'bolder',fontSize:'15px',backgroundColor:'#8C8CA6',color:'white'}}>Tümü</button>
                            </div>

                        </div>
                        {sekme?.length > 0 ? (
                         <div className="row g-5 mt--10">
                            {sekme?.map((item) => {
                                return (
                                    <CourseTypeTwo item={item} />
                                )
                            })}
                        </div>
                        ):(
                         <div className="row g-5 mt--10">
                            {content?.data?.map((item) => {
                                return (
                                    <CourseTypeTwo item={item} />
                                )
                            })}
                        </div>
                        ) }
                        <div className="row">
                            <div className='col-lg-12 mt--60 text-center'>
                                <ReactPaginate
                                 onPageChange={handleChange}
                                 breakLabel="..."
                                 nextLabel=">"
                                 previousLabel="<"
                                 containerClassName={'edu-pagination'}
                                 pageRangeDisplayed={5}
                                 pageCount={content?.last_page}
                                 activeClassName={'active'}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
};

export default CoruseTwo;
