import React from "react";
import "./Portfolio.css";
import IMG1 from "../../assets/portfolio1.PNG";
import IMG2 from "../../assets/portfolio2.PNG";
import IMG3 from "../../assets/portfolio3.PNG";
import IMG4 from "../../assets/portfolio4.PNG";
import { useLanguage } from "../../LanguageContext";

const data =[
  {
    id:1,
    image: IMG1,
    titleKey: 'sushiTitle',
    github:'https://github.com/tysepa/Suchi_DimSum',
    demo:'https://app-six-sage-47.vercel.app/'
  },
  {
    id:2,
    image: IMG2,
    titleKey: 'brideTitle',
    github:'https://github.com/tysepa/Bride',
    demo:'https://project-89v4w.vercel.app/'
  },
  {
    id:3,
    image: IMG3,
    titleKey: 'nepoTitle',
    github:'https://github.com/tysepa/Electrical',
    demo:'https://electrical-cyan.vercel.app/'
  },
  {
    id:4,
    image: IMG4,
    titleKey: 'portfolioWebTitle',
    github:'https://github.com/tysepa/lacre',
    demo:'https://azzurri-club-and-restaurant.vercel.app/'
  }
]




const Portfolio = () => {
  const { t } = useLanguage();
  return (
    <section id="portfolio">
      <h5>{t('portfolioSub')}</h5>
      <h2>{t('portfolioTitle')}</h2>

      <div className="container portfolio__container">
       {
         data.map(({id, image, titleKey, github, demo})=>{
           return(
          <article key={id} className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={image} alt={t(titleKey)} />
          </div>
          <h3>{t(titleKey)}</h3>
          <div className="portfolio__item-cta">
            <a href={github} className="btn">
              Github
            </a>
            <a
              href={demo}
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
           )
         })
       }
      
      </div>
    </section>
  );
};

export default Portfolio;
