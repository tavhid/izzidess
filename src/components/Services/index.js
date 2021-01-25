import React, { useEffect, useState, Component } from 'react'
import { Link } from 'react-router-dom'
import * as $ from 'jquery'
import './index.sass'
import { useSelector } from 'react-redux'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Services = ({ data }) => {
  const lang = useSelector(state => state.lang)

  useEffect(() => {
    Aos.init()
    $('.service').hover(
      function(e) {
        const id = $(e.target).attr('image-target')
        $('#' + id).fadeIn()
      },
      function() {
        $('.serBg').fadeOut(500)
      }
    )
  }, [])

  return (
    <div className="services" data-aos='fade-up' data-aos-duration="700">
      <Link to={`/projects/${data.filters[1].id}`}>
        <img id="serBg1" className="serBg" src={data.services._1} />
      </Link> 
      <Link to={`/projects/${data.filters[2].id}`}>
        <img id="serBg2" className="serBg" src={data.services._2} />
      </Link>
      <Link to={`/projects/${data.filters[3].id}`}>
        <img id="serBg3" className="serBg" src={data.services._3} />
      </Link>
      <Link to={`/projects/${data.filters[1].id}`} image-target="serBg1" className="service">
        <img src={data.services.mini_1} />
        <div className="title">
          <h3 data-aos='fade-up' data-aos-duration="700" data-aos-delay="400">
            {lang === 'en' ? data.services.title_1_en : data.services.title_1_ru}
          </h3>
          <p data-aos='fade-up' data-aos-duration="700" data-aos-delay="600">
            {lang === 'en' ? data.services.subTitle_1_en : data.services.subTitle_1_ru}
          </p>
        </div>
      </Link>
      <Link to={`/projects/${data.filters[2].id}`} image-target="serBg2" className="service">
        <img src={data.services.mini_2} />
        <div className="title">
          <h3 data-aos='fade-up' data-aos-duration="700" data-aos-delay="400">
            {lang === 'en' ? data.services.title_2_en : data.services.title_2_ru}
          </h3>
          <p data-aos='fade-up' data-aos-duration="700" data-aos-delay="600">
            {lang === 'en' ? data.services.subTitle_2_en : data.services.subTitle_2_ru}
          </p>
        </div>
      </Link>
      <Link to={`/projects/${data.filters[3].id}`} image-target="serBg3" className="service">
        <img src={data.services.mini_3} />
        <div className="title">
          <h3 data-aos='fade-up' data-aos-duration="700" data-aos-delay="400">
            {lang === 'en' ? data.services.title_3_en : data.services.title_3_ru}
          </h3>
        </div>
      </Link>
    </div>
  )
}

export default Services