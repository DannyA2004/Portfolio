import AOS from 'aos'
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import heroesAppImage from "../Images/HeroesApp.png"
import gifsAppImage from "../Images/gifsApp.png"
import exampleImage from "../Images/Ejemplo.png"
import htmlIcon from "../Icons/html-5.png"
import cssIcon from "../Icons/css-3.png"
import jsIcon from "../Icons/js.png"
import reactIcon from "../Icons/react.png"

export const ProyectsGrid = () => {
    useEffect(() => {
            AOS.init({
            duration: 800,
            once: true,  
            });
         }, []);
  return (
    <div className="proyects-grid" data-aos="fade-up">
        <div className="proyect-card">
            <div className="header-Proyect-card">
            <a href="https://heroes-spa-beta.vercel.app" target="_blank"><img src={heroesAppImage} alt="Heroes App Image" className="proyects-images"/></a>
            </div>
            <h3>Heroes App</h3>
            <div className="tecnologies-used-card">
                <img src={htmlIcon} alt="Html Icon" />
                <img src={cssIcon} alt="Css Icon" />
                <img src={jsIcon} alt="Js Icon Icon" />
                <img src={reactIcon} alt="React Icon" />
            </div>
        </div>
        <div className="proyect-card">
           <div className="header-Proyect-card">
            <a href="https://dannygifweb.netlify.app/" target="_blank"><img src={gifsAppImage} alt="Gifs App Image" className="proyects-images"/></a>
            </div>
            <h3>Gifs App</h3>
            <div className="tecnologies-used-card">
                <img src={htmlIcon} alt="Html Icon" />
                <img src={cssIcon} alt="Css Icon" />
                <img src={jsIcon} alt="Js Icon Icon" />
                <img src={reactIcon} alt="React Icon" />
            </div>

        </div>
        <div className="proyect-card">
            <div className="header-Proyect-card">
            <img src={exampleImage} alt="Example App Image" className="proyects-images"/>
            </div>
            <h3>Example App</h3>
        </div>
        <div className="proyect-card">
            <div className="header-Proyect-card">
            <img src={exampleImage} alt="Example App Image" className="proyects-images"/>
            </div>
            <h3>Example App</h3>
        </div>
    </div>
  )
}
