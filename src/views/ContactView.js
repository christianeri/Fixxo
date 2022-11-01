import React from 'react'
import NavigationSection from '../sections/NavigationSection'
import ContactSection from '../sections/ContactSection'
import FooterSection from '../sections/FooterSection'

const ContactView = () => {

  window.top.document.title = 'Fixxo | Contact'

  return (
    <>
      <NavigationSection/>
      <ContactSection/>
      <FooterSection/>
    </>
  )
}

export default ContactView 