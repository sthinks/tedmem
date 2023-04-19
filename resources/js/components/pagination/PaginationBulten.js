import React from 'react'
import './pagination.css'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'

const PaginationBulten = ({
  totalPosts,
  postPerPage,
  setCurrentPage,
  currentPage,
}) => {
  const scrollToTop = () => {
    document.body.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
  }
  let pages = []
  const pathname = window.location.pathname

  const previousHandler = () => {
    if (currentPage == 1) setCurrentPage(1)
    else setCurrentPage(currentPage - 1)
  }
  const nextHandler = () => {
    const lastPostIndex = Math.ceil(totalPosts / postPerPage)
    if (currentPage == lastPostIndex) setCurrentPage(lastPostIndex)
    else setCurrentPage(currentPage + 1)
  }

  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pages.push(i)
  }
  return (
    <nav aria-label="">
      <ul
        className={
          window.screen.width < 768
            ? 'pagination-scroll mt-5 overflow-auto'
            : 'pagination mt-5'
        }
      >
        <li className="page-item">
          <a
            className="page-item-pagination"
            href={pathname === '/etkinlikler' ? '#etkinlikler' : '#bulten'}
            onClick={() => {
              setCurrentPage(previousHandler), scrollToTop
            }}
          >
            <FiArrowLeft /> Geri
          </a>
        </li>

        {pages?.map((item, i) => {
          if (
            item === 1 ||
            item === pages.length ||
            (item >= currentPage - 2 && item <= currentPage + 2)
          ) {
            // 1, son sayfa veya 5 sayfa aralığındaki sayfaları yazdır
            return (
              <li
                className={
                  item == currentPage ? 'page-item active' : 'page-item'
                }
                key={i}
              >
                <a
                  className="page-link"
                  onClick={() => setCurrentPage(item)}
                  href={
                    pathname === '/etkinlikler' ? '#etkinlikler' : '#bulten'
                  }
                >
                  {item}
                </a>
              </li>
            )
          } else if (i === 2 || i === pages.length - 3) {
            // 4. veya 12. sayfaya yaklaşıldığında '...' işareti göster
            return (
              <li className="page-item" key={i}>
                <a className="page-link">...</a>
              </li>
            )
          }
        })}
        <li className="page-item">
          <a
            className="page-item-pagination"
            href={pathname === '/etkinlikler' ? '#etkinlikler' : '#bulten'}
            onClick={() => {
              setCurrentPage(nextHandler), scrollToTop
            }}
          >
            İleri <FiArrowRight />
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default PaginationBulten
