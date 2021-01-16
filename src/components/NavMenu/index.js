import React from 'react'
import './index.sass'

const NavMenu = () => {
  return(
    <div className="nav-menu d-flex justify-content-between">
      <li><a href='#services'>Наши услуги</a></li>
      <li><a href='#projects'>Проекты</a></li>
      <li><a href='#contact'>Контакты</a></li>
    </div>
  )
}

export default NavMenu