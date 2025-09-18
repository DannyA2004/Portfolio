import AOS from 'aos'
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import htmlIcon from "../assets/Icons/html-5.png"
import cssIcon from "../assets/Icons/css-3.png"
import jsIcon from "../assets/Icons/js.png"
import reactIcon from "../assets/Icons/react.png"
import pythonIcon from "../assets/Icons/python.png"
import fastApiIcon from "../assets/Icons/FastAPI.png"

export const Tecnologiesgrid = () => {
    useEffect(() => {
        AOS.init({
        duration: 800,
        once: true,  
        });
     }, []);
  return (
    <div data-aos="fade-up" className="tecnologies-grid">
        <div className="tecnologie-card" style={{ animationDelay: `${1 * 2}s`,  animationDuration: `${6 * 2}s` }}>
            <div className="tecnologie-image-div">
            <img src={htmlIcon} alt="html Icon" />
            </div>
            <h4>HTML</h4>
        </div>
        <div className="tecnologie-card" style={{ animationDelay: `${2 * 2}s`,  animationDuration: `${6 * 2}s` }}>
            <div className="tecnologie-image-div">
                <img src={cssIcon} alt="css Icon" />
            </div>
            <h4>CSS</h4>
        </div>
        <div className="tecnologie-card" style={{ animationDelay: `${3 * 2}s`,  animationDuration: `${6 * 2}s` }}>
            <div className="tecnologie-image-div">
                <img src={jsIcon} alt="Java Script Icon" />
            </div>
            <h4>JavaScript</h4>
        </div>
        <div className="tecnologie-card" style={{ animationDelay: `${4 * 2}s`,  animationDuration: `${6 * 2}s` }}>
            <div className="tecnologie-image-div">
                <img src={reactIcon} alt="React Icon" />
            </div>
            <h4>React</h4>
        </div>
        <div className="tecnologie-card" style={{ animationDelay: `${5 * 2}s`,  animationDuration: `${6 * 2}s` }}>
            <div className="tecnologie-image-div">
               <img src={pythonIcon} alt="html Icon" />
            </div>
            <h4>Python</h4>
        </div>
        <div className="tecnologie-card" style={{ animationDelay: `${6 * 2}s`,  animationDuration: `${6 * 2}s` }}>
            <div className="tecnologie-image-div">
                <img src={fastApiIcon} alt="html Icon" />
            </div>
            <h4>FastApi</h4>
        </div>
    </div>
  )
}
