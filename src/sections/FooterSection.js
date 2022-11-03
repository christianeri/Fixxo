import React from 'react'

const FooterSection = () => {
  return (
     <footer>
          <div className='container'>
               <span className='social-media-links'>
                    <a href="https://facebook.com" target="_blank"><i className="fa-brands fa-facebook-f"></i></a>
                    <a href="https://instagram.com" target="_blank"><i className="fa-brands fa-instagram"></i></a>
                    <a href="https://twtter.com" target="_blank"><i className="fa-brands fa-twitter"></i></a>
                    <a href="https://google.com" target="_blank"><i className="fa-brands fa-google"></i></a>
                    <a href="https://linkedin.com" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
               </span>
               <h6>© 2022 Fixxo. All Rights Reserved</h6>
          </div>
     </footer>
  )
}

export default FooterSection