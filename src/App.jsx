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


const App = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });

  useEffect(() => {
    document.body.className = theme === 'light' ? 'light-theme' : '';
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <>
       <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle Theme">
         {theme === 'dark' ? <FiSun /> : <FiMoon />}
       </button>
       <Header />
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