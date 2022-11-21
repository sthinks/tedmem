import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <ul className="mainmenu">

            <li className='has-droupdown'>
                <Link to="">Kurumsal</Link>
                    <ul className="submenu">
                        <li><Link to="/kurumsal/mem-nedir">Mem Nedir ?</Link></li>
                        <li><Link to="/kurumsal/biz-kimiz">Biz Kimiz </Link></li>
                        <li><Link to="/kurumsal/amacımız">Amacımız</Link></li>
                        <li><Link to="/kurumsal/yola-cıkarken">Yola Çıkarken</Link></li>
                    </ul>
            </li>


            <li className="has-droupdown">
                <Link to="">Yayınlar</Link>
                <ul className="submenu">
                    <li><Link to="/yayinlar">Tümü</Link></li>
                    <li><Link to="/yayinlar/analiz-dizisi">Analiz Dizisi</Link></li>
                    <li><Link to="/yayinlar/degerlendirme-dizisi">Değerlendirme Dizisi</Link></li>
                    <li><Link to="/yayinlar/etkinlik-raporları">Etkinlik Raporları</Link></li>
                    <li><Link to="/yayinlar/guncel-yayinlar-dizisi">Güncel Yayınlar Dizisi</Link></li>
                </ul>
            </li>

            <li className="has-droupdown">
                <Link to="">Yazılar</Link>
                <ul className="submenu">
                    <li><Link to="/yazilar/covid-19">COVID-19</Link></li>
                    <li><Link to="/yazilar/degerlendirme">Değerlendirme</Link></li>
                    <li><Link to="/yazilar/gorus">Görüş</Link></li>
                    <li><Link to="/yazilar/soylesi">Söyleşi</Link></li>
                    <li><Link to="/yazilar/vurus">Vuruş</Link></li>
                    <li><Link to="/yazilar/yansima">Yansıma</Link></li>
                    <li><Link to="/yazilar/yuvarlak-masa">Yuvarlak Masa</Link></li>
                </ul>
            </li>


            <li><Link to="/etkinlikler">Etkinlikler</Link></li>


            <li><Link to="/iletisim">İletişim</Link></li>

        </ul>
    )
}
export default Nav;
