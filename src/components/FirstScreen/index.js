import React from 'react'
import './index.sass'
import Header from '../Header'
import BackgroundVideo from '../BackgroundVideo'
import telegramIco from './telegram.png'
import facebookIco from './facebook.png'
import instagramIco from './instagram.png'
import { useSelector } from 'react-redux'

const FirstScreen = ({data, video}) => {

  const lang = useSelector(state => state.lang)

  return (
    <div className="first-screen">
      <BackgroundVideo video={video} />
      <Header navActive={true} />
      <div className="container">
        <div className="first-screen__middle">
          <h1 className='first-screen__title'>
            { lang ==='en' ? data.title_en : data.title_ru }
          </h1>
          <a href='#contact' className="first-screen__btn button">
            <span className='bd-t'></span>
            <span className='bd-r'></span>
            <span className='bd-b'></span>
            <span className='bd-l'></span>
            { lang ==='en' ? data.button_txt_en : data.button_txt_ru }
          </a>
        </div>
        <div className="first-screen__social-group">
          <a href={ data.link_telegram }>
            <img src={telegramIco} alt=""/>
          </a>
          <a href={ data.link_facebook }>
            <img src={facebookIco} alt=""/>
          </a>
          <a href={ data.link_instagram }>
            <img src={instagramIco} alt=""/>
          </a>
        </div>
      </div>
    </div>
  )
}

export default FirstScreen