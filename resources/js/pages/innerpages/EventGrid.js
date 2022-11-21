import React, { useEffect } from 'react';
import SEO from '../../common/SEO';
import Layout from '../../common/Layout';
import BreadcrumbOne from '../../common/breadcrumb/BreadcrumbOne';
import PaginationOne from '../../components/pagination/PaginationOne';
import EventTwo from '../../components/event/EventTwo';
import { useParams } from "react-router-dom";
import axiosClient from '../../utils/axiosClient';
import ReactPaginate from 'react-paginate';

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

const EventGrid = () => {
    const [content, setContent] = React.useState([])
    const [sekme, setSekme] = React.useState(null)

    let { slug } = useParams();
    const slugged = slug && slugify(slug);

    const getPublics = async () =>{
        await axiosClient.get(slugged != undefined ? `/api/publics/${slugged}` : `/api/publics?page=1`).then(res => setContent(res.data))
    }

    useEffect(() => {
        getPublics()
    }, [slug ])

    const handleSekme = (string) => {
        setSekme([])
        const filtered = content?.data?.filter(item => item.category_slug == string)
        setSekme(filtered)
    }

    const hanndleChange = async (data) => {
        let currentPage = data.selected + 1
        await axiosClient.get(`/api/publics?page=${currentPage}`).then(res => {setContent(res.data)})
    }

    return (
        <>
            <SEO title="Event Grid" />
            <Layout>
                <BreadcrumbOne
                    title="Yayınlar"
                    rootUrl="/"
                    parentUrl="Anasayfa"
                    currentUrl="Yayınlar"
                />
                <div className="edu-elements-area edu-section-gap bg-color-white">
                    <div className="container">
                        {slugged == undefined && (
                            <div className='row d-flex justify-content-between' style={{marginBottom:'70px'}}>
                            <div className='col-md-2 col-sm-12 mb-2'>
                                <button type='button' onClick={() => setSekme([])} className={`btn btn-lg btn-block`} style={{fontWeight:'bolder',fontSize:'15px',backgroundColor:'#8C8CA6',color:'white'}}>Tümü</button>
                            </div>
                            <div className='col-md-2 col-sm-12 mb-2'>
                                <button type='button' onClick={() => handleSekme('analiz-dizisi')} className={`btn btn-lg btn-block`} style={{fontWeight:'bolder',fontSize:'15px',backgroundColor:'#8C8CA6',color:'white'}}>Analiz Dizisi</button>
                            </div>
                            <div className='col-md-2 col-sm-12 mb-2'>
                                <button type='button' onClick={() => handleSekme('degerlendirme-dizisi')} className={`btn btn-lg btn-block`} style={{fontWeight:'bolder',fontSize:'15px',backgroundColor:'#8C8CA6',color:'white'}}>Değerlendirme Dizisi</button>
                            </div>
                            <div className='col-md-2 col-sm-12 mb-2'>
                                <button type='button' onClick={() => handleSekme('etkinlik-raporları')} className={`btn btn-lg btn-block`} style={{fontWeight:'bolder',fontSize:'15px',backgroundColor:'#8C8CA6',color:'white'}}>Etkinlik Raporları</button>
                            </div>
                            <div className='col-md-2 col-sm-12 mb-2'>
                                <button type='button' onClick={() => handleSekme('guncel-yayinlar-dizisi')} className={`btn btn-lg btn-block`} style={{fontWeight:'bolder',fontSize:'15px',backgroundColor:'#8C8CA6',color:'white'}}>Güncel Yayınlar Dizisi</button>
                            </div>
                            </div>
                        )}

                        <div className="row g-5">

                        {sekme?.length > 0 ? (
                            sekme?.map( ( item ) => (
                                <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={item.id}>
                                    <EventTwo data={item} />
                                </div>
                            ) )
                        ):(
                            content?.data?.map( ( item ) => (
                                <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={item.id}>
                                    <EventTwo data={item} />
                                </div>
                            ) )

                        )}

                        </div>
                        {slugged == undefined && (

                        <div className="row">
                            <div className='col-lg-12 mt--60 text-center'>
                                <ReactPaginate
                                 onPageChange={hanndleChange}
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
                        )}
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default EventGrid;
