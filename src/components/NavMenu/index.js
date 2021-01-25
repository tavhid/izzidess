import React from 'react'
import './index.sass'
import { useSelector } from 'react-redux'

const NavMenu = () => {
  const lang = useSelector(state => state.lang)
  const titles = {
    project_ru: 'Проекты',
    project_en: 'Projects',
    services_ru: 'Наши услуги',
    services_en: 'Services',
    contacts_ru: 'Контакты',
    contacts_en: 'Contacts'
  }

  return(
    <div className="nav-menu d-flex justify-content-between">
      <li>
        <a href='#projects'>
          {lang === 'en' ? titles.project_en : titles.project_ru}
        </a>
      </li>
      <li>
        <a href='#services'>
          {lang === 'en' ? titles.services_en : titles.services_ru}
        </a>
      </li>
      <li>
        <a href='#contact'>
          {lang === 'en' ? titles.contacts_en : titles.contacts_ru}
        </a>
      </li>
    </div>
  )
}

export default NavMenu