import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Nav from "./Nav";
import HeaderSticky from "./HeaderSticky";
import ResponsiveMenu from "./ResponsiveMenu";
import Logo from "../../assets/images/temem-logoo.png";
import { FiSearch } from "react-icons/fi";
import MobilSearch from "../../components/mobil-search/MobilSearch";
import { AiOutlineMenu } from "react-icons/ai";
import axiosClient from "../../utils/axiosClient";
import "./headerOne.css";

const HeaderOne = ({ styles, disableSticky }) => {
    const [value, setValue] = useState("");
    const [mobilSearchActive, setMobileSearch] = useState(false);
    const [offcanvasShow, setOffcanvasShow] = useState(false);
    const [mobilNavActive, setmobilNavActive] = useState(false);
    const [allSearchData, setSearchData] = useState();
    const [writes, setWrites] = useState([]);
    const [publicsCat, setPublicsCat] = useState([]);
    const [writeCat, setWriteCat] = useState([]);
    const [eventCat, setEventCat] = useState([]);

    const [writesResultsNav, setWritesResults] = useState([]);
    const [query, setQuery] = useState("");
    const [searchPopup, setSearchPopup] = useState(false);

    const navCatHandler = async () => {
        const writeCat = await axiosClient
            .get("/api/write-category")
            .then((res) => res.data);
        const publicCat = await axiosClient
            .get("/api/public-category")
            .then((res) => res.data);
        const eventCat = await axiosClient
            .get("/api/event-category")
            .then((res) => res.data);

        if (writeCat && publicCat && eventCat) {
            setPublicsCat(publicCat);
            setWriteCat(writeCat);
            setEventCat(eventCat);
        }
    };
    const navigate = useNavigate();
    useEffect(() => {
        {
            if (value.length > 0) {
                const delayDebounceFn = setTimeout(async () => {
                    try {
                        const response = await axiosClient.get(
                            `/api/search/${value}`
                        );
                        const result = response.data;
                        setSearchData(result);
                    } catch (err) {
                        console.log(err);
                    }
                }, 1000);
                return () => clearTimeout(delayDebounceFn);
            }
        }
    }, [value]);

    useEffect(() => {
        navCatHandler();
    }, []);
    const MobilSearchFunction = () => {
        setMobileSearch(!mobilSearchActive);
    };

    const onCanvasHandler = () => {
        setOffcanvasShow((prevState) => !prevState);
    };

    const onSearchHandler = () => {
        setSearchPopup((prevState) => !prevState);
    };

    if (searchPopup) {
        document.body.classList.add("search-popup-active");
    } else {
        document.body.classList.remove("search-popup-active");
    }
    const inputBlur = () => {
        setTimeout(() => {
            setSearchData([]);
            setValue("");
        }, 500);
    };
    const sticky = HeaderSticky(50);
    const classes = sticky ? "sticky" : "";
    const stickyStatus = disableSticky ? "" : " header-sticky";
    const inputClickHandler = (e) => {
        if (e.key === "Enter") {
            navigate(`search-page/${value}`);
        }
    };
    return (
        <>
            <header
                className={`edu-header disable-transparent header-background ${stickyStatus} header-transparent  ${
                    styles || ""
                } ${classes || ""}`}
            >
                <div className="">
                    <div className="d-flex align-items-center">
                        <div className="col-lg-4 col-xl-4 col-md-4 col-4 logo-container-item">
                            <div className="logo">
                                <Link to="/" className="d-flex">
                                    <div className="logo-container-header d-flex align-items-center ">
                                        <img
                                            className="logo-light"
                                            src={Logo}
                                            alt="Main Logo"
                                        />
                                    </div>
                                    <div className="logo-text">
                                        <p>Ortak Paydamız Eğitim</p>{" "}
                                    </div>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-6 col-xl-6 d-flex justify-content-end header-one-navbar">
                            <nav className="mainmenu-nav">
                                <Nav
                                    publicsCat={publicsCat}
                                    writeCat={writeCat}
                                    eventCat={eventCat}
                                />
                            </nav>
                        </div>

                        <div className="col-lg-2 col-xl-2 d-flex justify-content-end header-one-searchbar">
                            <div className="header-right">
                                <div className="header-quote">
                                    <div className="quote-icon quote-search">
                                        <input
                                            className="header-one-inputbar"
                                            placeholder="Arama yapın.."
                                            onBlur={inputBlur}
                                            onKeyDown={(e) =>
                                                inputClickHandler(e)
                                            }
                                            value={value}
                                            onChange={(e) =>
                                                setValue(e.target.value)
                                            }
                                        />
                                        <FiSearch className="header-one-search-icon" />
                                        <div className="header-input-result-detail">
                                            {value && allSearchData && (
                                                <div className="banner-one-results">
                                                    <ul>
                                                        {allSearchData
                                                            ?.slice(0, 6)
                                                            .map((item, i) => {
                                                                if (
                                                                    item.category_slug
                                                                ) {
                                                                    return (
                                                                        <Link
                                                                            className="header-search-text"
                                                                            key={
                                                                                i
                                                                            }
                                                                            to={`/yayinlar-detay/${item.slug}`}
                                                                        >
                                                                            {
                                                                                item.title
                                                                            }
                                                                        </Link>
                                                                    );
                                                                } else if (
                                                                    item.speaker
                                                                ) {
                                                                    return (
                                                                        <Link
                                                                            key={
                                                                                i
                                                                            }
                                                                            to={`/etkinlik-detay/${item.slug}`}
                                                                        >
                                                                            {
                                                                                item.title
                                                                            }
                                                                        </Link>
                                                                    );
                                                                } else {
                                                                    return (
                                                                        <Link
                                                                            key={
                                                                                i
                                                                            }
                                                                            to={`/yazilar-detay/${item.slug}`}
                                                                        >
                                                                            {
                                                                                item.title
                                                                            }
                                                                        </Link>
                                                                    );
                                                                }
                                                            })}
                                                    </ul>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-1 mobil-search-icon">
                            <FiSearch
                                className="mobile-search-icon-popup"
                                onClick={() => MobilSearchFunction()}
                            />
                        </div>

                        <div className="col-sm-1 hamberger-menu">
                            <div className="hamberger quote-icon d-block d-xl-none">
                                <button
                                    className="hamberger-button"
                                    onClick={() => onCanvasHandler()}
                                >
                                    <AiOutlineMenu
                                        className="position-absolute"
                                        style={{ top: "6px", color: "black" }}
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <ResponsiveMenu
                show={offcanvasShow}
                onClose={onCanvasHandler}
                showSearch={searchPopup}
                onSearch={onSearchHandler}
                setIsActive={setmobilNavActive}
                mobilNavActive
                writes={writes}
                writeCat={writeCat}
                publicsCat={publicsCat}
            />
            <MobilSearch
                isActive={mobilSearchActive}
                setIsActive={setMobileSearch}
                allSearchData={allSearchData}
            />
        </>
    );
};

export default HeaderOne;
