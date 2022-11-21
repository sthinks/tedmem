import React, { useEffect } from 'react';
import SEO from '../../common/SEO';
import Layout from '../../common/Layout';
import BreadcrumbOne from '../../common/breadcrumb/BreadcrumbOne';
import PaginationOne from '../../components/pagination/PaginationOne';
import PostStandard from '../../components/post/PostStandard';
import SearchOne from '../../components/widgets/blog/SearchOne';
import CategoryOne from '../../components/widgets/blog/CategoryOne';
import LatestPostOne from '../../components/widgets/blog/LatestPostOne';
import axiosClient from '../../utils/axiosClient';


const BlogSearch = () => {
    const [content, setContent] = React.useState(null);
    const [author, setAuthor] = React.useState(null);

    const getBlogs = async () => {
        await axiosClient.get(`/api/blog`).then((res) => setContent(res.data));
       };

    useEffect(() => {
        getBlogs()
    }, []);

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
                                {
                                    content && content.map((item) => (
                                        <div className="edu-blog blog-type-1 radius-small eduvibe-post-standard mt--40" key={ item.id }>
                                            <PostStandard data={item} />
                                        </div>
                                    ) )
                                }
                                <div className="row">
                                    <div className="col-lg-12 mt--60">
                                        <PaginationOne />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <aside className="edu-blog-sidebar">
                                    <SearchOne />
                                    <CategoryOne data={author} />
                                    <LatestPostOne data={content} extraClass="mt--40" />
                                </aside>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default BlogSearch;
