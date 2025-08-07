import AOS from 'aos'
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { NavBar } from "../Components/NavBar"
import { PresentationCard } from "../Components/PresentationCard"
import { ProyectsGrid } from "../Components/ProyectsGrid"
import { Tecnologiesgrid } from "../Components/Tecnologiesgrid"
import { Contact } from '../Components/Contact';

export const Portfolio = () => {
  useEffect(() => {
              AOS.init({
              duration: 800,
              once: true,  
              });
           }, []);
  return (
    <div className="main-container" id="home">
      <NavBar/>
      <PresentationCard/>
      <p id="tecnologiesScroll"></p>
      <h2 data-aos="zoom-in" className="titles" id="proyects">Tecnologies</h2>
      <Tecnologiesgrid/>
      <p id="proyectsScroll"></p>
      <h2 data-aos="zoom-in" className="titles" id="proyects">PROYECTS</h2>
      <ProyectsGrid/>
      <p id="contactScroll"></p>
      <Contact/>
    </div>
  )
}
