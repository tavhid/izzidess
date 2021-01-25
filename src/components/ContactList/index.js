import React, { useEffect } from 'react'
import './index.sass'
import timeImg from './time.png'
import locationImg from './location.png'
import phoneImg from './phone.png'
import { useSelector } from 'react-redux'
import Aos from 'aos'
import 'aos/dist/aos.css'

const ContactItem = ({img, text}) => {
  return (
    <li className="contact-item">
      <img src={img} alt=""/>
      <p>{text}</p>
    </li>
  )
}

const ContactList = ({data}) => {
  useEffect(() => {
    Aos.init()
  }, []);

  const lang = useSelector(state => state.lang)

  return (
    <div className="contact-list">
      <div className="container">
        <div data-aos='fade-right' data-aos-duration="700">
          <ContactItem img={timeImg} text={lang ==='en' ? data.time_en : data.time_ru} />
        </div>
        <div data-aos='fade-up' data-aos-duration="700" data-aos-dealy="200">
          <ContactItem img={locationImg} text={lang ==='en' ? data.location_en : data.location_ru} />
        </div>
        <div data-aos='fade-left' data-aos-duration="700" data-aos-dealy="400">
          <ContactItem img={phoneImg} text={data.phone} />
        </div>
      </div>
    </div>
  )
}

export default ContactList