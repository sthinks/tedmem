import React, { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FiChevronDown } from 'react-icons/fi'

const Nav = ({ close }) => {
  const mobilNav1 = useRef()
  const mobilNav2 = useRef()
  const mobilNav3 = useRef()
  const mobilNav4 = useRef()
  const mobilNav5 = useRef()
  const mobilNav6 = useRef()
  useEffect(() => {
    const closeDropdown = (e) => {
      console.log('ref2', mobilNav2)
      console.log('ref3', mobilNav3.current.children[1].children[1])

      console.log(e.path[1])
      if (
        e.path[1] === mobilNav1.current ||
        e.path[1] === mobilNav4.current ||
        e.path[1] === mobilNav5.current ||
        e.path[1] === mobilNav6.current
      ) {
        close()
      }
      for (let i = 0; i <= 5; i++) {
        if (e.path[1] === mobilNav2.current.children[1].children[i]) {
          close()
        }
      }
      for (let i = 0; i <= 8; i++) {
        if (e.path[1] === mobilNav3.current.children[1].children[i]) {
          close()
        }
      }
    }
    document.body.addEventListener('click', closeDropdown)
    return () => document.body.removeEventListener('click', closeDropdown)
  }, [])
  return (
    <ul className="mainmenu">
      <li ref={mobilNav1}>
        <Link to="/kurumsal/amacımız">Kurumsal </Link>
      </li>

      <li ref={mobilNav2} className="has-droupdown">
        <Link to="/yayinlar">
          Yayınlar <FiChevronDown />
        </Link>
        <ul className="submenu">
          <li>
            <Link to="/yayinlar">Tümü</Link>
          </li>
          <li>
            <Link to="/yayinlar/analiz-dizisi">Analiz Dizisi</Link>
          </li>
          <li>
            <Link to="/yayinlar/degerlendirme-dizisi">
              Değerlendirme Dizisi
            </Link>
          </li>
          <li>
            <Link to="/yayinlar/etkinlik-raporları">Etkinlik Raporları</Link>
          </li>
          <li>
            <Link to="/yayinlar/guncel-yayinlar-dizisi">
              Güncel Yayınlar Dizisi
            </Link>
          </li>
        </ul>
      </li>

      <li ref={mobilNav3} className="has-droupdown">
        <Link to="/yazilar/egitim">
          Yazılar <FiChevronDown />
        </Link>
        <ul className="submenu">
          <li>
            <Link to="/yazilar/egitim">Eğitim</Link>
          </li>
          <li>
            <Link to="/yazilar/covid-19">COVID-19</Link>
          </li>
          <li>
            <Link to="/yazilar/degerlendirme">Değerlendirme</Link>
          </li>
          <li>
            <Link to="/yazilar/gorus">Görüş</Link>
          </li>
          <li>
            <Link to="/yazilar/soylesi">Söyleşi</Link>
          </li>
          <li>
            <Link to="/yazilar/vurus">Vuruş</Link>
          </li>
          <li>
            <Link to="/yazilar/yansima">Yansıma</Link>
          </li>
          <li>
            <Link to="/yazilar/yuvarlak-masa">Yuvarlak Masa</Link>
          </li>
        </ul>
      </li>

      <li ref={mobilNav4}>
        <Link to="/bulten">Bültenler</Link>
      </li>

      <li ref={mobilNav5}>
        <Link to="/etkinlikler">Etkinlikler</Link>
      </li>

      <li ref={mobilNav6}>
        <Link to="/iletisim">İletişim</Link>
      </li>
    </ul>
  )
}
export default Nav
