import React from "react";
import "../../assets/css/style.css";
import Imagee from "../../assets/images/bg/ted2.png"
import Degerlendirme from "../../assets/images/bg/değerlendirme.png";
import Soylesi from "../../assets/images/bg/söyleşi.png";
import Gorus from "../../assets/images/bg/görüş.png";
import Etkinlikler from "../../assets/images/bg/tümetkinlikler.png";
import Yayın from "../../assets/images/bg/tümyayın.png";
import Yansıma from "../../assets/images/bg/yansıma.png";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/custom-animations/fall-animation.css";
import { Link, useNavigate } from "react-router-dom";

const BannerOne = ({ data }) => {
    const [writesResults, setWritesResults] = React.useState([])
    const [query, setQuery] = React.useState('')


    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleQuery()
          }
    }

    const handleQuery = (e) => {

        var writesResults = data?.filter((data) =>  data.title.toLowerCase().match(query))

        setWritesResults(writesResults)

        if ( e === '' ){
            setWritesResults([])
        }
     }

    return (
        <div className="height-940">
            <div className="row align-items-center h-100">
                <div
                    style={{
                        backgroundImage: `url(${Imagee})`,
                        height: '950px',
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                    }}
                >
                    <div style={{width:'100%',height:'100%', backgroundColor:'#00000042', position:'relative'}}>
                        <div className="container h-100">
                            <div className="row sad text-center ">
                                <div className="row d-flex justify-content-center align-items-center">
                                    <div className="col-md-12 " >
                                        <h2 style={{color:'#525fe1', fontWeight:'bolder'}}>ORTAK PAYDAMIZ EĞİTİM</h2>
                                    </div>
                                </div>

                                <div className="row  d-flex justify-content-center" style={{height:'10%'}}>

                                <div className="col-md-2 kutular col-sm-12">
                                    <div class="card mx-auto pt-4 animate-card" style={{width:'100%',minHeight:'100%', borderRadius:'20px'}}>
                                        <Link to='/yazilar/degerlendirme'>
                                            <div className="d-flex flex-column justify-content-center align-items-center my-auto" style={{minHeight:'23vh',}}>
                                            <img style={{width:'50px'}} src={Degerlendirme} className='mb-2'/>
                                                    <h6 >Değerlendirme </h6>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-md-2 kutular col-sm-12">
                                    <div class="card mx-auto pt-4 animate-card" style={{width:'100%',minHeight:'100%', borderRadius:'20px'}}>
                                        <Link to='/yazilar/soylesi'>
                                            <div className="d-flex flex-column justify-content-center align-items-center my-auto" style={{minHeight:'23vh',}}>
                                            <img style={{width:'50px'}} src={Soylesi} className='mb-2'/>
                                                    <h6 >Söyleşi </h6>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-md-2 kutular col-sm-12">
                                    <div class="card mx-auto pt-4 animate-card" style={{width:'100%',minHeight:'100%', borderRadius:'20px'}}>
                                        <Link to='/yazilar/yansima'>
                                            <div className="d-flex flex-column justify-content-center align-items-center my-auto" style={{minHeight:'23vh',}}>
                                            <img style={{width:'50px'}} src={Yansıma} className='mb-2'/>
                                                    <h6 >Yansıma </h6>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-md-2 kutular col-sm-12">
                                    <div class="card mx-auto pt-4 animate-card" style={{width:'100%',minHeight:'100%', borderRadius:'20px'}}>
                                        <Link to='/yazilar/gorus'>
                                            <div className="d-flex flex-column justify-content-center align-items-center my-auto" style={{minHeight:'23vh',}}>
                                            <img style={{width:'50px'}} src={Gorus} className='mb-2'/>
                                                    <h6 >Görüş </h6>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-md-2 kutular col-sm-12">
                                    <div class="card mx-auto pt-4 animate-card" style={{width:'100%',minHeight:'100%', borderRadius:'20px'}}>
                                        <Link to='/yayinlar'>
                                            <div className="d-flex flex-column justify-content-center align-items-center my-auto" style={{minHeight:'23vh',}}>
                                            <img style={{width:'50px'}} src={Yayın} className='mb-2'/>
                                                    <h6 >Yayınlar </h6>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-md-2 kutular col-sm-12">
                                    <div class="card mx-auto pt-4 animate-card" style={{width:'100%',minHeight:'100%', borderRadius:'20px'}}>
                                        <Link to='/etkinlikler'>
                                            <div className="d-flex flex-column justify-content-center align-items-center my-auto" style={{minHeight:'23vh',}}>
                                            <img style={{width:'50px'}} src={Etkinlikler} className='mb-2'/>
                                                    <h6 >Etkinlikler </h6>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                </div>
                                <div>
                                <div className="row d-flex justify-content-center">
                                    <div className="col-md-6 " >
                                        <div className="d-flex">
                                        <input className="bg-white mb-2 py-2" style={{position:'relative',borderColor:'orange'}} onKeyDown={handleKeyDown} onChange={e => {setQuery(e.target.value); handleQuery(e.target.value) }} type="text"  placeholder="Yazılarda Arayın..." />
                                        <i style={{position:'absolute', right:'4%', color:'orange', fontSize:'22px'}} className="icon-search-line pt-3"></i>

                                        </div>
                                        {writesResults?.length > 0 && (
                                            writesResults.slice(0,4).map(item => (
                                                <Link to={item.category_id ? `/yazilar-detay/${item.slug}` : `/event-details/${item.slug}` }>
                                                     <div className="border mb-2" style={{borderRadius:'60px', backgroundColor:'antiquewhite'}}>{item.title}</div>
                                                </Link>
                                            ))
                                        )}
                                    </div>
                                </div>
                                </div>


                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default BannerOne;
