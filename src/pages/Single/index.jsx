import { Link, useParams } from "react-router-dom"
import './index.sass'
import { useSelector } from 'react-redux'

const Single = ({ data }) => {
  window.scrollTo(0, 0)
  const lang = useSelector(state => state.lang)
  const { id } = useParams()
  const project = data.projects.find(project => project.id === Number(id))
  const filters = data.filters.filter(filter => project.tag.indexOf(filter.id) !== -1)

  return (
    <div className="single-page">
      <div className="container">
        <div className="title">
          <h1>
            {lang === 'en' ? project.title_en : project.title_ru}
          </h1>
          {
            filters.map(filter => {
              if (filter.name_ru !== 'все') 
                return(
                  <Link
                    key={filter.id} 
                    to={`/projects/${filter.id}`}
                  >
                    # {lang === 'en' ? filter.name_en : filter.name_ru}
                  </Link>
                )
            })
          }
        </div>
        <div className="images">
          {
            project.allImages.map((img, id) => 
              <img src={`${img}`} key={id} alt=""/>
            )
          }
        </div>
        <div className="content">
          <p>
            {lang === 'en' ? project.content_en : project.content_ru}
          </p>
        </div> 
      </div>
    </div>
  )
}
 
export default Single