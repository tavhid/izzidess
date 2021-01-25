import React, { useEffect, useState } from 'react'
import './index.sass'
import footerLogo from './IZZIDESS.png'
import { useSelector } from 'react-redux'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer = ({data}) => {
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
              {lang === 'en' ? 'Interior design in Dushanbe' : 'Дизайн интерьера в Душанбе'}
            </span>
            <span>© «IZZIDESS», 2020 </span>
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