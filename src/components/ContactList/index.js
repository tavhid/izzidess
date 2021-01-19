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

const ContactList = ({data}) => {

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