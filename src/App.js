import React, { useEffect, useState } from "react"
import ContactList from "./components/ContactList"
import FirstScreen from "./components/FirstScreen"
import Footer from "./components/Footer"
import Map from "./components/Map"
import Projects from "./components/Projects"
import SectionTitle from "./components/SectionTitle"
import Services from "./components/Services"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import FuckTheSite from "./components/FuckTheSite"
import Single from "./pages/Single/"
import Header from "./components/Header"
import api from './api.json'
import ProjectsPage from "./pages/Projects"
import { useSelector } from 'react-redux'
import LangBttn from "./components/LangBttn"
import About from "./pages/About"

function App() {
  const lang = useSelector(state => state.lang)

  const [data, setData] = useState({})
  const [data_about, setData_about] = useState({})

  const [dataLoading, setDataLoading] = useState(true)
  const url = 'https://www.broskev.ml/index.wsgi/api/'
  const url_about = 'https://www.broskev.ml/api/aboutus'

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(json => {
        setData(json)
        setTimeout(() => {
          setDataLoading(false)
        }, 0)
      })
    
    fetch(url_about)
      .then(res => res.json())
      .then(json => {
        setData_about(json)
      })
  }, [])
  if (dataLoading) 
    return <p className="loading">Loading</p>

  return (
    <Router>
    <div className="App">
      <Switch>
        <Route path="/fuck-the-site">
          <FuckTheSite url={url+'turnoff'} data={data} />
        </Route>
        <Route path="/about">
          <>
            <Header navActive={false} />
            <About data={ data_about } />
          </>
        </Route>
        <Route path="/project/:id">
          <>
            <Header navActive={false} />
            <Single data={data} />
          </>
        </Route>
        <Route path="/projects/:id">
          <>
            <Header navActive={false} />
            <ProjectsPage data={data} />
          </>
        </Route>
        <Route exact path="/">
          {data.IsWebsiteActive ?
            <>
              <FirstScreen data={data.main} video={data.services.video} />
              <SectionTitle 
                id='projects'
                title={lang === 'en' ? 'Projects' : 'Проекты'}
                subTitle={
                  lang === 'en' ? 
                  'our ready-made interior design projects' : 
                  'наши готовые проекты дизайна интерьера'
                }
              />
              <Projects filters={data.filters} projects={data.projects} />
              <SectionTitle  
                id='services'
                title={lang === 'en' ? 'Our Services' : 'Наши Сервисы'}
                subTitle={
                  lang === 'en' ? 
                  'we provide you with the following services' : 
                  'мы предоставляем вам следующие услуги'
                }
              />
              <Services data={data} />
            </>
          :
            <div className="fuck-the-site">
              <h1>Оплатите стоимоть сайта</h1>
            </div>
          }
        </Route>
        <Route path="/">
          <>
            <Header navActive={false} />
            <div className='page-404 container'>
              <h2>404 страница не найдена</h2>
            </div>
          </>
        </Route>
      </Switch>
      <SectionTitle 
        id='contact'
        title={lang === 'en' ? 'Our Contacts' : 'Наши Контакты'}
        subTitle={
          lang === 'en' ? 
          'ready to arrange the best interior for yourself?' : 
          'готовы устроить себе лучший интерьер?'
        } 
      />
      <ContactList data={data.contact} />
      <Map />
      <Footer 
        data={data.contact} 
        copyright={data.main.copyrightfooter}
        aboutfooter_en={data.main.aboutfooter_en} 
        aboutfooter_ru={data.main.aboutfooter_ru} 
      />
      <LangBttn />
    </div>
    </Router>
  )
}

export default App;
