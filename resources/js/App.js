import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ScrollToTop from './components/scrolltotop/ScrollToTop'
import AboutUsOne from './pages/innerpages/AboutUsOne'
import ContactMe from './pages/innerpages/ContactMe'
import CourseOne from './pages/course/CourseOne'
import CourseTwo from './pages/course/CourseTwo'
import CourseTwoo from './pages/course/CourseTwoo'
import CourseThree from './pages/course/CourseThree'
import CourseCategoryArchive from './pages/archive/CourseCategoryArchive'
import CourseDetails from './pages/detailspages/CourseDetails'
import EventGrid from './pages/innerpages/EventGrid'
import EventDetails from './pages/detailspages/EventDetails'
import HomeOne from './pages/homepages/HomeOne'
import Error from './pages/innerpages/Error'
import BultenPage from './pages/innerpages/BultenPage'
import HeaderOne from './common/header/HeaderOne'
import FooterOne from './common/footer/FooterOne'
import Personnel from './components/personnels/Personnel'

function App() {
  return (
    <Router>
      <ScrollToTop>
        <HeaderOne styles="header-transparent header-style-2" />
        <Routes>
          <Route exact path="/" element={<HomeOne />} />

          <Route exact path={'/kurumsal'} element={<AboutUsOne />} />
          <Route exact path={'/kurumsal/:slug'} element={<Personnel />} />

          <Route exact path={'/iletisim'} element={<ContactMe />} />

          <Route exact path={'/arama'} element={<CourseOne />} />

          <Route exact path={'/etkinlikler'} element={<CourseThree />} />
          <Route exact path={'/etkinlikler/:slug'} element={<CourseThree />} />
          <Route exact path={'/yazilar/:slug'} element={<CourseTwo />} />

          <Route exact path={'/yazilar-detay/:slug'} element={<CourseTwoo />} />

          <Route
            exact
            path={'/course-details/:slug'}
            element={<CourseDetails />}
          />
          <Route exact path={'/bulten'} element={<BultenPage />} />
          <Route exact path={'/yayinlar'} element={<EventGrid />} />

          <Route exact path={'/yayinlar/:slug'} element={<EventGrid />} />

          <Route
            exact
            path={'/yayinlar-detay/:slug'}
            element={<EventDetails />}
          />
          <Route path="*" element={<Error />} />
        </Routes>
        <FooterOne />
      </ScrollToTop>
    </Router>
  )
}

export default App
