import React, { useEffect, useState } from "react"
import ContactList from "./components/ContactList";
import FirstScreen from "./components/FirstScreen";
import Footer from "./components/Footer";
import Map from "./components/Map";
import Projects from "./components/Projects";
import SectionTitle from "./components/SectionTitle";
import Services from "./components/Services";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import FuckTheSite from "./components/FuckTheSite";

function App() {
  const [data, setData] = useState({})
  const [dataLoading, setDataLoading] = useState(true)
  const url = 'https://www.broskev.ml/index.wsgi/api/'

  useEffect(() => {
    // yarn run build
    fetch(url)
      .then(res => res.json())
      .then(json => {
        setData(json)
        setTimeout(() => {
          setDataLoading(false)
        }, 300)
      })
  }, [])

  if (dataLoading) 
    return <p className="loading">Loading</p>
  
  return (
    <Router>
      <Switch>
        <Route path="/fuck-the-site">
          <FuckTheSite url={url+'turnoff'} data={data} />
        </Route>
        <Route exact path="/">
          {data.IsWebsiteActive ?
            <div className="App">
              <FirstScreen data={data.main} video={data.services.video} />
              <SectionTitle 
                id='projects'
                title='Проекты'
                subTitle='наши готовые проекты дизайна интерьеров'
              />
              <Projects filters={data.filters} projects={data.projects} />
              <SectionTitle 
                id='services'
                title='Наши услуги'
                subTitle='мы предоставляем вам следующие услуги'
              />
              <Services data={data.services} />
              <SectionTitle 
                id='contact'
                title='Наши контакты'
                subTitle='готовы устроить себе лучший интерьер?' 
              />
              <ContactList data={data.contact} />
              <Map />
              <Footer data={data.contact} />
            </div>
          :
            <div className="fuck-the-site">
              <h1>Оплатите стоимоть сайта</h1>
            </div>
          }
        </Route>
      </Switch>
    </Router>

  );
}

export default App;
