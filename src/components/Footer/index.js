import React, { useEffect, useState } from 'react'
import './index.sass'
import footerLogo from './IZZIDESS.png'
import { useSelector } from 'react-redux'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom'

const Footer = ({ data, copyright, aboutfooter_en, aboutfooter_ru }) => {
  useEffect(() => {
    Aos.init()
  }, []);
  const lang = useSelector(state => state.lang)

  return (
    <div className="footer" data-aos='fade-up' data-aos-duration="700">
      <div className="container">
        <div className="row row-1">
          <div className="col col-1">
            <img src={footerLogo} alt=""/>
            <span>
              {lang === 'en' ? aboutfooter_en : aboutfooter_ru}
            </span>
            <span>{ copyright }</span>
          </div>
          <div className="col col-2">
            <li>
              {lang === 'en' ? data.location_en : data.location_ru}
            </li>
            <li>
              <span>
                {lang === 'en' ? 'Mail:' : 'Почта:'}
              </span>
              <a href={`mailto: ${data.mail}`}>{data.mail}</a>
            </li>
            <li>
              <span>
                {lang === 'en' ? 'Telephone:' : 'Телефон:'}
              </span>
              <a href={`tel: ${data.phone}`}>{data.phone}</a>
            </li>
            <li>
              <Link to='/about'>
                {lang === 'en' ? 'About us' : 'О нас'}
              </Link>
            </li>
          </div>
          <div className="row row-2">
            {
              lang === 'en' ? 
              'The site was created by the "404 team"' : 
              'Сайт создан «командой 404»'
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer