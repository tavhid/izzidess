import './index.sass'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'

const About = ({ data }) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const lang = useSelector(state => state.lang)

  return (  
    <div className="about">
      <div className="container">
        <div className="title">
          <h1>        
            { lang === 'en' ? 'About us' : 'О нас' }
          </h1>
        </div>
        <div className="content">
          <p>
            { lang === 'en' ? 'Lorem' : 'Lorem' }
          </p>
        </div>
      </div>
    </div>
  )
}
 
export default About