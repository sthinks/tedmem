import React, { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Nav from './mobilNav'
import Logo from '../../assets/images/bg/tedmem.png'
import { IoIosClose } from 'react-icons/io'
const ResponsiveMenu = ({
  show,
  onClose,
  writeCat,
  publicsCat,
  showSearch,
  onSearch,
  writes,
  mobilNavActive,
}) => {
  const mobilNavbar = useRef()
  const mobilNavContent = useRef()

  // Empty screen click close search bar.
  useEffect(() => {
    const closeDropdown = (e) => {
      if (
        e.target === mobilNavContent.current &&
        e.target != mobilNavbar.current
      ) {
        onClose()
      }
    }
    document.body.addEventListener('click', closeDropdown)
    return () => document.body.removeEventListener('click', closeDropdown)
  }, [])

  var elements = document.querySelectorAll(
    '.popup-mobile-menu .has-droupdown > a',
  )
  var elementsTwo = document.querySelectorAll(
    '.popup-mobile-menu .with-megamenu > a',
  )

  for (var i in elements) {
    if (elements.hasOwnProperty(i)) {
      elements[i].onclick = function () {
        this.parentElement.querySelector('.submenu').classList.toggle('active')
        this.classList.toggle('open')
      }
    }
  }

  for (var j in elementsTwo) {
    if (elementsTwo.hasOwnProperty(i)) {
      elementsTwo[j].onclick = function () {
        this.parentElement
          .querySelector('.rn-megamenu')
          .classList.toggle('active')
        this.classList.toggle('open')
      }
    }
  }

  return (
    <>
      <div
        className={`popup-mobile-menu ${show ? 'active' : ''}`}
        ref={mobilNavContent}
      >
        <div className="inner" ref={mobilNavbar}>
          <div className="header-top">
            <div className="logo">
              <Link to="/">
                <img src={Logo} alt="Main Logo" />
              </Link>
            </div>
            <div className="close-menu">
              <button className="close-button" onClick={onClose}>
                <IoIosClose style={{ fontSize: '30px' }} />
              </button>
            </div>
          </div>

          <Nav
            close={onClose}
            show={show}
            writeCat={writeCat}
            publicsCat={publicsCat}
          />
        </div>
      </div>
    </>
  )
}

export default ResponsiveMenu
