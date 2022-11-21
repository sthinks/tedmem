import React from "react";
import { useParams } from "react-router-dom";
import SEO from "../../common/SEO";
import Layout from "../../common/Layout";
import PostOne from "../../components/post/PostOne";
import BreadcrumbOne from "../../common/breadcrumb/BreadcrumbOne";
import PostData from "../../data/blog/PostData.json";

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

const CategoryArchive = () => {
  const { slug } = useParams();
  const data = PostData.map((blog) => {
    return {
      ...blog,
      author: blog.author.filter((catItem) => slugify(catItem) === slug),
    };
  }).filter((blog) => blog.author.length > 0);

  const catTitle = data[0].author[0];

  return (
    <>
      <SEO title={`Posts On "${catTitle}" Category`} />
      <Layout>
        <BreadcrumbOne
          title={catTitle}
          rootUrl="/"
          parentUrl="Anasayfa"
          currentUrl={` "${catTitle}" Blog Yazıları`}
        />
        <div className="edu-elements-area edu-section-gap bg-color-white">
          <div className="container">
            <div className="row g-5">
              <div className="col-lg-12">
                <div className="row g-5">
                  {data.map((item) => (
                    <div className="col-lg-4 col-md-6 col-12" key={item.id}>
                      <PostOne data={item} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default CategoryArchive;
