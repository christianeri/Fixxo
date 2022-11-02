import React, { useState } from 'react'
import Iframe from 'react-iframe'
import Breadcrumb from '../components/Breadcrumb'


const ContactSection = () => {

     const [contactForm, setContactForm] = useState({name: '', email: '', comment: ''})
     
     const [name, setName] = useState('')
     const [email, setEmail] = useState('')
     const [comment, setComment] = useState('')

     const [formErrors, setFormErrors] = useState({})

     const [hasNameError, setHasNameError] = useState(false)
     const [hasEmailError, setHasEmailError] = useState(false)
     const [hasCommentError, setHasCommentError] = useState(false)

     const [submitted, setSubmitted] = useState(false)

     
     const validate = (values) => {

          const errors = {}
          const regexEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

          if(!values.name) {
              errors.name = "You must enter a name"
               setHasNameError(true)
          }

          if(!values.email) {
              errors.email = "You must enter an email"
               setHasEmailError(true)
          } else if (!regexEmail.test(values.email)) {
               errors.email = "You must enter a valid email address (ex. name@domain.com)"
               setHasEmailError(true)
          } else {
               setHasEmailError(false)
          }

          if(!values.comment) {
              errors.comment = "You must enter a comment"
               setHasCommentError(true)
          } else if (values.comment.lenght < 3) {
               errors.comment = "Your comment must contain more than 2 letters"
               setHasCommentError(true)
          } else {
               setHasCommentError(false)
          }

          if (Object.keys(errors).length === 0) {
               setSubmitted(true)
          } else {
               setSubmitted(false)
          }

          return errors
     }
     
     const handleChange = (event) => {
          const {id, value} = event.target
          setContactForm({...contactForm, [id]: value})
     }
     
     /*
     const handleChange = (event) => {
          const {id, value} = event.target

          switch(id) {
               case 'name':
                    setName(value)
                    break
               case 'email':
                    setEmail(value)
                    break
               case 'comment':
                    setComment(value)
                    break
          }
          setFormErrors({...errors, [id]: validate(event)})  
     }
     */

     // const handleSubmit = (event) => {
     //      event.preventDefault()
     //      setFormErrors(
     //           validate(contactForm)
     //      )
     // }

     const handleSubmit = (event) => {
          event.preventDefault()
          setFormErrors(validate(event, {name, email, comment}))
          
          if (formErrors.name === null && formErrors.email === null && formErrors.comment === null) {

               let json = JSON.stringify({name, email, comment})

               setName('')
               setEmail('')
               setComment('')
               setFormErrors({})

               fetch('https://win22-webapi.azurewebsites.net/swagger/index.html', {
                    method: 'POST',
                    headers: {
                         'Content-Type': 'application/json'
                    },
                    body: json
               }).then(result => { console.log(result)

                    if(result.status === 200) {
                         setSubmitted(true)
                    } else {
                         setSubmitted(false)
                    }                                      
               })

          } else setSubmitted(false)
     }
     
     /*
     const handleOnKeyUp = (event) => {
          event.preventDefault()
          setFormErrors(
               if()
               validate(contactForm)
          )
     }
     */

  return (
    <section className='contact-section'>          
          <Breadcrumb currentPage='Contact'/>
          <div className='container-flex'>
               <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10998.376637945414!2d77.61423294193482!3d12.938969174075833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae155228d8e435%3A0x5060149e7b0a19e5!2sFixxo%20-%20Apple%20Repair%20Experts!5e0!3m2!1ssv!2sse!4v1666808466835!5m2!1ssv!2sse" width="100%" height="100%" style="border:0;" loading="lazy" referrerPolicy="no-referrer-when-downgrade"/>          
          </div>
          <div className={submitted ? 'container mt-5' : 'd-none'}>
               <h1>Thank you for your comment!</h1>
          </div>
          <div className='container'>               
               <div className={submitted ? 'invisible' : 'contact-form'}>
                    <h4>Come in Contact with Us</h4>
                    {/* <pre>{ JSON.stringify(formErrors)}</pre> */}
                    <form onSubmit={handleSubmit} noValidate>
                         <div className='input-container'>
                              <input    id='name' 
                                        type='text' 
                                        placeholder='Your name' 
                                        value={contactForm.name} 
                                        onChange={handleChange}
                                        // onKeyUp={validate(event)} 
                                        className={hasNameError ? "error" : ""}/>

                              <div className='error-message' id='nameErrorMsg'>{formErrors.name}</div>
                         </div>
                         <div className='input-container'>                              
                              <input    id='email' 
                                        type='email' 
                                        placeholder='Your email' 
                                        value={contactForm.email} 
                                        onChange={handleChange}
                                        // onKeyUp={validate(event)} 
                                        className={hasEmailError ? "error" : ""}/> 
                              
                              <div className='error-message' id='emailErrorMsg'>{formErrors.email}</div>
                         </div>
                         <div>
                              <div className='input-container'>
                                   <textarea id='comment' 
                                             type='text' 
                                             placeholder='Your message' 
                                             value={contactForm.comment} 
                                             onChange={handleChange}
                                             // onKeyUp={validate(event)} 
                                             className={hasCommentError ? "error" : ""}/> 

                                   <div className='error-message' id='commentErrorMsg'>{formErrors.comment}</div>                                   
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