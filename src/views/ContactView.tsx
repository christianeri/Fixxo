import { useEffect } from 'react'
import MainNavigation from '../sections/MainNavigation'
import Breadcrumb from '../components/Breadcrumb'
import Contact from '../sections/Contact'
import Footer from '../sections/Footer'

const ContactView: React.FC = () => {

     useEffect(() => {
          document.title = "Fixxo | Contact"
       }, []);

  return (
    <>
      <MainNavigation/>
      <Breadcrumb currentPage='Contact'/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default ContactView 