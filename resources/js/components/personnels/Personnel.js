import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosClient from "../../utils/axiosClient";
import Loading from "../loading/Loading";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import "./personnel.css";

function Personnel() {
    const [content, setContent] = useState();
    const [loading, setLoading] = useState(true);
    const slug = useParams();
    const getPersonnel = async () => {
        await axiosClient.get(`/api/kadromuz/${slug.slug}`).then((res) => {
            setContent(res.data), setLoading(false);
        });
    };
    useEffect(() => {
        getPersonnel();
    }, []);

    return loading ? (
        <Loading />
    ) : (
        <div className="container py-5">
            <div className="row">
                <div className="col-lg-4">
                    <div className="personel-card-info">
                        <img src={content?.image} alt="" />
                        <p style={{ fontSize: "2rem" }}>{content?.name}</p>
                        <p>{content?.role}</p>
                        <div className="d-flex p-4">
                            <a
                                href={content?.linkedin}
                                target="_blank"
                                className="personal-linkedin m-2"
                            >
                                <FaLinkedinIn />
                            </a>
                            <a
                                href={content?.twitter}
                                target="_blank"
                                className="personal-linkedin m-2"
                            >
                                <FaTwitter />
                            </a>
                            <a
                                href={`mailto:${content?.email}`}
                                target="_blank"
                                className="personal-linkedin m-2"
                            >
                                <FiMail />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-8">
                    <h4>{content?.name}</h4>
                    <p
                        className="cv-info"
                        dangerouslySetInnerHTML={{ __html: content?.cv }}
                    />
                </div>
            </div>
        </div>
    );
}

export default Personnel;
