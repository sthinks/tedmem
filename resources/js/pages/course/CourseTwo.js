import React, { useEffect, useState } from "react";
import SEO from "../../common/SEO";
import Layout from "../../common/Layout";
import CourseTypeTwo from "../../components/course/CourseTypeTwo";
import axiosClient from "../../utils/axiosClient";
import { useParams, Link, useNavigate } from "react-router-dom";
import banner from "../../assets/images/writes-page-banner.jpg";
import PageBanner from "../../components/banner/PageBanner";
import PaginationOne from "../../components/pagination/Pagination";
import Loading from "../../components/loading/Loading";
import { BsNewspaper } from "react-icons/bs";
import {
    FaSchool,
    FaVirus,
    FaScroll,
    FaMicrophone,
    FaHandRock,
    FaHandsHelping,
    FaGlasses,
} from "react-icons/fa";
import "./courseTwo.css";

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
    const [loading, setLoading] = useState(true);
    const [allData, setAllData] = useState([]);
    const [content, setContent] = useState([]);
    const [sekme, setSekme] = useState([]);
    const [selectYear, setSelectYear] = useState(0);
    const [allSekme, setAllSekme] = useState([]);
    const [selectCat, setSelectCat] = useState();
    const [total, setTotal] = useState();
    const [category, setCategory] = useState();
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(6);
    const navigate = useNavigate();
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
    const getCategories = async () => {
        const result = await axiosClient
            .get("/api/write-category")
            .then((res) => res.data);
        setCategory(result);
    };
    const getWrites = async () => {
        await axiosClient
            .get(`/api/yazilar/${slug}`)
            .then((res) => setContent(res.data))
            .then(() => setLoading(false));
    };
    useEffect(() => {
        setSelectCat(slug);
    }, [content]);
    useEffect(() => {
        getCategories();
    }, []);

    useEffect(() => {
        getWrites();
        setCurrentPage(1);
        setSekme([]);
        setSelectYear(0);
    }, [slug]);
    useEffect(() => {
        setCurrentPage(1);
        paginationHandlerData();
    }, [sekme]);

    useEffect(() => {
        paginationHandlerData();
        let count = 0;
        if (sekme.length > 0) {
            if (sekme[0].null) {
                setTotal(0);
            } else {
                sekme?.map((item) => (count = count + 1));
                setTotal(count);
            }
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
        if (sekme.length > 0) {
            const currentPosts = sekme?.slice(firstPostIndex, lastPostIndex);
            setAllSekme(currentPosts);
        }
        const currentPosts = content?.slice(firstPostIndex, lastPostIndex);
        setAllData(currentPosts);
    };

    const filteredByYear = (year) => {
        setSelectYear(year);
        if (year === 0) {
            setSekme([]);
        } else {
            const result = content.filter((item) => item.year == year);
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
            <SEO title="Yazılar" />
            <Layout>
                <PageBanner
                    title={"Yazılar"}
                    image={banner}
                    color="a"
                    id="bülten"
                />

                <div className="edu-course-area edu-section-gap bg-color-white">
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
                        <div className="row g-5 mt--10">
                            <div className="col-lg-2">
                                {category?.map((item, i) => (
                                    <a href={`/yazilar/${item.slug}`} key={i}>
                                        <div
                                            className={
                                                selectCat === item.slug
                                                    ? "d-flex justify-content-start align-items-center my-auto banner-one-link-active mb-2"
                                                    : "d-flex justify-content-start align-items-center my-auto banner-one-link mb-2"
                                            }
                                            onClick={() =>
                                                setSelectCat(item.name)
                                            }
                                        >
                                            <div className="writes-category-list">
                                                {item.name}
                                            </div>
                                        </div>
                                    </a>
                                ))}
                            </div>

                            <div className="col-lg-10" id="card-content">
                                <div className="row">
                                    {sekme.length > 0 ? (
                                        allSekme?.map((item, i) =>
                                            item.null ? (
                                                <div
                                                    className="col-lg-4"
                                                    key={i}
                                                >
                                                    {item.null}
                                                </div>
                                            ) : (
                                                <div className="col-lg-4">
                                                    <CourseTypeTwo
                                                        key={i}
                                                        data={item}
                                                        category={category}
                                                    />
                                                </div>
                                            )
                                        )
                                    ) : allData?.length > 0 ? (
                                        allData?.map((item, i) => (
                                            <div className="col-lg-4" key={i}>
                                                <CourseTypeTwo
                                                    data={item}
                                                    category={category}
                                                />
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

export default CoruseTwo;
