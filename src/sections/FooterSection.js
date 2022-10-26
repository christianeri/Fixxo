import React from 'react'
import { NavLink } from 'react-router-dom'

const FooterSection = () => {
  return (
     <footer>
          <div className='container'>
               <span>
                    <a href="https://facebook.com" target="_blank"><i class="fa-brands fa-facebook-f"></i></a>
                    <a href="https://instagram.com" target="_blank"><i class="fa-brands fa-instagram"></i></a>
                    <a href="https://twtter.com" target="_blank"><i class="fa-brands fa-twitter"></i></a>
                    <a href="https://google.com" target="_blank"><i class="fa-brands fa-google"></i></a>
                    <a href="https://linkedin.com" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
               </span>
               <h6>© 2022 Fixxo. All Rights Reserved</h6>
          </div>
     </footer>
  )
}

export default FooterSection