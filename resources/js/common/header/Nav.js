import React, { useRef, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FiChevronDown } from 'react-icons/fi'
import axiosClient from '../../utils/axiosClient'
const Nav = ({ close }) => {
  const [writeCategory, setWriteCategory] = useState()
  const [publicCategory, setPublicCategory] = useState()
  const mobilNav1 = useRef()
  const mobilNav2 = useRef()
  const mobilNav3 = useRef()
  const mobilNav4 = useRef()
  const mobilNav5 = useRef()
  const mobilNav6 = useRef()

  useEffect(() => {
    getAllCategory()
    getAllCategory2()
    const closeDropdown = (e) => {
      if (
        e.target === mobilNav1.current.children[0] ||
        e.target === mobilNav4.current.children[0] ||
        e.target === mobilNav5.current.children[0] ||
        e.target === mobilNav6.current.children[0]
      ) {
        close()
      } else {
        for (let i = 0; i <= 8; i++) {
          if (
            e.target === mobilNav2.current.children[1].children[i].children[0]
          ) {
            close()
          } else if (
            e.target === mobilNav3.current.children[1].children[i].children[0]
          ) {
            close()
          }
        }
      }
    }
    document.body.addEventListener('click', closeDropdown)
    return () => document.body.removeEventListener('click', closeDropdown)
  }, [])

  const getAllCategory = async () => {
    await axiosClient
      .get('/api/write-category')
      .then((res) => setWriteCategory(res.data))
  }
  const getAllCategory2 = async () => {
    await axiosClient
      .get('/api/public-category')
      .then((res) => setPublicCategory(res.data))
  }
  return (
    <ul className="mainmenu">
      <li ref={mobilNav1}>
        <Link to="/kurumsal">Kurumsal </Link>
      </li>

      <li ref={mobilNav2} className="has-droupdown">
        <Link to="#">
          Yayınlar <FiChevronDown />
        </Link>
        <ul className="submenu">
          <li>
            <Link to="/yayinlar">Tümü</Link>
          </li>
          {publicCategory?.map((item, i) => (
            <li key={i}>
              <Link to={`/yayinlar/${item.slug}`}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </li>

      <li ref={mobilNav3} className="has-droupdown">
        <Link to="#">
          Yazılar <FiChevronDown />
        </Link>
        <ul ref={mobilNav3} className="submenu">
          {writeCategory?.map((item, i) => (
            <li key={i}>
              <Link to={`/yazilar/${item.slug}`}>{item.name}</Link>
            </li>
          ))}
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
