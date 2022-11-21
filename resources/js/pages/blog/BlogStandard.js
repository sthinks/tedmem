import React, { useEffect } from "react";
import SEO from "../../common/SEO";
import Layout from "../../common/Layout";
import BreadcrumbOne from "../../common/breadcrumb/BreadcrumbOne";
import PaginationOne from "../../components/pagination/PaginationOne";
import PostStandard from "../../components/post/PostStandard";
import CategoryOne from "../../components/widgets/blog/CategoryOne";
import LatestPostOne from "../../components/widgets/blog/LatestPostOne";
import axiosClient from "../../utils/axiosClient";

const BlogStandard = (props) => {
    const [content, setContent] = React.useState([]);
    const [author, setAuthor] = React.useState(null);
    const [query, setQuery] = React.useState("");
    const [result, setResult] = React.useState([]);
    const [page, setPage] = React.useState(2);

    const handleQuery = () => {
        setResult(
            content?.filter(
                (data) =>
                    JSON.stringify(data)
                        .toLowerCase()
                        .indexOf(query.toLowerCase()) !== -1
            )
        );
    };

    const loadMore = async () => {
        await axiosClient
            .get(`/api/blog?page=${page}`)
            .then((res) => setContent([...content, ...res.data]))
            .then(() => setPage(page + 1));
    };

    const getBlogs = async () => {
        await axiosClient.get(`/api/blog`).then((res) => setContent(res.data));
        await axiosClient.get(`/api/author`).then((res) => setAuthor(res.data));
    };

    useEffect(() => {
        getBlogs();
        if (query == "") return setResult(content);
    }, [result, query]);

    return (
        <>
            <SEO title="Blog Standard" />
            <Layout>
                <BreadcrumbOne
                    title="Blog"
                    rootUrl="/"
                    parentUrl="Anasayfa"
                    currentUrl="Blog"
                />
                <div className="edu-elements-area edu-section-gap bg-color-white">
                    <div className="container">
                        <div className="row g-5">
                            <div className="col-lg-8 eduvibe-blog-standard-wrapper">
                                {result &&
                                      result.map((item) => (
                                          <div
                                              className="edu-blog blog-type-1 radius-small eduvibe-post-standard mt--40"
                                              key={item.id}
                                          >
                                              <PostStandard data={item} />
                                          </div>
                                      ))}
                                 {
                                      !result.length &&
                                      content.map((item) => (
                                          <div
                                              className="edu-blog blog-type-1 radius-small eduvibe-post-standard mt--40"
                                              key={item.id}
                                          >
                                              <PostStandard data={item} />
                                          </div>
                                      ))
                                 }

                                <div className="row">
                                    {!result.length &&(
                                        <div className="col-lg-12 mt--60 text-center">
                                        <button
                                            onClick={loadMore}
                                            type="button"
                                            className="btn btn-lg btn-warning px-5 py-2"
                                            style={{ fontWeight:'bolder'}}
                                        >
                                            Daha Fazla Göster
                                        </button>
                                    </div>)}
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <aside className="edu-blog-sidebar">
                                    <div
                                        className={`edu-blog-widget${
                                            props.style2 === "enable"
                                                ? "-2"
                                                : ""
                                        } widget-search ${
                                            props.extraClass || ""
                                        }`}
                                    >
                                        <div className="inner">
                                            <h5 className="widget-title">
                                                Blogda arayın
                                            </h5>
                                            <div className="content">
                                                <div className="blog-search">
                                                    <input
                                                        onChange={(e) =>
                                                            setQuery(
                                                                e.target.value
                                                            )
                                                        }
                                                        type="text"
                                                        placeholder="Arayın.."
                                                    />
                                                    <button
                                                        onClick={handleQuery}
                                                        className="search-button"
                                                    >
                                                        <i className="icon-search-line"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <CategoryOne data={author} />
                                    <LatestPostOne
                                        data={content}
                                        extraClass="mt--40"
                                    />
                                </aside>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
};

export default BlogStandard;
