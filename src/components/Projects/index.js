import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './index.sass'
import { useSelector } from 'react-redux'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Image = ({img, tag, filters}) => {
  const lang = useSelector(state => state.lang)

  if (tag === '0' || filters) {
    return (
      <Link to={`/project/${img.id}`} className={'img-block'} >
        <div className="mid-text">
          <span className="shortTitle">
            {lang === 'en' ? img.shortTitle_en : img.shortTitle_ru}
          </span>
          <span className="shortSubTitle">
            {lang === 'en' ? img.shortSubTitle_en : img.shortSubTitle_ru}
          </span>
        </div>
        <img src={img.src} alt=""/>
      </Link>
    )
  }
  else 
    return <></> 
}

const Filter = ({name, tag, handleSetTag, id}) => {
  const classes = Number(id)===Number(tag) ? 'filter active' : 'filter'

  return (
    <button 
      className={classes}
      onClick={() => handleSetTag(id)}
    >
      {name.toLowerCase()}
    </button>
  )
}

const Projects = ({ filters, projects }) => {
  const lang = useSelector(state => state.lang)
  const [tag, setTag] = useState('0')
  const [filteredImages, setFilteredImages] = useState([])

  useEffect(() => {
    Aos.init()
  }, []);

  useEffect( () => {
    tag === '0' ? 
      setFilteredImages(projects) 
    : 
      setFilteredImages(projects.filter(img =>
        img.tag.indexOf(tag) !== -1
      ))
  }, [tag])

  function funcSetTag (id) {
    setTag(id)
  }

  return (
    <div data-aos='fade-right' data-aos-duration="700" id="moreInfo" className='projects'>
      <div className="container">
        <div className="filters">
          { 
            filters.map(filter => 
              <Filter 
                name={lang === 'en' ? filter.name_en : filter.name_ru} 
                id={filter.id} 
                tag={tag} 
                handleSetTag={funcSetTag} 
                key={filter.id} 
              /> 
            ) 
          }
        </div>

        <div className="img-box">
          { 
            filteredImages.map(image => 
              <Image 
                img={image} 
                tag={tag} 
                key={image.id} 
                filters={filters}
              />
            ) 
          }
        </div>
      </div>
    </div>  

  )
}

export default Projects