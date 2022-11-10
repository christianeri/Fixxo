import React from 'react'
import MainNavigation from '../sections/MainNavigation'
import ContactSection from '../sections/ContactSection'
import Footer from '../sections/Footer'

const ContactView = () => {

  window.top.document.title = 'Fixxo | Contact'

  return (
    <>
      <MainNavigation/>
      <ContactSection/>
      <Footer/>
    </>
  )
}

export default ContactView 