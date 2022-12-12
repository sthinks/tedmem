import React, { useEffect,useState } from "react";
import CategoryOne from "../category/CategoryOne";
import SectionTitle from "../../components/sectionTitle/SectionTitle";
import Modal from "../category/Modal";
import ScrollAnimation from "react-animate-on-scroll";
import BultenCard from "../bulten/BultenCard";
import bultenImage from "../../assets/images/bulten-image.png";
import PaginationOne from "../../components/pagination/Pagination";

const HomeOneCategory = ({ data }) => {
    const [content, setContent] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage, setPostPage] = useState(2);

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
        <div className="">
            <div className="container eduvibe-animated-shape">
                {/* Bültenler */}
                <div
                id="bulten"
                    className="d-flex justify-content-center"
                    style={{ width: "35%", marginLeft: "31%" }}
                >
                    <img src={bultenImage} />
                </div>
                <BultenCard data={content} />
                <div className="d-flex justify-content-start">
                    <PaginationOne totalPosts={data?.length} postPerPage={postPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage} />
                </div>
            </div>
          

        </div>
    );
};

export default HomeOneCategory;
