import React from "react";
import { Link } from "react-router-dom";
import "./editionCard.css";
import { AiOutlineClockCircle } from "react-icons/ai";

function EditionCard({ data }) {
    const formattedDate = new Date(data.created_at);
    return (
        <div className="card card-event">
            <img
                className="card-event-img"
                src={data.image}
                alt="Card image cap"
            />
            <div className="card-body">
                <span
                    class="badge badge-secondary ml-5"
                    style={{ backgroundColor: "#fff0e1" }}
                >
                    Secondary
                </span>
                <div className="card-date" style={{ height: "150px" }}>
                    <h5 className="card-title">{data.title}</h5>
                    <div>
                        <AiOutlineClockCircle className="card-date-icon" />{" "}
                        {formattedDate.toLocaleDateString("en-GB")}
                    </div>
                </div>
                <p className="card-read-more">
                    <Link to={`/event-details/${data.slug}`}>Devamını Oku</Link>
                </p>
            </div>
        </div>
    );
}

export default EditionCard;
