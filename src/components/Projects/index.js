import React, { useEffect, useState } from 'react'
import './index.sass'

const Image = ({img, tag, handleSetMoreInfo}) => {

  if (tag === 'все' || img.tag.toLowerCase().indexOf(tag) !== -1) {
    return (
      <a href="#moreInfo">
        <div 
          className={'img-block'} 
          onClick={() => handleSetMoreInfo(true, img.src)}
        >
          <div className="mid-text">
            <span className="shortTitle">{img.shortTitle}</span>
            <span className="shortSubTitle">{img.shortSubTitle}</span>
          </div>
          <img src={img.src} alt=""/>
        </div>
      </a>
    )
  }
  else 
    return <></> 
}

const Filter = ({name, tag, handleSetTag }) => {
  const classes = name===tag ? 'filter active' : 'filter'

  return (
    <button 
      className={classes}
      onClick={() => handleSetTag(name.toLowerCase())}
    >
      {name.toLowerCase()}
    </button>
  )
}

const Projects = ({ filters, projects }) => {
  const [tag, setTag] = useState('все')
  const [filteredImages, setFilteredImages] = useState([])
  const [moreInfo, setMoreInfo] = useState(false)
  const [selectedImg, setSelectedImg] = useState('')

  useEffect( () => {
    tag === 'все' ? 
      setFilteredImages(projects) 
    : 
      setFilteredImages(projects.filter(img =>
        img.tag.toLowerCase().indexOf(tag) !== -1
      ))
  }, [tag])

  function funcSetTag (id) {
    setTag(id)
    setMoreInfo(false)
  }

  const selected = projects.find(img => img.src === selectedImg)

  return (
    <div id="moreInfo" className='projects'>
      <div className="container">
        <div className="filters">
          { 
            filters.map(filter => 
              <Filter 
                name={filter.name.toLowerCase()} 
                tag={tag} 
                handleSetTag={funcSetTag} 
                key={filter.id} 
              /> 
            ) 
          }
        </div>

        <div className="more-info">
          { moreInfo &&
            <>
              <img src={selected.src} alt=""/>
              <div className="info-text">
                <h3 className="title">{selected.title}</h3>
                <p className="content">{selected.content}</p>
              </div>
            </>
          }
        </div>

        <div className="img-box">
          { 
            filteredImages.map(image => 
              <Image 
                img={image} 
                tag={tag.toLowerCase()} 
                key={image.id} 
                handleSetMoreInfo={
                  (state, name) => {
                    setMoreInfo(state)
                    setSelectedImg(name)
                  }
                }
              />
            ) 
          }
        </div>
      </div>
    </div>  

  )
}

export default Projects