import React from 'react';
import "./pagination.css";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const PaginationOne = ({ totalPosts, postPerPage, setCurrentPage, currentPage }) => {
    let pages=[];
    const pathname = window.location.pathname

    const previousHandler = () => {
        if (currentPage == 1)
            setCurrentPage(1);
        else
            setCurrentPage(currentPage - 1);
    }
    const nextHandler = () => {
        const lastPostIndex = Math.ceil(totalPosts / postPerPage);
        if (currentPage == lastPostIndex)
            setCurrentPage(lastPostIndex);
        else
            setCurrentPage(currentPage + 1);
    }

    for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
        pages.push(i);
    }
    return (
        <nav aria-label="">
            <ul className="pagination mt-5">
                <li className="page-item"><a className="page-item-pagination" href="#" onClick={() => { setCurrentPage(previousHandler) }}><FiArrowLeft /> Geri</a></li>
                    {pages?.map((item, index) => (
                        <li className={item == currentPage ? 'page-item active' : 'page-item'} key={item}><a className="page-link" href={pathname === "/etkinlikler" ? "#etkinlikler" : "#bulten"} onClick={() => { setCurrentPage(item) }}>{item}</a></li>
                    ))
                }
                <li className="page-item"><a className="page-item-pagination" href="#" onClick={() => { setCurrentPage(nextHandler) }}>İleri <FiArrowRight /></a></li>
            </ul>
        </nav>
    )                    
}

export default PaginationOne;