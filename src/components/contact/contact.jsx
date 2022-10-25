import React from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'
import{ useRef as UseRef } from 'react';
import emailjs from 'emailjs-com'

const contact = () => {
  const form = UseRef();


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_jco5ame', 'template_3iinkf9', form.current, 'jc9BS7QXacoWGMux3')
       e.target.reset()
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };


  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className='contact__icon'/>
            <h4>Email</h4>
            <h5>dummyegator@gmail.com</h5>
            <a href="epamarayika@gmail.com">send a message</a>
          </article>
          <article className='contact__option'>
            <RiMessengerLine className='contact__icon'/>
            <h4>Messeger</h4>
            <h5>Tysepa</h5>
            <a href="https://m.me/tuyisunge.epaphrodis/">send a message</a>
          </article>
          <article className='contact__option'>
            < BsWhatsapp className='contact__icon'/>
            <h4>Whatsapp</h4>
            <h5>+250782148861</h5>
            <a href="https://api.whatsapp.com/send?phone+250782148861">send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your full Name' required />
          <input type="text" name='email' placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button className='btn btn-primary' type='submit'>send Message</button>
        </form>
      </div>
    </section>
  )
}

export default contact 