import React, { useEffect, useState } from 'react'
import './index.sass'

const Image = ({img, tag, handleSetMoreInfo}) => {
  const [imgState, setImgState] = useState('true')

  if (tag === 'all' || img.tag.indexOf(tag) !== -1) {
    return (
      <a href="#moreInfo">
        <div 
          className={'img-block'} 
          onClick={() => handleSetMoreInfo(true, img.imageName)}
        >
          <div className="mid-text">
            <span className="shortTitle">{img.shortTitle}</span>
            <span className="shortSubTitle">{img.shortSubTitle}</span>
          </div>
          <img src={`./images/${img.imageName}`} alt=""/>
        </div>
      </a>
    )
  }
  else 
    return <></> 
}

const Filter = ({name, tag, handleSetTag }) => {
  const classes = name==tag ? 'filter active' : 'filter'

  return (
    <button 
      className={classes}
      onClick={() => handleSetTag(name.toLowerCase())}
    >
      {name.toLowerCase()}
    </button>
  )
}

const images = [
  { 
    id: '1', 
    imageName: 'img1.png', 
    tag: 'тёмный', 
    title:'Hello world', 
    content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt nihil cumque quos earum atque consectetur at ipsa, commodi rem soluta, deleniti inventore veritatis neque quia molestiae dicta facere facilis expedita.',
    shortTitle: 'Short Title',
    shortSubTitle: 'Short SubTitle' 
  },
  { 
    id: '2', 
    imageName: 'img2.png', 
    tag: 'светлый', 
    title:'Hello world', 
    content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt nihil cumque quos earum atque consectetur at ipsa, commodi rem soluta, deleniti inventore veritatis neque quia molestiae dicta facere facilis expedita.',
    shortTitle: 'Short Title',
    shortSubTitle: 'Short SubTitle' 
  },
  { 
    id: '3', 
    imageName: 'img3.png', 
    tag: 'дерево светлый', 
    title:'Hello world', 
    content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt nihil cumque quos earum atque consectetur at ipsa, commodi rem soluta, deleniti inventore veritatis neque quia molestiae dicta facere facilis expedita.',
    shortTitle: 'Short Title',
    shortSubTitle: 'Short SubTitle'  
  },
  { 
    id: '4', 
    imageName: 'img4.png', 
    tag: 'ламповое', 
    title:'Hello world', 
    content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt nihil cumque quos earum atque consectetur at ipsa, commodi rem soluta, deleniti inventore veritatis neque quia molestiae dicta facere facilis expedita.',
    shortTitle: 'Short Title',
    shortSubTitle: 'Short SubTitle' 
  },
  { 
    id: '5', 
    imageName: 'img5.png', 
    tag: 'ламповое светлый',
    title:'Hello world', 
    content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt nihil cumque quos earum atque consectetur at ipsa, commodi rem soluta, deleniti inventore veritatis neque quia molestiae dicta facere facilis expedita.',
    shortTitle: 'Short Title',
    shortSubTitle: 'Short SubTitle'  
  },
  { 
    id: '6', 
    imageName: 'img6.png', 
    tag: 'ламповое', 
    title:'Hello world', 
    content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt nihil cumque quos earum atque consectetur at ipsa, commodi rem soluta, deleniti inventore veritatis neque quia molestiae dicta facere facilis expedita.',
    shortTitle: 'Short Title',
    shortSubTitle: 'Short SubTitle' 
  },
  { 
    id: '7', 
    imageName: 'img7.png', 
    tag: 'дерево светлый',
    title:'Hello world', 
    content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt nihil cumque quos earum atque consectetur at ipsa, commodi rem soluta, deleniti inventore veritatis neque quia molestiae dicta facere facilis expedita.',
    shortTitle: 'Short Title',
  shortSubTitle: 'Short SubTitle'  
  },
  { 
    id: '8', 
    imageName: 'img8.png', 
    tag: 'ламповое', 
    title:'Hello world', 
    content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt nihil cumque quos earum atque consectetur at ipsa, commodi rem soluta, deleniti inventore veritatis neque quia molestiae dicta facere facilis expedita.',
    shortTitle: 'Short Title',
    shortSubTitle: 'Short SubTitle' 
  },
  { 
    id: '9', 
    imageName: 'img9.png', 
    tag: 'светлый', 
    title:'Hello world', 
    content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt nihil cumque quos earum atque consectetur at ipsa, commodi rem soluta, deleniti inventore veritatis neque quia molestiae dicta facere facilis expedita.',
    shortTitle: 'Short Title',
    shortSubTitle: 'Short SubTitle' 
  },
  { 
    id: '10', 
    imageName: 'img10.png', 
    tag: 'светлый', 
    title:'Hello world', 
    content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt nihil cumque quos earum atque consectetur at ipsa, commodi rem soluta, deleniti inventore veritatis neque quia molestiae dicta facere facilis expedita.',
    shortTitle: 'Short Title',
    shortSubTitle: 'Short SubTitle' 
  },
  { 
    id: '11', 
    imageName: 'img11.png', 
    tag: 'тёмный', 
    title:'Hello world', 
    content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt nihil cumque quos earum atque consectetur at ipsa, commodi rem soluta, deleniti inventore veritatis neque quia molestiae dicta facere facilis expedita.',
    shortTitle: 'Short Title',
    shortSubTitle: 'Short SubTitle' 
  },
  { 
    id: '12', 
    imageName: 'img12.png', 
    tag: 'тёмный', 
    title:'Hello world', 
    content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt nihil cumque quos earum atque consectetur at ipsa, commodi rem soluta, deleniti inventore veritatis neque quia molestiae dicta facere facilis expedita.',
    shortTitle: 'Short Title',
    shortSubTitle: 'Short SubTitle' 
  },
  { 
    id: '13', 
    imageName: 'img1.png', 
    tag: 'тёмный', 
    title:'Hello world', 
    content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt nihil cumque quos earum atque consectetur at ipsa, commodi rem soluta, deleniti inventore veritatis neque quia molestiae dicta facere facilis expedita.',
    shortTitle: 'Short Title',
    shortSubTitle: 'Short SubTitle' 
  },
  { 
    id: '14', 
    imageName: 'img2.png', 
    tag: 'светлый', 
    title:'Hello world', 
    content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt nihil cumque quos earum atque consectetur at ipsa, commodi rem soluta, deleniti inventore veritatis neque quia molestiae dicta facere facilis expedita.',
    shortTitle: 'Short Title',
    shortSubTitle: 'Short SubTitle' 
  },
  { 
    id: '15', 
    imageName: 'img3.png', 
    tag: 'дерево ламповое', 
    title:'Hello world', 
    content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt nihil cumque quos earum atque consectetur at ipsa, commodi rem soluta, deleniti inventore veritatis neque quia molestiae dicta facere facilis expedita.',
    shortTitle: 'Short Title',
    shortSubTitle: 'Short SubTitle' 
  },
  { 
    id: '16', 
    imageName: 'img4.png', 
    tag: 'ламповое', 
    title:'Hello world', 
    content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt nihil cumque quos earum atque consectetur at ipsa, commodi rem soluta, deleniti inventore veritatis neque quia molestiae dicta facere facilis expedita.',
    shortTitle: 'Short Title',
    shortSubTitle: 'Short SubTitle' 
  },
  { 
    id: '17', 
    imageName: 'img5.png', 
    tag: 'ламповое тёмный', 
    title:'Hello world', 
    content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt nihil cumque quos earum atque consectetur at ipsa, commodi rem soluta, deleniti inventore veritatis neque quia molestiae dicta facere facilis expedita.',
    shortTitle: 'Short Title',
    shortSubTitle: 'Short SubTitle' 
  },
  { 
    id: '18', 
    imageName: 'img6.png', 
    tag: 'ламповое', 
    title:'Hello world', 
    content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt nihil cumque quos earum atque consectetur at ipsa, commodi rem soluta, deleniti inventore veritatis neque quia molestiae dicta facere facilis expedita.',
    shortTitle: 'Short Title',
    shortSubTitle: 'Short SubTitle' 
  },
  { 
    id: '19', 
    imageName: 'img7.png', 
    tag: 'дерево светлый', 
    title:'Hello world', 
    content:'Lorem ipsumdolor sit amet consectetur adipisicing elit. Sunt nihil cumque quos earum atque consectetur at ipsa, commodi rem soluta, deleniti inventore veritatis neque quia molestiae dicta facere facilis expedita.',
    shortTitle: 'Short Title',
    shortSubTitle: 'Short SubTitle' 
  },
  { 
    id: '20', 
    imageName: 'img8.png', 
    tag: 'ламповое', 
    title:'Hello world', 
    content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt nihil cumque quos earum atque consectetur at ipsa, commodi rem soluta, deleniti inventore veritatis neque quia molestiae dicta facere facilis expedita.',
    shortTitle: 'Short Title',
    shortSubTitle: 'Short SubTitle' 
  },
  { 
    id: '21', 
    imageName: 'img9.png', 
    tag: 'светлый', 
    title:'Hello world', 
    content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt nihil cumque quos earum atque consectetur at ipsa, commodi rem soluta, deleniti inventore veritatis neque quia molestiae dicta facere facilis expedita.',
    shortTitle: 'Short Title',
    shortSubTitle: 'Short SubTitle' 
  },
  { 
    id: '22', 
    imageName: 'img10.png', 
    tag: 'светлый тёмный', 
    title:'Hello world', 
    content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt nihil cumque quos earum atque consectetur at ipsa, commodi rem soluta, deleniti inventore veritatis neque quia molestiae dicta facere facilis expedita.',
    shortTitle: 'Short Title',
    shortSubTitle: 'Short SubTitle' 
  },
  { 
    id: '23', 
    imageName: 'img11.png', 
    tag: 'тёмный', 
    title:'Hello world', 
    content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt nihil cumque quos earum atque consectetur at ipsa, commodi rem soluta, deleniti inventore veritatis neque quia molestiae dicta facere facilis expedita.',
    shortTitle: 'Short Title',
    shortSubTitle: 'Short SubTitle' 
  },
  { 
    id: '24', 
    imageName: 'img12.png', 
    tag: 'тёмный', 
    title:'Hello world', 
    content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt nihil cumque quos earum atque consectetur at ipsa, commodi rem soluta, deleniti inventore veritatis neque quia molestiae dicta facere facilis expedita.',
    shortTitle: 'Short Title',
    shortSubTitle: 'Short SubTitle' 
  },
]
const filters = [
  { id: '1', name: 'all' },
  { id: '2', name: 'тёмный' },
  { id: '3', name: 'ламповое' },
  { id: '4', name: 'светлый' },
  { id: '5', name: 'дерево' }
]

const Projects = () => {
  const [tag, setTag] = useState('all')
  const [filteredImages, setFilteredImages] = useState([])
  const [moreInfo, setMoreInfo] = useState(false)
  const [selectedImg, setSelectedImg] = useState('')

  useEffect( () => {
    tag === 'all' ? 
      setFilteredImages(images) 
    : 
      setFilteredImages(images.filter(img => img.tag.indexOf(tag) !== -1))
  }, [tag])

  function funcSetTag (id) {
    setTag(id)
    setMoreInfo(false)
  }

  const selected = images.find(img => img.imageName === selectedImg)

  console.log(selected)

  return (
    <div id="moreInfo" className='projects'>
      <div className="container">
        <div className="filters">
          { 
            filters.map(filter => 
              <Filter 
                name={filter.name} 
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
              <img src={`/images/${selected.imageName}`} alt=""/>
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
                tag={tag} 
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