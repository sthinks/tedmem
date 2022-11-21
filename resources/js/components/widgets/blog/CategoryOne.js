import React from "react";
import { Link } from "react-router-dom";

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

const CategoryOne = ({ data, extraClass }) => {

    return (
        <div
            className={`edu-blog-widget enable' ? '-2' : '' } widget-categories ${
                extraClass || ""
            }`}
        >
            <div className="inner">
                <h5 className="widget-title">Blog Yazarlarımız</h5>
                <div className="content">
                    <ul className="category-list">
                        {data &&
                            data.map((cat) => {
                                return (
                                    <li key={cat.id}>
                                        <Link
                                            to={`/author/${cat.slug}`}
                                        >
                                            {cat?.name}
                                            <span>({cat?.blogs?.length})</span>
                                        </Link>
                                    </li>
                                );
                            })}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default CategoryOne;
