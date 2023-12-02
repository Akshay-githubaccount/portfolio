import React from 'react'
import { useState } from 'react';
import './contact.css'
import emailjs from "@emailjs/browser";

const Contact = () => {
  const serviceId = "service_b3b2bfa"
  const templateId = "template_g89mb98"
  const publicKey = "QnwwEAnUP4Mxe5Kwy"
  const [email, setEmail] = useState()
  console.log("email", email)
  const handleSubmit = (e) =>{
    e.preventDefault()
    emailjs.send(serviceId, templateId, email).then((response) =>{
      console.log("response send successfully", response)
    }).catch((error) =>{
      console.log("error", error)
    })
    
  };
 
  emailjs.init(publicKey)
  return (
    <div className='contact-form'>
        <div className='w-left'>
            <div className='awesome'>
                <span>Get in Touch</span>
                <span>Contact me</span>
                <div className='blur s-blur1'
                style={{background: "#ABF1FF94"}}>
                </div>
            </div>
        </div>
        <div className='c-right'>
            <form>
                <input type='text' name="user_name" className='user' placeholder='Name'></input>
                <input type='email' name="user_email" className='user' placeholder='Email' onChange={(e) =>setEmail(e.target.value)}></input>
                <textarea name="message" className='user' placeholder='Message'></textarea>
                <input type='submit' value="Send" className='button' onClick={handleSubmit}></input>
                <div
                className='blur c-blur'
                style={{background:"var(--purple)"}}></div>

            </form>
               {/* <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form> */}
        </div>
      
    </div>
  )
}

export default Contact
