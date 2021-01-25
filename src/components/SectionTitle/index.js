import React, { useEffect } from 'react'
import './index.sass'
import Aos from 'aos'
import 'aos/dist/aos.css'

const SetionTitle = ({title, subTitle, id}) => {
  useEffect(() => {
    Aos.init()
  }, []);

  return (
    <div id={id} className="section-title">
      <h2 data-aos='fade-up' data-aos-duration="700">{title}</h2>
      <p data-aos='fade-up' data-aos-duration="700" data-aos-delay="200">{subTitle}</p>
    </div>
  )
} 

export default SetionTitle