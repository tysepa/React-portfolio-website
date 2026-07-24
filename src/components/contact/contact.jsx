import React, { useRef as UseRef } from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'
import emailjs from 'emailjs-com'
import { useLanguage } from '../../LanguageContext'

const Contact = () => {
  const form = UseRef();
  const { t } = useLanguage();

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
      <h5>{t('contactSub')}</h5>
      <h2>{t('contactTitle')}</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className='contact__icon'/>
            <h4>Email</h4>
            <h5>tuyiepa88@gmail.com</h5>
            <a href="mailto:tuyiepa88@gmail.com" target="_blank" rel="noreferrer">{t('sendMessage')}</a>
          </article>
          <article className='contact__option'>
            <RiMessengerLine className='contact__icon'/>
            <h4>Messenger</h4>
            <h5>Tysepa</h5>
            <a href="https://m.me/tuyisunge.epaphrodis/" target="_blank" rel="noreferrer">{t('sendMessage')}</a>
          </article>
          <article className='contact__option'>
            < BsWhatsapp className='contact__icon'/>
            <h4>Whatsapp</h4>
            <h5>+250782148861</h5>
            <a href="https://api.whatsapp.com/send?phone=250782148861" target="_blank" rel="noreferrer">{t('sendMessage')}</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder={t('placeholderName')} required />
          <input type="text" name='email' placeholder={t('placeholderEmail')} required/>
          <textarea name="message" rows="7" placeholder={t('placeholderMessage')} required></textarea>
          <button className='btn btn-primary' type='submit'>{t('submitMessage')}</button>
        </form>
      </div>
    </section>
  )
}

export default Contact 