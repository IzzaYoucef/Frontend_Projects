import React, { useRef } from 'react'
import './Contact.css'
import Title from '../Title/Title'
import facebook from '../../assets/facebook-icon.png'
import twitter from '../../assets/twitter.png'
import youtube from '../../assets/youtube.png'
import instagram from '../../assets/instagram.png'
import emailjs from '@emailjs/browser' 
const Contact = () => {
     const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_3ve4kao', 'template_dmbg8rr', form.current, {
        publicKey: 'vopnZtSGE9KAtDdmjCSKQ',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
      <div className='melange'>
          <div className="title-contact">
              <Title title={'Contact Me'} />
          </div>
          <form  onSubmit={() => {sendEmail()}} ref={form} >
              <input type="text" name="Nmae :" id="" placeholder='Enter Your Name' />
              <input type="Email" name="Email :" id="" placeholder='Enter Your Email' />
              <textarea name="Message :" id="" placeholder='Enter Your Message'></textarea>
              <button>Submit</button>
          </form>
          <div className="icons">
              <img src={facebook} alt="" />
              <img src= {twitter} alt="" />
              <img src= {youtube} alt="" />
              <img src= {instagram} alt="" />
          </div>
          <footer>
              <h3>Higher Scool Of Computer Science And Degital Technologies ESTIN</h3>
              <h4>Laboratory LITAN <h3>Bejaia , Algerie</h3></h4>
          </footer>
    </div>
  )
}

export default Contact