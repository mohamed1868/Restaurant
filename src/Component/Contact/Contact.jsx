// eslint-disable-next-line no-unused-vars
import React from 'react'
import style from './Contact.module.css'
import Swal from 'sweetalert2'
import { motion } from 'motion/react'
import { fadein } from '../../Test'

const {lastInput,ContainerFormContact ,divInputCotect,titleContact ,containerContact ,ContainerOne} =style


export default function Contact() {
   const onSubmit = async (event) => {
      event.preventDefault();
      const formData = new FormData(event.target);
  
      formData.append("access_key", "84be3961-95a8-432f-a781-9eaad46bfc24");
  
      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);
  
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      }).then((res) => res.json());
  
      if (res.success) {
         Swal.fire({
            title: "Success!",
            text: "Massage Send SuccessFully!",
            icon: "success"
          });
      }
    };
  return (<>
  <motion.div variants={fadein('left' , 0.2)}
              initial='hidden'
              whileInView={'show'}
              viewport={{once:false , amount:0.7}} className={`container`}>
     <h1 className={`${titleContact}`} >Contact Us</h1>
 <div className={`${containerContact} row` }>
    <div className={`${ContainerOne} col-4 col-m-6`} > 
        <h1>Contact Information</h1>
        <p>Say something to start a live chat!</p>
        <div className='row'>
           <i className="fa-solid fa-phone col-lg-1 col-sm-6"></i>
           <h3 className='col-lg-11 col-sm-6'>+0201145694211</h3> 
        </div>
        <div className='row'>
        <i className="fa-solid fa-envelope col-lg-1 col-sm-6"></i>
           <h3 className='col-lg-11 col-sm-6'>mohamedsayed20500@gmail.com</h3> 
        </div>
        <div className='row'>
        <i className="fa-solid fa-location-dot col-lg-1 col-sm-6"></i>
           <h3 className='col-lg-11 col-sm-6'>Imbaba,Giza,Egypt</h3> 
        </div>
    </div>
    <form className={`${ContainerFormContact} col-lg-6 col-m-6 row`} onSubmit={onSubmit}>
   <div className={`${divInputCotect} col-6`} >
    <label>First Name</label>
    <input required name='FirstName' type='text'></input>
   </div>
   <div className={`${divInputCotect} col-6`}>
    <label>Last Name</label>
    <input required  name='LastName' type='text'></input>
   </div>
   <div className={`${divInputCotect} col-6`}>
    <label>Phone Number</label>
    <input required name='PhoneNumber' type='text'></input>
   </div>
   <div className={`${divInputCotect} col-6`}>
    <label>Email</label>
    <input required name='Email'  type='text'></input>
   </div>
   <div className={`${divInputCotect} col-12`}>
    <label>Message</label>
    <input  name='Massage' placeholder='Write your message..' className={`${lastInput}`} type='text'></input>
   </div>
   <button type='submit'>Send Message</button>

   
    </form>
  </div>
 </motion.div>

  
  </>
    
  )
}
