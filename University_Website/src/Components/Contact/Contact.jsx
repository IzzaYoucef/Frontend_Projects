import React from 'react'
import message from '../../assets/msg-icon.png'
import contact from '../../assets/mail-icon.png'
import phone from '../../assets/phone-icon.png'
import location from '../../assets/location-icon.png'
import arrow from '../../assets/next-icon.png'
import './Contact.css'
const Contact = () => {
      const [result, setResult] = React.useState("");
     const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "fe4a3d3a-323e-4e4b-8e25-8c34edfd08ea");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
      <div className='container contact-info' id='contact'>
          <div className="main-informations">
        <caption style={{
                margin : '30px' ,
              }}>
              <h2>Send A Message</h2>
              <img src={message} alt="" />
            </caption>
          <br />
          <p>
          Feel free to reach out through contact form or find our contact information below. <br />
          Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.
          </p>
              <div className="info">
                  <img src={contact} alt="" />
                  <p>y_izza@estin.dz</p>
              </div>
              <div className='info'>
                  <img src={phone} alt="" />
                  <p>+213 663367803</p>
              </div>
              <div className='info'>
                  <img src={location} alt="" />
                  <p>Rue National 75 , Beni Ourtilane , Setif . Alger</p>
              </div>
          </div>
          <form onSubmit={onSubmit}>
        <div style={{
                  marginLeft : '25px' 
              }}>
                   <p>Your Name</p>
                 <input name = "Name:" type="text" placeholder='Enter Your Name' />
              </div>
        <div
          style={{
                  marginLeft : '25px' 
              }}
        >
                  <p>Phone Number</p>
                  <input name='Phone number:' type="text" placeholder='Enter Your Number' />
              </div>
        <div style={{
                  marginLeft : '25px' 
              }}
        >
                   <p>Your Email</p>
                   <input name='Email:' type="eamil" placeholder='Enter You Email' />
               </div>
              <div style={{
                  marginLeft : '25px' 
              }}>
                  <p>Write Your Message Here</p>
                 <textarea name="Message:" id="" placeholder='Add your text'></textarea>
              </div>
              <button style={{
                  marginLeft : '25px' 
              }}>Submit Now</button>
              <span>{result}</span>
          </form>
         
    </div>
  )
}

export default Contact