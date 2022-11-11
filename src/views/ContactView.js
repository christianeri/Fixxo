import React from 'react'
import MainNavigation from '../sections/MainNavigation'
import Breadcrumb from '../components/Breadcrumb'
import ContactSection from '../sections/ContactSection'
import Footer from '../sections/Footer'

const ContactView = () => {

  window.top.document.title = 'Fixxo | Contact'

  return (
    <>
      <MainNavigation/>
      <Breadcrumb currentPage='Contact'/>
      <ContactSection/>
      <Footer/>
    </>
  )
}

export default ContactView 