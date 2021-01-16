import React from "react"
import ContactList from "./components/ContactList";
import FirstScreen from "./components/FirstScreen";
import Footer from "./components/Footer";
import Map from "./components/Map";
import Projects from "./components/Projects";
import SectionTitle from "./components/SectionTitle";
import Services from "./components/Services";

function App() {
  return (
    <div className="App">
      <FirstScreen />
      <SectionTitle 
        id='services'
        title='Наши услуги'
        subTitle='мы предоставляем вам следующие услуги' 
      />
      <Services />
      <SectionTitle 
        id='projects'
        title='Проекты'
        subTitle='наши готовые проекты дизайна интерьеров' 
      /> 
      <Projects />
      <SectionTitle 
        id='contact'
        title='Наши контакты'
        subTitle='готовы устроить себе лучший интерьер?' 
      /> 
      <ContactList />
      <Map />
      <Footer />
    </div>

  );
}

export default App;
