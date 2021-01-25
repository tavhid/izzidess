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

function App() {
  const lang = useSelector(state => state.lang)
  // api -> {}
  const [data, setData] = useState(api)
  // false -> true
  const [dataLoading, setDataLoading] = useState(false)
  const url = 'https://www.broskev.ml/index.wsgi/api/'

  useEffect(() => {
    // убрать комментарии
    // fetch(url)
    //   .then(res => res.json())
    //   .then(json => {
    //     setData(json)
    //     setTimeout(() => {
    //       setDataLoading(false)
    //     }, 300)
    //   })
  }, [])
  if (dataLoading) 
    return <p className="loading">Loading</p>
  
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/fuck-the-site">
            <FuckTheSite url={url+'turnoff'} data={data} />
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
        </Switch>
      </Router>
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
      <Footer data={data.contact} />
      <LangBttn />
    </div>
  );
}

export default App;
