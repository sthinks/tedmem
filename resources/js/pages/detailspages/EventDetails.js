import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { FaFilePdf } from "react-icons/fa";
import SEO from "../../common/SEO";
import Layout from "../../common/Layout";
import axiosClient from "../../utils/axiosClient";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import { BsFillFileEarmarkFill } from "react-icons/bs";
import { BsFillFileEarmarkPersonFill } from "react-icons/bs";
import { BsFillShareFill } from "react-icons/bs";
import { Helmet } from "react-helmet";
import banner from "../../assets/images/eventdetails.png";
import BannerEvent from "../../components/banner-event/BannerEvent";
import benzerYazilar from "../../assets/images/benzer-yazilar.png";
import { FaFacebookF, FaTwitter, FaPinterestP } from "react-icons/fa";
import "./eventDetails.css";
import EditionCard from "../../components/card/EditionCard";
import { set } from "lodash";
import EventDetailSearch from "../../components/search/EventDetailSearch";

const EventDetails = () => {
    const { slug } = useParams();
    const [content, setContent] = useState([]);
    const [category, setCategory] = useState([]);
    const [allCategory, setAllCategory] = useState([]);
    const [similarDatas, setSimilarDatas] = useState([]);
    const [allData, setAllData] = useState([]);
    const [loading, setLoading] = useState(true);

    const [text, setText] = useState("");

    const handleClick = () => {
        console.log(content);
        setText(content.content);
        document.getElementById("devam").remove();
    };

    useEffect(() => {
        axiosClient
            .get("/api/publics/")
            .then((res) => {
                setAllData(res.data.data);
                let categories = res.data.data.map((item) => {
                    const a= [{category: item.category, slug: item.category_slug},]
                    return a;
                })
                console.log(categories);
                setAllCategory(categories);
                console.log(categories);

            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                setLoading(false);
                getAllCategory();
            });
    }, []);

    useEffect(() => {
        setLoading(true);
        axiosClient
            .get(`/api/public-details/${slug}`)
            .then((res) => {
                setContent(res.data);
                setCategory(res.data.category);
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

    useEffect(() => {
        filterHandler(category);
    }, [category]);

    const filterHandler = (value) => {
        const filteredItem = allData.filter((item) => {
            return item.category === value;
        });
        setSimilarDatas(filteredItem);
    };
  
    return (
        !loading && (
            <>
                <SEO title={content?.title} />
                <Layout>
                    <BannerEvent
                        title={content?.title}
                        image={banner}
                        date={content?.created_at}
                        author={content?.editor}
                    />

                    <div className="container event-detail ">
                        <div className="row d-flex event-detail-container">
                            <div className="col-lg-9 col-sm-12 event-detail-content">
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: content?.content,
                                    }}
                                />
                                <div className="row event-detail-share d-flex justify-content-between">
                                    <div className="col-xl-6 col-lg-6 col-sm-12">
                                        <div className="btn-container ">
                                            <button
                                                type="button"
                                                className="event-detail-button"
                                            >
                                                {content?.category}
                                            </button>
                                        </div>
                                    </div>
                                    <div className="d-flex col-xl-6 col-lg-6 col-sm-12 share-button-item">
                                        <h6 style={{ marginRight: "15px" }}>
                                            Paylaş
                                        </h6>
                                        <a
                                            href="https://www.facebook.com/tedmem"
                                            target="_blank"
                                        >
                                            <div
                                                className="social-media-icon-card  mb-3"
                                                style={{
                                                    backgroundColor: "#e9eef5",
                                                }}
                                            >
                                                <FaFacebookF
                                                    style={{ color: "#124d97" }}
                                                />
                                            </div>
                                        </a>
                                        <a
                                            href="https://twitter.com/tedmem"
                                            target="_blank"
                                        >
                                            <div
                                                className="social-media-icon-card ml-4 mb-3"
                                                style={{
                                                    backgroundColor: "#ebf6fe",
                                                }}
                                            >
                                                <FaTwitter
                                                    style={{ color: "#01a4f4" }}
                                                />
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
                                    <img
                                        className="event-detail-same"
                                        src={benzerYazilar}
                                    />
                                    <p>
                                        {" "}
                                        Neque porro quisquam est qui dolorem
                                        ipsum quia dolor sit amet, consectetur,
                                        adipisci velit...
                                    </p>
                                    <div className="row">
                                        {similarDatas?.map((item) => (
                                            <div className="col-xl-4 mt-5">
                                                <div className="event-detail-similar-posts">
                                                    <EditionCard data={item} />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 event-detail-cateogry">
                                <EventDetailSearch data={allData} />
                                <h5 className="detail-category">Kategoriler</h5>
                                {allCategory.map((item) => (
                                 
                                  item.map((data) => (
                                    <div>
                                        <li className="category-list-item">
                                        <Link to={`/yayinlar/${data.slug}`}>{data.category}</Link>
                                        </li>
                                    </div>
                                  ))
                                    
                                ))}
                            </div>
                        </div>
                    </div>
                </Layout>
            </>
        )
    );
};
export default EventDetails;
