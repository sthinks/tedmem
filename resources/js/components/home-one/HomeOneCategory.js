import React, { useEffect,useState } from "react";
import CategoryOne from "../category/CategoryOne";
import SectionTitle from "../../components/sectionTitle/SectionTitle";
import Modal from "../category/Modal";
import ScrollAnimation from "react-animate-on-scroll";
import BultenCard from "../bulten/BultenCard";
import bultenImage from "../../assets/images/bulten-image.png";
import PaginationOne from "../../components/pagination/Pagination";
import splash from "../../assets/images/splash.png";
import "./css/homeOneCategory.css";

const HomeOneCategory = ({ data }) => {
    const [content, setContent] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage, setPostPage] = useState(2);
    const pathname = window.location.pathname;

    useEffect(() => {
        paginationHandler(data);
    }, [data])

    useEffect(() => {
        paginationHandler(data);
    }, [currentPage])

    const lastPostIndex = currentPage * postPerPage;
    const firstPostIndex = lastPostIndex - postPerPage;

    const paginationHandler = (data) => {
        const currentPosts = data?.slice(firstPostIndex, lastPostIndex);
        setContent(currentPosts);
    };
    return (
        <div className="mt-5" id="bulten">
            <div className="container eduvibe-animated-shape" >
                {/* Bültenler */}
                <div  className="d-flex justify-content-center bulten-header-image mb-2">
                    <img className="splash-brush-bulten" src={splash} />
                    <div className="home-bulten-main-text">
                        Bülten
                    </div>
                </div>
                <BultenCard data={content} />
                <div className="d-flex mb-5 home-card-pagination">
                    <PaginationOne totalPosts={data?.length} postPerPage={postPerPage}  setCurrentPage={setCurrentPage} currentPage={currentPage} />
                </div>
            </div>
        </div>
    );
};

export default HomeOneCategory;
