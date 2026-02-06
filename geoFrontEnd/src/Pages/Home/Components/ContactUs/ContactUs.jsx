import './ContactUs.css'
import msg_icon from '../../../../assets/contactUs/msg-icon.png'
import mail_icon from '../../../../assets/contactUs/mail-icon.png'
import phone_icon from '../../../../assets/contactUs/phone-icon.png'
import location_icon from '../../../../assets/contactUs/location-icon.png'
import white_arrow from '../../../../assets/contactUs/white-arrow.png'
import React from 'react'

const ContactUs = () => {
  const [result, setResult] = React.useState('')

  const onSubmit = async (event) => {
    event.preventDefault()
    setResult('Sending....')
    const formData = new FormData(event.target)

    formData.append('access_key', '04bda5a2-b63c-4c82-a10a-62da93938e86')

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    })

    const data = await response.json()

    if (data.success) {
      setResult('Form Submitted Successfully')
      event.target.reset()
    } else {
      console.log('Error', data)
      setResult(data.message)
    }
  }

  return (
    <section className='r-wrapper' id='contact'>
      <div className='paddings innerWidth r-container'>
        <div className='r-head flexColStart'>
          <span className='orangeText'>CONTACT US</span>
          <span className='primaryText'>Get in Touch</span>
        </div>

        <div className='contact'>
          <div className='contact-col'>
            <h3>
              Send us a message <img src={msg_icon} alt='' />
            </h3>
            <p>
              Feel free to reach out through contact form or find our contact
              information below. Your feedback, questions, and suggestions are
              important to us as we strive to provide exceptional service to our
              university community.
            </p>
            <ul>
              <li>
                {' '}
                <img src={mail_icon} alt='' /> webmaster.webmaster@univh2c.ma
              </li>
              <li>
                {' '}
                <img src={phone_icon} alt='' /> +212 6 14 000 400
              </li>
              <li>
                <img src={location_icon} alt='' /> N°51, HAY IFRIQUIA RUE
                ECHAHID ELOUALID ESSAGHIR, Casablanca 20000
              </li>
            </ul>
          </div>
          <div className='contact-col'>
            <form onSubmit={onSubmit}>
              <label>Your Name</label>
              <input
                type='text'
                name='name'
                placeholder='Enter you name'
                required
              />
              <label>Your Email</label>
              <input
                type='email'
                name='email'
                placeholder='Enter you email'
                required
              />
              <label>Phone Number</label>
              <input
                type='tel'
                name='phone'
                placeholder='Enter you mobile number'
                required
              />
              <label>Write your message here</label>
              <textarea
                name='message'
                rows='6'
                placeholder='Enter your message'
                required
              ></textarea>
              <button type='submit' className='btn dark-btn'>
                Submit now <img src={white_arrow} alt='' />
              </button>
            </form>
            <span> {result} </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactUs
