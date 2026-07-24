import React, { useState, useEffect } from 'react'
import Header from './components/header/header'
import Nav from './components/nav/Nav'
import About from './components/about/about'
import Experience from './components/experience/experience'
import Services from './components/services/service'
import Portfolio from './components/portfolio/Portfolio'
import Testimonials from './components/testimonial/testimonial'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'
import { FiSun, FiMoon } from 'react-icons/fi'
import { useLanguage } from './LanguageContext'


const App = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });

  const { language, changeLanguage } = useLanguage();

  useEffect(() => {
    document.body.className = theme === 'light' ? 'light-theme' : '';
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <>
       <Header 
         theme={theme} 
         toggleTheme={toggleTheme} 
         language={language} 
         changeLanguage={changeLanguage} 
       />
       <Nav />
       <About />
       <Experience />
       <Services />
       <Portfolio />
       <Testimonials />
       <Contact />
       <Footer />
    </>
  )
}

export default App