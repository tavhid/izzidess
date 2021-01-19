import React, { useState } from 'react'
import './index.sass'
import footerLogo from './IZZIDESS.png'

const Footer = ({data}) => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row row-1">
          <div className="col col-1">
            <img src={footerLogo} alt=""/>
            <span>Дизайн интерьера в Душанбе</span>
            <span>© «IZZIDESS», 2020 </span>
          </div>
          <div className="col col-2">
            <li>{data.location}</li>
            <li><span>Почта: </span><a href={`mailto: ${data.mail}`}>{data.mail}</a></li>
            <li><span>Телефон: </span><a href={`tel: ${data.phone}`}>{data.phone}</a></li>
          </div>
          <div className="row row-2">
            Сайт создан командой «404 team»
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer