import React, { useEffect } from "react";
import SEO from "../../common/SEO";
import Layout from "../../common/Layout";
import BreadcrumbOne from "../../common/breadcrumb/BreadcrumbOne";
import axiosClient from "../../utils/axiosClient";
import BultenCourse from "../../components/course/BultenCourse";
import PageBanner from "../../components/banner/PageBanner";
import banner from "../../assets/images/bulletin-image.png";

const BultenPage = () => {
    const [content, setContent] = React.useState(null);
    const [sekme, setSekme] = React.useState(null);

    const getWrites = async () => {
        await axiosClient.get(`/api/bulten`).then((res) => {
            setContent(res.data);
            console.log(res.data);
        });
    };

    useEffect(() => {
        getWrites();
    }, []);
    
    const formatted = content?.map((item) => {
        item.year = new Date(item.date).getFullYear();
        return item;
    });

    const handleSekme = (string) => {
        setSekme([]);
        const filtered = formatted?.filter((item) => item.year == string);
        setSekme(filtered);
    };
    return (
        <>
            <SEO title="Yazılar" />
            <Layout>
                <PageBanner title="Bültenler" image={banner} />
                <div className="edu-course-area edu-section-gap bg-color-white">
                    <div className="container">
                        <div className="row">
                            {content?.map((item) => (
                                <div
                                    className="card w-100  d-flex flex-row mt-5 border-0"
                                    style={{
                                        borderRadius: "5px",
                                        boxShadow:
                                            "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                                    }}
                                >
                                    <img
                                        style={{
                                            width: "100px",
                                            heigth: "100px",
                                        }}
                                        src={item.image}
                                    />
                                    <div className="card-body ml-5 p-4">
                                        <div
                                            className="d-flex justify-content-start"
                                            style={{
                                                fontSize: "35px",
                                                fontWeight: "bold",
                                                color: "black",
                                            }}
                                        >
                                            {item.title}
                                        </div>
                                        <div className="">
                                            <p className="d-flex justify-content-start">
                                                Lorem Ipsum is simply dummy text
                                                of the printing and typesetting
                                                industry. Lorem Ipsum has been
                                                of the printing and typesetting
                                                industry. Lorem Ipsum has been
                                                the industry's standard...
                                            </p>
                                        </div>
                                        <div
                                            className="d-flex justify-content-end w-full m-0 p-0"
                                            style={{
                                                borderTop: "1px solid #e3e3e3",
                                                fontSize: "18px",
                                                fontWeight: "bold",
                                                margin: "5px",
                                                color: "black",
                                            }}
                                        >
                                            <a
                                                href={item.pdf_link}
                                                style={{ margin: "10px" }}
                                            >
                                                Bülteni İndir{" "}
                                                <i className="icon-arrow-right-line-right mt-5"></i>
                                            </a>
                                        </div>
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

export default BultenPage;
