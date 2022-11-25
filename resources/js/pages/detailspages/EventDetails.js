import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaFilePdf } from "react-icons/fa";
import SEO from "../../common/SEO";
import Layout from "../../common/Layout";
import BreadcrumbOne from "../../common/breadcrumb/BreadcrumbOne";
import axiosClient from "../../utils/axiosClient";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import { BsFillFileEarmarkFill } from "react-icons/bs";
import { BsFillFileEarmarkPersonFill } from "react-icons/bs";
import { BsFillShareFill } from "react-icons/bs";
import { Helmet } from "react-helmet";

const EventDetails = () => {
    const { slug } = useParams();
    const [content, setContent] = React.useState(null);
    const [text, setText] = React.useState("");

    const handleClick = () => {
        console.log(content);
        setText(content.content);
        document.getElementById("devam").remove();
    };

    const getDetails = async () => {
        await axiosClient.get(`/api/public-details/${slug}`).then((res) => {
            setContent(res.data);
            setText(
                res.data.content
                    .replace(
                        /<br>(?=(?:\s*<[^>]*>)*$)|(<br>)|<[^>]*>/gi,
                        (x, y) => (y ? " & " : "")
                    )
                    .slice(0, 250)
            );
        });
    };

    useEffect(() => {
        getDetails();
    }, []);
    return (
        <>
            <SEO title={content?.title} />
            <Layout>
                <BreadcrumbOne
                    title={content?.title}
                    rootUrl="/"
                    parentUrl="Anasayfa"
                    currentUrl="Yayın Detay"
                />

                <div className="edu-event-details-area edu-event-details edu-section-gap bg-color-white">
                    <div className="container">
                        <div
                            className="row g-5 border border-warning  py-3 px-2 mt--25"
                            style={{
                                borderRadius: "30px",
                                backgroundColor: "#faebd769",
                            }}
                        >
                            <div className="col-md-3">
                                <img
                                    style={{
                                        height: "100%",
                                        width: "100%",
                                        objectFit: "contain",
                                    }}
                                    src={content?.image}
                                ></img>
                            </div>
                            <div
                                className="col-md-6"
                                style={{
                                    height: "100%",
                                }}
                            >
                                <h6
                                    className="text-center"
                                    style={{
                                        fontWeight: "bolder",
                                        color: "#0a58ca",
                                    }}
                                >
                                    {content?.title}
                                </h6>

                                <div
                                    dangerouslySetInnerHTML={{ __html: text }}
                                ></div>

                                <span
                                    id="devam"
                                    style={{ cursor: "pointer" }}
                                    className="text-primary"
                                    onClick={handleClick}
                                >
                                    Devamını okumak için{" "}
                                    <BsFillArrowDownCircleFill className="pl-2" />
                                </span>

                                <div className="bg-light">
                                    <div className="d-flex flex-column py-4 px-3">
                                        <div className="d-flex flex-inline">
                                            <p
                                                style={{ fontWeight: "bolder" }}
                                                className=""
                                            >
                                                Yayın Tarihi:
                                            </p>{" "}
                                            {content?.publish_year}
                                        </div>
                                        <div className="d-flex flex-inline">
                                            <p
                                                style={{ fontWeight: "bolder" }}
                                                className=""
                                            >
                                                Yazarlar:
                                            </p>{" "}
                                            {content?.publisher}
                                        </div>
                                        <div className="d-flex flex-inline">
                                            <p
                                                style={{ fontWeight: "bolder" }}
                                                className=""
                                            >
                                                Editörler:
                                            </p>{" "}
                                            {content?.editor}
                                        </div>
                                        <div className="d-flex flex-inline">
                                            <span
                                                style={{ fontWeight: "bolder" }}
                                                className=""
                                            >
                                                Yayın Evi:
                                            </span>{" "}
                                            {content?.publish_house}
                                        </div>
                                    </div>
                                </div>
                                {content?.pdf_link[0] && (
                                    <div
                                        className="d-flex flex-inline flex-row align-items-center"
                                        style={{ height: "10vh" }}
                                    >
                                        <p
                                            className="pt-3"
                                            style={{ fontWeight: "bolder" }}
                                        >
                                            İndirmek için
                                        </p>
                                        <a
                                            href={content?.pdf_link[0]}
                                            target="_blank"
                                        >
                                            <div className="d-flex pb-4 pl-3">
                                                <FaFilePdf
                                                    style={{
                                                        fontSize: "20px",
                                                        color: "red",
                                                    }}
                                                />{" "}
                                                PDF
                                            </div>
                                        </a>
                                        <a href="#">
                                            <div className="d-flex pb-4 pl-3">
                                                <BsFillFileEarmarkFill
                                                    style={{
                                                        fontSize: "20px",
                                                        color: "blue",
                                                    }}
                                                />{" "}
                                                İnfografik
                                            </div>
                                        </a>
                                        <a href="#">
                                            <div className="d-flex pb-4 pl-3">
                                                <BsFillFileEarmarkPersonFill
                                                    style={{
                                                        fontSize: "20px",
                                                        color: "orange",
                                                    }}
                                                />{" "}
                                                Yönetici Özeti
                                            </div>
                                        </a>
                                    </div>
                                )}
                            </div>
                            <div className="col-md-3 align-items-center my-auto">
                                <button
                                    data-toggle="modal"
                                    data-target="#yayın"
                                    style={{
                                        backgroundColor: "orange",
                                        fontSize: "20px",
                                    }}
                                    className="btn btn-lg btn-block"
                                >
                                    Önerilen Atıf
                                </button>
                                <button
                                    style={{
                                        backgroundColor: "orange",
                                        fontSize: "20px",
                                    }}
                                    onClick={() =>
                                        window.open(
                                            `https://twitter.com/share?ref_src=${window.location.href}`,
                                            "_blank"
                                        )
                                    }
                                    className="btn btn-lg btn-block"
                                >
                                    {" "}
                                    <BsFillShareFill className="pr-2" />
                                    Paylaş
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    class="modal fade"
                    id="yayın"
                    tabindex="-1"
                    role="dialog"
                    aria-labelledby="exampleModalCenterTitle"
                    aria-hidden="true"
                >
                    <div
                        class="modal-dialog modal-dialog-centered"
                        role="document"
                    >
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5
                                    class="modal-title"
                                    id="exampleModalCenterTitle"
                                >
                                    Önerilen Atıflar
                                </h5>
                                <button
                                    type="button"
                                    class="close"
                                    data-dismiss="modal"
                                    aria-label="Close"
                                >
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: content?.attribution,
                                    }}
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
};
export default EventDetails;
