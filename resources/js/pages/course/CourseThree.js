import React, { useEffect, useState } from "react";
import SEO from "../../common/SEO";
import Layout from "../../common/Layout";
import BreadcrumbOne from "../../common/breadcrumb/BreadcrumbOne";
import CourseTypeThree from "../../components/course/CourseTypeThree";
import axiosClient from "../../utils/axiosClient";
import PageBanner from "../../components/banner/PageBanner";
import banner from "../../assets/images/activity-banner.png";
import PaginationOne from "../../components/pagination/Pagination";
import Loading from "../../components/loading/Loading";
import "./Course.css";
import { useParams, Link } from "react-router-dom";
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

const CourseThree = () => {
    const [content, setContent] = useState([]);
    const [sekme, setSekme] = useState([]);
    const [total, setTotal] = useState();
    const [publicCategory, setPublicCategory] = useState();
    const [navigateBtn, setNavigateBtn] = useState();
    const [selectCat, setSelectCat] = useState("Tümü");
    const [selectYear, setSelectYear] = useState(0);
    const [button, setButton] = useState();
    const [allData, setAllData] = useState();
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(4);
    const [loading, setLoading] = useState(true);
    const scrollToTop = () => {
        document.body.scroll({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    };
    const yearButton = [
        {
            year: new Date().getFullYear(),
        },
        {
            year: new Date().getFullYear() - 1,
        },
        {
            year: new Date().getFullYear() - 2,
        },
        {
            year: new Date().getFullYear() - 3,
        },
        {
            year: new Date().getFullYear() - 4,
        },
        {
            year: new Date().getFullYear() - 5,
        },
        {
            year: new Date().getFullYear() - 6,
        },
        {
            year: new Date().getFullYear() - 7,
        },
        {
            year: new Date().getFullYear() - 8,
        },
        {
            year: new Date().getFullYear() - 9,
        },
        {
            year: new Date().getFullYear() - 10,
        },
        {
            year: new Date().getFullYear() - 11,
        },
    ];

    let { slug } = useParams();
    const slugged = slug && slugify(slug);

    const getPublics = async () => {
        await axiosClient
            .get(slugged ? `/api/events/${slugged}` : `/api/events`)
            .then((res) => {
                setContent(res.data);
                setLoading(false);
            });
    };
    const getEventsCategory = async () => {
        await axiosClient
            .get("/api/event-category")
            .then((res) => setPublicCategory(res.data));
    };

    useEffect(() => {
        getEventsCategory();
        if (slug === undefined) {
            setSelectCat("Tümü");
        } else setSelectCat(slug);
    }, []);

    useEffect(() => {
        getPublics();
        setCurrentPage(1);
        setSekme([]);
        setSelectYear(0);
    }, [slugged]);
    useEffect(() => {
        setCurrentPage(1);
    }, [sekme]);

    useEffect(() => {
        paginationHandlerData();
        let count = 0;
        if (sekme.length > 0) {
            sekme?.map((item) => (count = count + 1));
            setTotal(count);
        } else {
            content?.map((item) => (count = count + 1));
            setTotal(count);
        }
    }, [currentPage, content, sekme]);
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, [currentPage]);
    const paginationHandlerData = () => {
        const lastPostIndex = currentPage * postsPerPage;
        const firstPostIndex = lastPostIndex - postsPerPage;
        const currentPosts = content?.slice(firstPostIndex, lastPostIndex);
        setAllData(currentPosts);
    };
    const dateHandler = (date) => {
        const result = new Date(date).getFullYear();
        return result;
    };
    const filteredByYear = (year) => {
        setSelectYear(year);
        if (year == 0) {
            setSekme([]);
        } else {
            const result = content.filter(
                (item) => dateHandler(item.date) == year
            );
            if (result.length === 0) {
                const nullData = [
                    {
                        null: "Aradığınız tarihte içerik bulunamadı.",
                    },
                ];
                setSekme(nullData);
            } else {
                setSekme(result);
            }
        }
    };
    return loading ? (
        <Loading />
    ) : (
        <>
            <SEO title="Event Grid" />
            <Layout>
                <PageBanner title="Etkinlikler" image={banner} />
                <div className="edu-elements-area edu-section-gap bg-color-white">
                    <div className="container">
                        <div
                            className="row d-flex justify-content-center"
                            style={{ marginBottom: "35px" }}
                        >
                            <select
                                className="custom-select"
                                id="inputGroupSelect01"
                                style={{ height: "45px", padding: "10px" }}
                                onChange={(e) => filteredByYear(e.target.value)}
                            >
                                <option defaultValue>
                                    Yıla göre filtrele.
                                </option>
                                <option value={0}>Tümü</option>
                                {yearButton.map((item, i) => (
                                    <option value={item.year} key={i}>
                                        {item.year}
                                    </option>
                                ))}
                            </select>
                            {yearButton.map((item, i) => (
                                <div
                                    key={i}
                                    className="col-lg-2 col-sm-6 mb-2 p-1 year-container"
                                >
                                    <button
                                        onClick={() =>
                                            filteredByYear(item.year)
                                        }
                                        className={
                                            selectYear === item.year
                                                ? "btn-lg btn-block course-button-top-active"
                                                : "btn btn-lg btn-block course-button-top"
                                        }
                                    >
                                        {item.year}
                                    </button>
                                </div>
                            ))}
                            <div className="col-lg-2 col-sm-6 mb-2 year-container">
                                <a
                                    href={
                                        window.screen.width <= 991
                                            ? "#card-content"
                                            : "#a"
                                    }
                                >
                                    <button
                                        onClick={() => filteredByYear(0)}
                                        className={
                                            selectYear === 0
                                                ? "btn-lg btn-block course-button-top-active"
                                                : "btn btn-lg btn-block course-button-top"
                                        }
                                    >
                                        Tümü
                                    </button>
                                </a>
                            </div>
                        </div>

                        <div className="row justify-content-between">
                            <div className="col-lg-2 mt-5">
                                <a href={`/etkinlikler`}>
                                    <div
                                        className={
                                            selectCat === "Tümü"
                                                ? "d-flex justify-content-start align-items-center my-auto banner-one-link-active mb-2"
                                                : "d-flex justify-content-start align-items-center my-auto banner-one-link mb-2"
                                        }
                                        onClick={() => setSelectCat("Tümü")}
                                    >
                                        <div className="writes-category-list">
                                            Tümü
                                        </div>
                                    </div>
                                </a>
                                {publicCategory?.map((item, i) => (
                                    <a
                                        href={`/etkinlikler/${item.slug}`}
                                        key={i}
                                    >
                                        <div
                                            className={
                                                selectCat === item.slug
                                                    ? "d-flex justify-content-start align-items-center my-auto banner-one-link-active mb-2"
                                                    : "d-flex justify-content-start align-items-center my-auto banner-one-link mb-2"
                                            }
                                            onClick={() =>
                                                setSelectCat(item.slug)
                                            }
                                        >
                                            <div className="writes-category-list">
                                                {item.name}
                                            </div>
                                        </div>
                                    </a>
                                ))}
                            </div>
                            <div className="col-lg-10">
                                <div className="row">
                                    {sekme.length > 0 ? (
                                        sekme?.map((item, i) =>
                                            item.null ? (
                                                <div
                                                    className="col-lg-6 p-2"
                                                    key={i}
                                                >
                                                    {item.null}
                                                </div>
                                            ) : (
                                                <div
                                                    className="col-lg-6 p-2"
                                                    key={i}
                                                >
                                                    <div className="event-card-container">
                                                        <CourseTypeThree
                                                            data={item}
                                                        />
                                                    </div>
                                                </div>
                                            )
                                        )
                                    ) : allData?.length > 0 ? (
                                        allData?.map((item, i) => (
                                            <div
                                                className="col-lg-6 p-2"
                                                key={i}
                                            >
                                                <div className="event-card-container">
                                                    <CourseTypeThree
                                                        data={item}
                                                    />
                                                </div>
                                            </div>
                                        ))
                                    ) : (
                                        <div>
                                            Aradığınız kategoride içerik
                                            bulunamadı.
                                        </div>
                                    )}
                                </div>
                                {total > 0 ? (
                                    <div className="d-flex justify-content-center">
                                        <PaginationOne
                                            totalPosts={total}
                                            postPerPage={postsPerPage}
                                            setCurrentPage={setCurrentPage}
                                            currentPage={currentPage}
                                        />
                                    </div>
                                ) : (
                                    <></>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
};
export default CourseThree;
