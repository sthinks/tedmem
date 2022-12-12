import React from "react";
import "../../assets/css/style.css";
import banner from "../../assets/images/Logo-orjinal.png";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/custom-animations/fall-animation.css";
import { Link, useNavigate } from "react-router-dom";
import PageBanner from "./PageBanner";
import Chat from "../../assets/images/icon/chat.png";
import Comment from "../../assets/images/icon/comment.png";
import News from "../../assets/images/icon/News.png";
import Papper from "../../assets/images/icon/Papper.png";
import Reactİcon from "../../assets/images/icon/React.png";
import Ticket from "../../assets/images/icon/Ticket.png";
import "./bannerOne.css";
import { useEffect } from "react";

const BannerOne = ({ data }) => {
    const [writesResults, setWritesResults] = React.useState([]);
    const [query, setQuery] = React.useState("");

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            handleQuery();
        }
    };
    useEffect(() => {
        console.log("search",data);
    },[query])
    const handleQuery = (e) => {
        var writesResults = data?.filter((data) =>
            data.title.toLowerCase().match(query)
        );

        setWritesResults(writesResults);

        if (e === "") {
            setWritesResults([]);
        }
    };

    return (
        <div className="">
            <div className="row align-items-center">
                <div>
                    <PageBanner
                        title="Ortak Paydamız <br /> Eğitim"
                        image={banner}
                        color="none"
                    />
                    <div
                        style={{
                            backgroundColor: "#rgb(255 255 255 / 26%)",
                            position: "relative",
                        }}
                    >
                        <div className="container h-100">
                            <div className="row sad text-center ">
                                <div className="row d-flex justify-content-center align-items-center">
                                    <div>
                                        <div className="row d-flex justify-content-center mt-5">
                                            <div className="col-md-12 mt-5">
                                                <div className="d-flex">
                                                    <input
                                                        className="bg-white mb-2 py-2 banner-one-input"
                                                        onKeyDown={
                                                            handleKeyDown
                                                        }
                                                        onChange={(e) => {
                                                            setQuery(
                                                                e.target.value
                                                            );
                                                            handleQuery(
                                                                e.target.value
                                                            );
                                                        }}
                                                        type="text"
                                                        placeholder="Yazılarda Arayın..."
                                                    />
                                                    <i className="icon-search-line pt-3 search-icon"></i>
                                                </div>
                                                {writesResults?.length > 0 &&
                                                    writesResults
                                                        .slice(0, 8)
                                                        .map((item) => (
                                                            <Link
                                                                to={
                                                                    item.category_id
                                                                        ? `/yazilar-detay/${item.slug}`
                                                                        : `/yayinlar-detay/${item.slug}`
                                                                }
                                                            >
                                                                <div className="border mb-2 input-result">
                                                                    {item.title}
                                                                </div>
                                                            </Link>
                                                        ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-xl-4 col-lg-4 col-sm-6  p-3">
                                        <Link to="/yayinlar">
                                            <div className="d-flex justify-content-start align-items-center my-auto banner-one-link">
                                                <img
                                                    src={News}
                                                    className="banner-one-link-icon"
                                                />
                                                <h6 className="banner-one-link-text">
                                                    Yayınlar{" "}
                                                </h6>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="col-xl-4 col-lg-4 col-sm-6  p-3">
                                        <Link to="/yazilar/degerlendirme">
                                            <div className="d-flex justify-content-start align-items-center my-auto banner-one-link">
                                                <img
                                                    src={Ticket}
                                                    className="banner-one-link-icon"
                                                />
                                                <h6 className="banner-one-link-text">
                                                    Değerlendirme
                                                </h6>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="col-xl-4 col-lg-4 col-sm-6  p-3">
                                        <Link to="/yazilar/soylesi">
                                            <div className="d-flex justify-content-start align-items-center my-auto banner-one-link">
                                                <img
                                                    src={Comment}
                                                    className="banner-one-link-icon"
                                                />
                                                <h6 className="banner-one-link-text">
                                                    Söyleşi
                                                </h6>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="col-xl-4 col-lg-4 col-sm-6  p-3">
                                        <Link to="/yazilar/gorus">
                                            <div className="d-flex justify-content-start align-items-center my-auto banner-one-link">
                                                <img
                                                    src={Chat}
                                                    className="banner-one-link-icon"
                                                />
                                                <h6 className="banner-one-link-text">
                                                    Görüş
                                                </h6>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="col-xl-4 col-lg-4 col-sm-6  p-3">
                                        <Link to="/etkinlikler">
                                            <div className="d-flex justify-content-start align-items-center my-auto banner-one-link">
                                                <img
                                                    src={Reactİcon}
                                                    className="banner-one-link-icon"
                                                />
                                                <h6 className="banner-one-link-text">
                                                    Etkinlikler
                                                </h6>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="col-xl-4 col-lg-4 col-sm-6  p-3">
                                        <Link to="/bulten">
                                            <div className="d-flex justify-content-start align-items-center my-auto banner-one-link">
                                                <img
                                                    src={Papper}
                                                    className="banner-one-link-icon"
                                                />
                                                <h6 className="banner-one-link-text">
                                                    Bülten
                                                </h6>
                                            </div>
                                        </Link>
                                    </div>
                                </div>

                                {/* <div className="row  d-flex justify-content-center">
                                    <div className="col-md-2 kutular col-sm-12">
                                        <div
                                            class="card mx-auto pt-4 animate-card"
                                            style={{
                                                width: "100%",
                                                minHeight: "100%",
                                                borderRadius: "20px",
                                            }}
                                        >
                                            <Link to="/yazilar/degerlendirme">
                                                <div
                                                    className="d-flex flex-column justify-content-center align-items-center my-auto"
                                                    style={{
                                                        minHeight: "23vh",
                                                    }}
                                                >
                                                    <img
                                                        style={{
                                                            width: "50px",
                                                        }}
                                                        src={Degerlendirme}
                                                        className="mb-2"
                                                    />
                                                    <h6>Değerlendirme </h6>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-md-2 kutular col-sm-12">
                                        <div
                                            class="card mx-auto pt-4 animate-card"
                                            style={{
                                                width: "100%",
                                                minHeight: "100%",
                                                borderRadius: "20px",
                                            }}
                                        >
                                            <Link to="/yazilar/soylesi">
                                                <div
                                                    className="d-flex flex-column justify-content-center align-items-center my-auto"
                                                    style={{
                                                        minHeight: "23vh",
                                                    }}
                                                >
                                                    <img
                                                        style={{
                                                            width: "50px",
                                                        }}
                                                        src={Soylesi}
                                                        className="mb-2"
                                                    />
                                                    <h6>Söyleşi </h6>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-md-2 kutular col-sm-12">
                                        <div
                                            class="card mx-auto pt-4 animate-card"
                                            style={{
                                                width: "100%",
                                                minHeight: "100%",
                                                borderRadius: "20px",
                                            }}
                                        >
                                            <Link to="/yazilar/yansima">
                                                <div
                                                    className="d-flex flex-column justify-content-center align-items-center my-auto"
                                                    style={{
                                                        minHeight: "23vh",
                                                    }}
                                                >
                                                    <img
                                                        style={{
                                                            width: "50px",
                                                        }}
                                                        src={Yansıma}
                                                        className="mb-2"
                                                    />
                                                    <h6>Yansıma </h6>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-md-2 kutular col-sm-12">
                                        <div
                                            class="card mx-auto pt-4 animate-card"
                                            style={{
                                                width: "100%",
                                                minHeight: "100%",
                                                borderRadius: "20px",
                                            }}
                                        >
                                            <Link to="/yazilar/gorus">
                                                <div
                                                    className="d-flex flex-column justify-content-center align-items-center my-auto"
                                                    style={{
                                                        minHeight: "23vh",
                                                    }}
                                                >
                                                    <img
                                                        style={{
                                                            width: "50px",
                                                        }}
                                                        src={Gorus}
                                                        className="mb-2"
                                                    />
                                                    <h6>Görüş </h6>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-md-2 kutular col-sm-12">
                                        <div
                                            class="card mx-auto pt-4 animate-card"
                                            style={{
                                                width: "100%",
                                                minHeight: "100%",
                                                borderRadius: "20px",
                                            }}
                                        >
                                            <Link to="/yayinlar">
                                                <div
                                                    className="d-flex flex-column justify-content-center align-items-center my-auto"
                                                    style={{
                                                        minHeight: "23vh",
                                                    }}
                                                >
                                                    <img
                                                        style={{
                                                            width: "50px",
                                                        }}
                                                        src={Yayın}
                                                        className="mb-2"
                                                    />
                                                    <h6>Yayınlar </h6>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-md-2 kutular col-sm-12">
                                        <div
                                            class="card mx-auto pt-4 animate-card"
                                            style={{
                                                width: "100%",
                                                minHeight: "100%",
                                                borderRadius: "20px",
                                            }}
                                        >
                                            <Link to="/etkinlikler">
                                                <div
                                                    className="d-flex flex-column justify-content-center align-items-center my-auto"
                                                    style={{
                                                        minHeight: "23vh",
                                                    }}
                                                >
                                                    <img
                                                        style={{
                                                            width: "50px",
                                                        }}
                                                        src={Etkinlikler}
                                                        className="mb-2"
                                                    />
                                                    <h6>Etkinlikler </h6>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default BannerOne;
