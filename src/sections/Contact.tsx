import React, { useState, ChangeEvent, FormEvent } from 'react'
import Iframe from 'react-iframe'

interface IErrors {
     name: string|null
     email: string|null
     comments: string|null
}

const Contact: React.FC = () => {

     const [name, setName] = useState('')
     const [email, setEmail] = useState('')
     const [comments, setComments] = useState('')
     const [formErrors, setFormErrors] = 
          useState<{name:string|null; email:string|null; comments:string|null}>
          ({
               name: '',
               email: '',
               comments: ''
          })
     // const [formErrors, setFormErrors] = 
     //      useState<IErrors>
     //      ({
     //           name: '',
     //           email: '',
     //           comments: ''
     //      })

     const [submitted, setSubmitted] = useState(false)
     const [failedSubmit, setfailedSubmit] = useState(false)





     const handleChange = (event: ChangeEvent<HTMLInputElement>| React.ChangeEvent<HTMLTextAreaElement>) => {
          const {id, value} = event.target
      
          switch(id) {
            case 'name':
              setName(value)
              break
            case 'email':
              setEmail(value)
              break
            case 'comments':
              setComments(value)
              break
          }
      
          setFormErrors({...formErrors, [id]: validate(event, {name:null, email:null, comments:null})})
     }



     const validateName = (value:string|null):string|null => {

          const regexName = /^[a-zA-Z\s]*$/

          if (!value) {
          return 'Name must be entered' 
          } else if (value && value.length < 2) {
          return 'Name must contain more than 1 letter'
          } else if (value && !regexName.test(value)) {
          // } else if (value.name && value.name.length < 2) {
          // return 'Name must contain more than 1 letter'
          // } else if (value.name && !regexName.test(value.name)) {
          return 'Name must must contain letters only'
          } else

          return null
     }
     
     const validateEmail = (value:string|null):string|null => {
          
          const regex_email = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          
          if (!value) {
          return 'E-mail address must be entered'
          } else if (!regex_email.test(value)) {
          // } else if (value.email && !regex_email.test(value.email)) {
          return 'E-mail address must be valid (Ex. name@domain.com'
          } else

          return null
     }
     
     const validateComments = (value:string|null):string|null => {
          if (!value) {
          return 'Comment must be entered'
          } else if (value.length < 2) {
          // } else if (value.comments && value.comments.length < 2) {
          return 'Your comment must be at least 2 characters'
          } else

          return null
     }          



     const validate = (event:any, form:{name:string|null; email:string|null; comments:string|null} = {name:'', email:'', comments:''}) => {

          // const form: {name:string|null; email:string|null; comments:string|null} = {name:'', email:'', comments:''} 

          if (event.type === 'submit') {               

               formErrors.name = validateName(form.name)
               formErrors.email = validateEmail(form.email)
               formErrors.comments = validateComments(form.comments)               
               
               return formErrors

          } else {
               const {id, value} = event.target

               const myObject: {name:string|null; email:string|null; comments:string|null} = {name:'', email:'', comments:''}

               switch(id) {
                   case 'name':
                       myObject.name = validateName(value)
                   case 'email':
                         myObject.email = validateEmail(value)
                   case 'comments':
                    myObject.comments = validateComments(value)
               }

               return myObject
          }
     }



     const submitData = async (url:string, method:string, data:any, contentType = 'application/json') => {

          const result = await fetch(url, {
               method: method,
               headers: {'Content-Type': contentType},
               body: data
          })

          console.log("Fetch status:", result.status);

          if (result.status === 200) {
               return true                
          } return false
     }
      
     const handleSubmit = async (event:React.FormEvent) => {
          event.preventDefault()
          setFormErrors(validate(event, {name, email, comments})) 
        
          if (formErrors.name === null && formErrors.email === null && formErrors.comments === null) {
            
               let json = JSON.stringify({name, email, comments})
            
               setName('')
               setEmail('')
               setComments('')
               setFormErrors({name:'', email:'', comments:''})

               let result = await submitData('https://win22-webapi.azurewebsites.net/api/contactform', 'POST', json, )

               if (result) {
                    setfailedSubmit(false)
                    setSubmitted(true)
               } else {
                    setSubmitted(false)
                    setfailedSubmit(true)
               }

          } else {
               setSubmitted(false)
               setfailedSubmit(true)
          }
     }


  return (
    <section className='contact-section br'>          
          {/* <Breadcrumb currentPage='Contact'/> */}
          <div className='container-flex'>
          <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10998.376637945414!2d77.61423294193482!3d12.938969174075833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae155228d8e435%3A0x5060149e7b0a19e5!2sFixxo%20-%20Apple%20Repair%20Experts!5e0!3m2!1ssv!2sse!4v1666808466835!5m2!1ssv!2sse" width="100%" height="100%" loading="lazy" allowFullScreen={false}/>          

          </div>
          <div className='container'>
               <div className={submitted ? 'alert alert-success mt-5 text-center' : 'd-none'}>
                    <h1>Thank you,</h1>
                    <h4>Your comment was submitted successfully!</h4>
               </div>
               <div className={failedSubmit ? 'alert alert-warning mt-5 text-center' : 'd-none'}>
                    <h1>Something went wrong! Your comment was not submitted :(</h1>
               </div>
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
                                        value={name} 
                                        onChange={handleChange}
                                        onKeyUp={event => validateName} 
                                        className={formErrors.name ? "error" : ""}/>

                              <div className='error-message' id='nameErrorMsg'>{formErrors.name}</div>
                         </div>
                         <div className='input-container'>                              
                              <input    id='email' 
                                        type='email' 
                                        placeholder='Your email' 
                                        value={email} 
                                        onChange={handleChange}
                                        onKeyUp={event => validateEmail} 
                                        className={formErrors.email ? "error" : ""}/> 
                              
                              <div className='error-message' id='emailErrorMsg'>{formErrors.email}</div>
                         </div>
                         <div>
                              <div className='input-container'>
                                   <textarea id='comments' 
                                             placeholder='Your message' 
                                             value={comments} 
                                             onChange={handleChange}
                                             onKeyUp={event => validateComments} 
                                             className={formErrors.comments ? "error" : ""}/> 

                                   <div className='error-message' id='commentErrorMsg'>{formErrors.comments}</div>                                   
                              </div>
                              <button type='submit' className='fixxo-button'>Post Comments</button>
                         </div>
                    </form>
               </div>         
          </div>
    </section>
  )
}

export default Contact