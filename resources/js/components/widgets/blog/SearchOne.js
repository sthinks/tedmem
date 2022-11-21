import React from 'react';

const SearchOne = ( props ) => {
    return (
        <div className={`edu-blog-widget${ props.style2 === 'enable' ? '-2' : '' } widget-search ${ props.extraClass || '' }`}>
            <div className="inner">
                <h5 className="widget-title">Blogda arayın</h5>
                <div className="content">
                    <form className="blog-search" action="#">
                        <input type="text" placeholder="Arayın.." />
                        <button className="search-button"><i className="icon-search-line"></i></button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SearchOne;