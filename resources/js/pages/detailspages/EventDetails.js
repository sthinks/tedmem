import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import SEO from "../../common/SEO";
import Layout from "../../common/Layout";
import axiosClient from "../../utils/axiosClient";
import banner from "../../assets/images/eventdetails.png";
import BannerEvent from "../../components/banner-event/BannerEvent";
import Loading from "../../components/loading/Loading";
import Pdfİcon from "../../../../public/images/pdficons.png";
import { FaFacebookF, FaTwitter, FaPinterestP } from "react-icons/fa";
import "./eventDetails.css";
import EditionCard from "../../components/card/EditionCard";
import EventDetailSearch from "../../components/search/EventDetailSearch";
import { FacebookShareButton, TwitterShareButton } from "react-share";
import ReactPlayer from "react-player";
import { BsDownload } from "react-icons/bs";
const EventDetails = () => {
    const { slug } = useParams();
    const [content, setContent] = useState([]);
    const [allCategory, setAllCategory] = useState();
    const [similarData, setSimilarData] = useState();
    const [allData, setAllData] = useState([]);
    const [text, setText] = useState();
    const [loading, setLoading] = useState(true);

    const similarDataFetch = async () => {
        const result = await axiosClient
            .get(`/api/publics/${content?.category_info.slug}`)
            .then((res) => res.data);

        setSimilarData(result.slice(0, 3));
    };
    const getAllPublic = async () => {
        await axiosClient
            .get("/api/publics")
            .then((res) => setAllData(res.data));
    };
    const getPublicCategory = async () => {
        await axiosClient
            .get("/api/public-category")
            .then((res) => setAllCategory(res.data));
    };
    const filterCategoryDetail = (cat_id) => {
        const cat = allCategory?.filter((item) => item.id === cat_id);
        return cat[0]?.name;
    };

    useEffect(() => {
        getPublicCategory();
        getAllPublic();
    }, []);
    useEffect(() => {
        similarDataFetch();
    }, [content]);

    useEffect(() => {
        axiosClient
            .get(`/api/public-details/${slug}`)
            .then((res) => {
                setContent(res.data);

                setText(
                    res.data.content
                        .replace(
                            /<br>(?=(?:\s*<[^>]*>)*$)|(<br>)|<[^>]*>/gi,
                            (x, y) => (y ? " & " : "")
                        )
                        .slice(0, 250)
                );
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [slug]);

    return loading ? (
        <Loading />
    ) : (
        <>
            <SEO title={content?.title} />
            <Layout>
                <BannerEvent
                    title={content?.title}
                    image={banner}
                    date={content?.publish_year}
                    author={content?.publisher}
                    publish_house={content?.publish_house}
                />

                <div className="container event-detail ">
                    <div className="row d-flex event-detail-container">
                        <div className="col-lg-9 col-sm-12 event-detail-content">
                            <div
                                className="event-detail-text"
                                dangerouslySetInnerHTML={{
                                    __html: content?.content,
                                }}
                            />
                            {content?.video_url != null && (
                                <div
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                    }}
                                >
                                    <ReactPlayer
                                        url={`${content?.video_url}`}
                                    />
                                </div>
                            )}

                            {content?.infografik !== "no data" && (
                                <div>
                                    <h3 className="d-flex justify-content-center">
                                        Özet İnfografik
                                    </h3>
                                    <iframe
                                        src={content?.infografik}
                                        height="500px"
                                        frameborder="0"
                                    ></iframe>
                                </div>
                            )}

                            {content?.pdf_link.map((item, i) => (
                                <a href={item[0]} target="_blank" key={i}>
                                    <div className="event-detail-button-pdf mb-2 mt-4">
                                        <div>
                                            <img
                                                style={{
                                                    width: "40px",
                                                    margin: "5px",
                                                }}
                                                src={Pdfİcon}
                                                alt="Pdf"
                                            />
                                        </div>
                                        <p>PDF'i indir ({item[1]})</p>
                                        <BsDownload
                                            style={{
                                                fontSize: "3rem",
                                                color: "black",
                                                margin: "10px",
                                                width: "10%",
                                            }}
                                        />
                                    </div>
                                </a>
                            ))}
                            <div className="row event-detail-share d-flex justify-content-between">
                                <div className="col-xl-6 col-lg-6 col-sm-12">
                                    <div className="btn-container ">
                                        <button
                                            type="button"
                                            className="event-detail-button"
                                        >
                                            {allCategory &&
                                                filterCategoryDetail(
                                                    content?.category_id
                                                )}
                                        </button>
                                    </div>
                                </div>
                                <div className="d-flex col-xl-6 col-lg-6 col-sm-12 share-button-item">
                                    <h6 style={{ marginRight: "15px" }}>
                                        Paylaş
                                    </h6>
                                    <a target="_blank">
                                        <div
                                            className="social-media-icon-card  mb-3"
                                            style={{
                                                backgroundColor: "#e9eef5",
                                            }}
                                        >
                                            <FacebookShareButton
                                                url={`http://192.168.1.14/yayinlar-detay/${slug}`}
                                                hashtag={
                                                    "#Tedmem #OrtakPaydamıEğitim"
                                                }
                                            >
                                                <FaFacebookF
                                                    style={{ color: "#124d97" }}
                                                />
                                            </FacebookShareButton>
                                        </div>
                                    </a>

                                    <a target="_blank">
                                        <div
                                            className="social-media-icon-card ml-4 mb-3"
                                            style={{
                                                backgroundColor: "#ebf6fe",
                                            }}
                                        >
                                            <TwitterShareButton
                                                url={`https://tedmem.loca.lt/yayinlar-detay/${slug}`}
                                                title={content?.title}
                                                via={"Tedmem"}
                                            >
                                                <FaTwitter
                                                    style={{ color: "#01a4f4" }}
                                                />
                                            </TwitterShareButton>
                                        </div>
                                    </a>
                                    <a
                                        href="https://twitter.com/tedmem"
                                        target="_blank"
                                    >
                                        <div
                                            className="social-media-icon-card ml-4 mb-3"
                                            style={{
                                                backgroundColor: "#fce7ea",
                                            }}
                                        >
                                            <FaPinterestP
                                                style={{ color: "#da2347" }}
                                            />
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="event-detail-footer">
                                <div className="brush-animation-content-detail">
                                    <div className="brush-anim-detail">
                                        <div className="brush-title-detail">
                                            Benzer Yazılar
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    {/* Benzer kartlar sadece 4 adet olacak şekilde slice yapıldı. */}
                                    {similarData?.map((item, i) => (
                                        <div
                                            className="col-xl-4 mt-5 p-2"
                                            key={i}
                                        >
                                            <div className="event-detail-similar-posts">
                                                <EditionCard data={item} />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 event-detail-cateogry">
                            <EventDetailSearch />

                            <h5 className="detail-category">Kategoriler</h5>

                            {allCategory?.map((item, i) => (
                                <div key={i}>
                                    <li className="category-list-item">
                                        <Link to={`/yayinlar/${item.slug}`}>
                                            {item.name}
                                        </Link>
                                    </li>
                                </div>
                            ))}
                            {!allCategory && (
                                <div>İlgili kategori bulunamadı.</div>
                            )}
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
};
export default EventDetails;
