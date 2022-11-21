import React from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import Logo from "../../assets/images/bg/tedmem.png";


const ResponsiveMenu = ( { show, onClose, showSearch, onSearch,writes, } ) => {
    var elements = document.querySelectorAll( '.popup-mobile-menu .has-droupdown > a' );
    var elementsTwo = document.querySelectorAll( '.popup-mobile-menu .with-megamenu > a' );

    const [writesResults, setWritesResults] = React.useState(null)
    const [query, setQuery] = React.useState('')

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleQuery()
          }
    }

    const handleQuery = (e) => {

        var writesResults = writes?.filter((data) =>  data.title.toLowerCase().match(query))

        setWritesResults(writesResults)

        if ( e === '' ){
            setWritesResults([])
        }

     }


    for( var i in elements ) {
        if( elements.hasOwnProperty( i ) ) {
            elements[i].onclick = function() {
                this.parentElement.querySelector( '.submenu').classList.toggle( 'active' );
                this.classList.toggle( 'open' );
            }
        }
    }

    for( var j in elementsTwo ) {
        if(elementsTwo.hasOwnProperty(i)) {
            elementsTwo[j].onclick = function() {
                this.parentElement.querySelector( '.rn-megamenu' ).classList.toggle( 'active' );
                this.classList.toggle( 'open' );
            }
        }
    }

    return (
        <>
            <div className={ `popup-mobile-menu ${ show ? 'active': ''}` }>
                <div className="inner">
                    <div className="header-top">
                        <div className="logo">
                            <Link to='/' >
                                <img src={Logo}alt="Main Logo" />
                            </Link>
                        </div>
                        <div className="close-menu">
                            <button className="close-button" onClick={ onClose }>
                                <i className="ri-close-line"></i>
                            </button>
                        </div>
                    </div>
                    <Nav />
                </div>
            </div>

            <div className={ `edu-search-popup ${ showSearch ? 'open': ''}` }>
                <div className="close-button">
                    <button className="close-trigger" onClick={ onSearch }><i className="ri-close-line"></i></button>
                </div>
                <div className="inner">
                    <div className="search-form" >
                        <input onKeyDown={handleKeyDown} onChange={e => {setQuery(e.target.value); handleQuery(e.target.value) }} type="text" className="eduvibe-search-popup-field" placeholder="Arayın..." />
                        <button onClick={handleQuery} className="submit-button"><i className="icon-search-line"></i></button>
                    </div>
                    <div className='container'>
                    <div className='d-flex justify-content-center mt-4 flex-column'>
                        {writesResults && (
                            writesResults?.map(item => (
                                <Link to={`/yazilar-detay/${item.slug}`} className='p-2 text-center mb-3' style={{ border:'1.2px solid orange', borderRadius:'20px', backgroundColor:'white' }}>
                                    {item.title}
                                </Link>
                        )))}


                        {!writesResults && (<div>Sonuç bulunamadı.</div>)}

                    </div>
                </div>
                </div>
            </div>
        </>
    )
}

export default ResponsiveMenu;
