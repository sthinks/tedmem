import React, { useEffect } from "react";
import SEO from "../../common/SEO";
import Layout from "../../common/Layout";
import BreadcrumbOne from "../../common/breadcrumb/BreadcrumbOne";
import PaginationOne from "../../components/pagination/PaginationOne";
import EventTwo from "../../components/event/EventTwo";
import { useParams } from "react-router-dom";
import axiosClient from "../../utils/axiosClient";
import ReactPaginate from "react-paginate";
import PageBanner from "../../components/banner/PageBanner";
import banner from "../../assets/images/article-banner.png";
import "./EventGrid.css";

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
    const [content, setContent] = React.useState([]);
    const [sekme, setSekme] = React.useState(null);
    let { slug } = useParams();
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
                console.log("a", res.data);
            });
    };

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
                setContent(res.data);
            });
    };

    return (
        <>
            <SEO title="Event Grid" />
            <Layout>
                <PageBanner title="Yayınlar" image={banner} />
                <div className="edu-elements-area edu-section-gap bg-color-white">
                    <div className="container">
                        {slugged == undefined && (
                            <div
                                className="d-"
                                style={{ marginBottom: "70px" }}
                            >
                                <button
                                    type="button"
                                    onClick={() => setSekme([])}
                                    className={`btn btn-sm`}
                                    style={{
                                        fontWeight: "bolder",
                                        fontSize: "15px",
                                        backgroundColor: "#fff0e1",
                                        color: "black",
                                    }}
                                >
                                    Tümünü Gör
                                </button>

                                <button
                                    type="button"
                                    onClick={() => handleSekme("analiz-dizisi")}
                                    className={`btn btn-lg`}
                                    style={{
                                        fontWeight: "bolder",
                                        fontSize: "15px",
                                        backgroundColor: "#fff0e1",
                                        color: "black",
                                    }}
                                >
                                    Analiz
                                </button>

                                <button 
                                    type="button"
                                    onClick={() =>
                                        handleSekme("degerlendirme-dizisi")
                                    }
                                    className={`btn btn-lg`}
                                    style={{
                                        fontWeight: "bolder",
                                        fontSize: "15px",
                                        backgroundColor: "#fff0e1",
                                        color: "black",
                                    }}
                                >
                                    Değerlendirme Dizisi
                                </button>

                                <button
                                    type="button"
                                    onClick={() =>
                                        handleSekme("etkinlik-raporları")
                                    }
                                    className="btn btn-lg"
                                    style={{
                                        fontWeight: "bolder",
                                        fontSize: "15px",
                                        backgroundColor: "#fff0e1",
                                        color: "black",
                                    }}
                                >
                                    Etkinlik Raporları
                                </button>

                                <button
                                    type="button"
                                    onClick={() =>
                                        handleSekme("guncel-yayinlar-dizisi")
                                    }
                                    className={`btn btn-lg`}
                                    style={{
                                        fontWeight: "bolder",
                                        fontSize: "15px",
                                        backgroundColor: "#fff0e1",
                                        color: "black",
                                    }}
                                >
                                    Güncel
                                </button>
                            </div>
                        )}

                        <div className="row g-5">
                            {sekme?.length > 0
                                ? sekme?.map((item) => (
                                      <div
                                          className="col-lg-4 col-md-6 col-sm-6 col-12"
                                          key={item.id}
                                      >
                                          <EventTwo data={item} />
                                      </div>
                                  ))
                                : content?.data?.map((item) => (
                                      <div
                                          className="col-lg-4 col-md-6 col-sm-6 col-12"
                                          key={item.id}
                                      >
                                          <EventTwo data={item} />
                                      </div>
                                  ))}
                        </div>

                        <div className="row">
                            {sekme?.length > 0
                                ? sekme?.map((item) => (
                                      <div className="col-lg-3" key={item.id}>
                                          <div
                                              className="card card-event"
                                              style={{ width: "100%" }}
                                          >
                                              <img
                                                  className="card-event-img"
                                                  src={item.image}
                                                  alt="Card image cap"
                                              />
                                              <div className="card-body">
                                                  <span class="badge badge-secondary">
                                                      Secondary
                                                  </span>
                                                  <h5 className="card-title">
                                                      {item.title}
                                                  </h5>
                                                  <p className="card-read-more">
                                                      Devamını Oku
                                                  </p>
                                              </div>
                                          </div>
                                      </div>
                                  ))
                                : content?.data?.map((item) => (
                                      <div className="col-lg-3" key={item.id}>
                                          <div
                                              className="card card-event"
                                              style={{ width: "100%" }}
                                          >
                                              <img
                                                  className="card-event-img"
                                                  src={item.image}
                                                  alt="Card image cap"
                                              />
                                              <div className="card-body">
                                                  <span class="badge badge-secondary">
                                                      Secondary
                                                  </span>
                                                  <h5 className="card-title">
                                                      {item.title}
                                                  </h5>
                                                  <p className="card-read-more">
                                                      Devamını Oku
                                                  </p>
                                              </div>
                                          </div>
                                      </div>
                                  ))}
                        </div>
                        {/* {slugged == undefined && (
                            <div className="row">
                                <div className="col-lg-12 mt--60 text-center">
                                    <ReactPaginate
                                        onPageChange={hanndleChange}
                                        breakLabel="..."
                                        nextLabel=">"
                                        previousLabel="<"
                                        containerClassName={"edu-pagination"}
                                        pageRangeDisplayed={5}
                                        pageCount={content?.last_page}
                                        activeClassName={"active"}
                                    />
                                </div>
                            </div>
                        )} */}
                    </div>
                </div>
            </Layout>
        </>
    );
};

export default EventGrid;
