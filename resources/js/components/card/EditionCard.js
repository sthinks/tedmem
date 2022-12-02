import React from "react";
import { Link } from "react-router-dom";
import "./editionCard.css";
import { AiOutlineClockCircle } from "react-icons/ai";
import { NavItem } from "react-bootstrap";
import { useEffect } from "react";


function EditionCard({ data }) {

    const formattedDate = new Date(data.created_at);
    return (
        <Link to={`/yayinlar-detay/${data.slug}`}>
        <div className="card card-event">
            <img
                className="card-event-img"
                src={data.image}
                alt="Card image cap"
            />
            <div className="card-body">
                {data.category &&
                        <div className="edition-badge">
                            <span className="edition-badge-icon">
                                {data.category}
                            </span>
                        </div>
                }
                {!data.category &&
                    <div className="edition-badge">
                            <span className="edition-badge-icon " style={{ backgroundColor: "white" }}>
                            {data.category}
                        </span>
                    </div>
                }
                
                <div className="card-date">
                    <h5 className="card-title">{data.title}</h5>
                    <div className="card-date-content">
                        <AiOutlineClockCircle className="card-date-icon" />
                        {formattedDate.toLocaleDateString("en-GB")}
                    </div>
                </div>
                <p className="card-read-more">
                    <Link to={`/yayinlar-detay/${data.slug}`}>Devamını Oku</Link>
                </p>
            </div>
        </div>
        </Link>
    );
}

export default EditionCard;
