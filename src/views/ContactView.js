import React from 'react'
import NavigationSection from '../sections/NavigationSection'
import ContactSection from '../sections/ContactSection'
import Footer from '../sections/Footer'

const ContactView = () => {

  window.top.document.title = 'Fixxo | Contact'

  return (
    <>
      <NavigationSection/>
      <ContactSection/>
      <Footer/>
    </>
  )
}

export default ContactView 