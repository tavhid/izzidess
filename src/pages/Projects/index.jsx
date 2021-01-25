import { Link, useParams } from 'react-router-dom'
import './index.sass'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'

const ProjectsPage = ({ data }) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const lang = useSelector(state => state.lang)
  const { id } = useParams()

  const filter = data.filters.find(filter => filter.id===id)

  const images = data.projects.filter(project => project.tag.indexOf(id) !== -1)

  return ( 
    <div className="projects-page">
      <div className="container">
        <div className="title">
          <h1>{lang === 'en' ? filter.name_en : filter.name_ru}</h1>
        </div>
        <div className="images">
          {images.map(image => 
            <Link to={`/project/${image.id}`} className={'img-block'} >
              <div className="mid-text">
                <span className="shortTitle">
                  {lang === 'en' ? image.shortTitle_en : image.shortTitle_ru}
                </span>
                <span className="shortSubTitle">
                  {lang === 'en' ? image.shortSubTitle_en : image.shortSubTitle_ru}
                </span>
              </div>
              <img src={`../${image.src}`} alt=""/>
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
 
export default ProjectsPage