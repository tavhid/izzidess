import React, { useState } from 'react'
import './index.sass'
import footerLogo from './IZZIDESS.png'

const Footer = () => {
  const [data, setData] = useState({
    location: 'Душанбе, ул. Фотех Ниези 25',
    logo: footerLogo,
    email: 'alyamovd@gmail.com',
    phone: '+992 98 736 53 65'
  })

  return (
    <div className="footer">
      <div className="container">
        <div className="row row-1">
          <div className="col col-1">
            <img src={data.logo} alt=""/>
            <span>Дизайн интерьера в Душанбе</span>
            <span>© «IZZIDESS», 2020 </span>
          </div>
          <div className="col col-2">
            <li>{data.location}</li>
            <li><span>Почта: </span><a href={`mailto: ${data.email}`}>{data.email}</a></li>
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