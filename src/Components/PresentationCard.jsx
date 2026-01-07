import AOS from 'aos'
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import personalPhoto from "../assets/Images/photoPortfolio.jpeg"
import percentIcon from "../assets/Icons/porcentajeBlanco.png"
import { TypingEffect } from "../hooks/TypingEffect";

export const PresentationCard = () => {
  useEffect(() => {
          AOS.init({
          duration: 800,
          once: true,  
          });
       }, []);
        let displayedText = TypingEffect("ola Soy Daniel Avila", 100, 400)
  return (
    <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="1500"
     className="card-container">
        <div className="photo-container">
          <div className="blur-container">
            <img src={personalPhoto} alt="Personal photo" className="card-photo" />
          </div>
        </div>
        <div className="presentation-card">
              <h2 className="my-name">H{displayedText}</h2>
              <h3 className="presentation-text">Estudiante de Ingeniería de Software con experiencia en desarrollo de software, motivado por aportar soluciones técnicas, aprender de entornos profesionales y contribuir al diseño e implementación de aplicaciones.</h3>
            <div className="icons-container">
                <a  id="linkedin" className='icons' title='Ir a LinkedIn Daniel Avila' target='_blank' href="https://www.linkedin.com/in/daniel-avila-78072937a/">
                  <svg width={24} height={24}>
                    <use xlinkHref="/icons.svg#linkedin"></use>
                  </svg>
                </a>
                <a id="github" className='icons' title='Ir a GitHub Daniel Avila' target='_blank' href="https://github.com/DannyA2004">
                  <svg width={24} height={24}>
                    <use xlinkHref="/icons.svg#github"></use>
                  </svg>
                </a>
            </div>
        </div>
    </div>
  )
}
