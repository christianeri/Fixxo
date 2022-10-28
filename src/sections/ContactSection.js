import React from 'react'
import { NavLink } from 'react-router-dom'
import Iframe from 'react-iframe'
import Breadcrumb from '../components/Breadcrumb'



const ContactSection = () => {

     let event
     const validate = (event) => {
          console.log("nummer 1", event); 
     }

  return (
    <section className='contact-section'>          
          <Breadcrumb view='Contact'/>
          <div className='container-flex'>
               <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10998.376637945414!2d77.61423294193482!3d12.938969174075833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae155228d8e435%3A0x5060149e7b0a19e5!2sFixxo%20-%20Apple%20Repair%20Experts!5e0!3m2!1ssv!2sse!4v1666808466835!5m2!1ssv!2sse" width="100%" height="100%" style="border:0;" loading="lazy" referrerPolicy="no-referrer-when-downgrade"/>          
          </div>
          <div className='container'>
               <div className='contact-form'>
                    <h4>Come in Contact with Us</h4>
                    <form noValidate>
                         <div className='input-container'>
                              <input id='name' type='text' placeholder='Your name' className='' onKeyUp={validate(event)}/>
                              {/* <input id='name' type='text' placeholder='Your name' className='error'/> */}
                              <div className='error-message' id='nameErrorMsg'>You must enter a name</div>
                         </div>
                         <div className='input-container'>
                              <input id='email' type='email' placeholder='Your email' className=''/>
                              {/* <input id='email' type='email' placeholder='Your email' className='error'/> */}
                              <div className='error-message' id='emailErrorMsg'>You must enter a valid email address</div>
                         </div>
                         <div>
                              <div className='input-container'>
                                   <textarea id='comment' type='text' placeholder='Your message' className=''/>
                                   {/* <textarea id='comment' type='text' placeholder='Your message' className='error'/> */}
                                   <div className='error-message' id='commentErrorMsg'>You must enter a message</div>                                   
                              </div>
                              <button type='submit' >Post Comments</button>
                         </div>
                    </form>
               </div>
          </div>
    </section>
  )
}

export default ContactSection