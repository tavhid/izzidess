import React, { useState } from 'react'
import './index.sass'
import timeImg from './time.png'
import locationImg from './location.png'
import phoneImg from './phone.png'

const ContactItem = ({img, text}) => {
  return (
    <li className="contact-item">
      <img src={img} alt=""/>
      <p>{text}</p>
    </li>
  )
}

const ContactList = () => {
  const [data, setData] = useState({
    location: 'Душанбе, ул. Фотех Ниези 25',
    time: 'C 10:00 до 21:00',
    phone: '+992 98 736 53 65'
  })

  return (
    <div className="contact-list">
      <div className="container">
        <ContactItem img={timeImg} text={data.time} />
        <ContactItem img={locationImg} text={data.location} />
        <ContactItem img={phoneImg} text={data.phone} />
      </div>
    </div>
  )
}

export default ContactList