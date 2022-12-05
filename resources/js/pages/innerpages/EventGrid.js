import React, { useEffect,useState } from "react";
import SEO from "../../common/SEO";
import Layout from "../../common/Layout";
import BreadcrumbOne from "../../common/breadcrumb/BreadcrumbOne";
import PaginationOne from "../../components/pagination/Pagination";
import EventTwo from "../../components/event/EventTwo";
import { useParams } from "react-router-dom";
import axiosClient from "../../utils/axiosClient";
import ReactPaginate from "react-paginate";
import PageBanner from "../../components/banner/PageBanner";
import banner from "../../assets/images/article-banner.png";
import "./EventGrid.css";
import EditionCard from "../../components/card/EditionCard";

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
    const [content, setContent] = useState([]);
    const [sekme, setSekme] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(4);
    
    let { slug } = useParams();

    //Pagination-start
    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    // const currentPosts = content.slice(firstPostIndex,lastPostIndex);
    

    //Pagination-end
    const btnValue = [
        {
            title: "Tümünü Gör",
            slug:""
        }, 
        {
            title:"Analiz",
            slug:"analiz-dizisi"
        },
        {
            title:"Değerlendirme",
            slug:"degerlendirme-dizisi"
        },
        {
            title:"Yayın",
            slug:"etkinlik-raporları"
        },
        {
            title:"Güncel",
            slug:"guncel-yayinlar-dizisi"
        }
    ];

    const slugged = slug && slugify(slug);
    const getPublics = async () => {
        await axiosClient
            .get(
                slugged != undefined
                    ? `/api/publics/${slugged}`
                    : `/api/publics?page=1`
            )
            .then((res) => {
                setContent(res.data);
            });
    };

   useEffect(()=> {
    axiosClient
    .get('/api/publics/')
    .then((res) => {
        console.log("data",res.data)
    });
   },[]) 
      



    useEffect(() => {
        getPublics();
    }, [slug]);

    const handleSekme = (string) => {
        setSekme([]);
        const filtered = content?.data?.filter(
            (item) => item.category_slug == string
        );
        setSekme(filtered);
    };

    const hanndleChange = async (data) => {
        let currentPage = data.selected + 1;
        await axiosClient
            .get(`/api/publics?page=${currentPage}`)
            .then((res) => {
                {
                    setContent(res.data);
                    console.log(res.data);
                }
            });
    };

    return (
        <>
            <SEO title="Event Grid" />
            <Layout>
                <PageBanner title="Yayınlar" image={banner} />
                <div className="edu-elements-area edu-section-gap bg-color-white">
                <div className="container d-flex flex-wrap">
                    
                        { slugged == undefined &&   
                        
                            btnValue.map((item) => (
                                <div className="btn-container ">
                                    <button
                                        type="button"
                                        onClick={() => handleSekme(item.slug)}
                                        className="event-button"
                                    >
                                        {item.title}
                                    </button>
                                </div>)
                        )}  
                   
      
                </div>
                <div className="container">
                        <div className="row">
                            {sekme?.length > 0
                                ? sekme?.map((item) => (
                                      <div className="col-lg-3" key={item.id}>
                                          <div
                                              className="card card-event event-card-container"
                                          >
                                              <EditionCard data={item} />
                                          </div>
                                      </div>
                                  ))
                                : content?.data?.map((item) => (
                                      <div className="col-lg-3" key={item.id}>
                                          <div
                                              className="card card-event event-card-container"
                                          >
                                              <EditionCard data={item} />
                                          </div>
                                      </div>
                                  ))}
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
};

export default EventGrid;
