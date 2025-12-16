import AOS from 'aos'
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import htmlIcon from "../assets/Icons/html-5.png"
import cssIcon from "../assets/Icons/css-3.png"
import jsIcon from "../assets/Icons/js.png"
import reactIcon from "../assets/Icons/react.png"
import pythonIcon from "../assets/Icons/python.png"
import fastApiIcon from "../assets/Icons/FastAPI.png"
import tailwindIcon from "../assets/Icons/tailwindIcon.png"
import astroIcon from "../assets/Icons/astroIcon.png"
import typeScriptIcon from "../assets/Icons/typeScriptIcon.png"
import mySqlIcon from "../assets/Icons/mySqlIcon.png"

export const Tecnologiesgrid = () => {
    useEffect(() => {
        AOS.init({
        duration: 800,
        once: true,  
        });
     }, []);

    const technologies = [
        { name: 'HTML', icon: htmlIcon },
        { name: 'CSS', icon: cssIcon },
        { name: 'Tailwind', icon: tailwindIcon },
        { name: 'JavaScript', icon: jsIcon },
        { name: 'React', icon: reactIcon },
        { name: 'Astro', icon: astroIcon },
        { name: 'TypeScript', icon: typeScriptIcon },
        { name: 'Python', icon: pythonIcon },
        { name: 'FastApi', icon: fastApiIcon },
        { name: 'MySQL', icon: mySqlIcon },
];
  return (
    <div data-aos="fade-up" className="tecnologies-grid">
        {technologies.map((tech, index) => (
            <div
            key={tech.name}
            className="tecnologie-card"
            style={{ animationDelay: `${index * 2}s` }}
            >
            <div className="tecnologie-image-div">
                <img src={tech.icon} alt={tech.name} />
            </div>
            <h4>{tech.name}</h4>
            </div>
        ))}
    </div>
  )
}
