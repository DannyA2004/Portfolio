import AOS from 'aos'
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import heroesAppImage from "../assets/Images/heroesApp.png"
import skywellPage from "../assets/Images/skywellPage.png";
import gifsApp from '../assets/Images/gifsApp.png'
import gameVideo from "../assets/videos/gameVideo.mp4"
import astroIcon from "../assets/Icons/astroIcon.png"
import typeScriptIcon from "../assets/Icons/typeScriptIcon.png"
import tailwindIcon from "../assets/Icons/tailwindIcon.png"
import htmlIcon from "../assets/Icons/html-5.png"
import cssIcon from "../assets/Icons/css-3.png"
import jsIcon from "../assets/Icons/js.png"
import reactIcon from "../assets/Icons/react.png"
import cSharpIcon from "../assets/Icons/csharp.png"
import unityIcon from "../assets/Icons/unity.png"

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
            <a href="https://skywell.vercel.app/" target="_blank"><img src={skywellPage} alt="Skywell Image" className="proyects-images"/></a>
            </div>
            <h3>Skywell</h3>
            <div className="tecnologies-used-card">
                <img src={astroIcon} alt="Astro Icon" />
                <img src={tailwindIcon} alt="Tailwind Icon" />
                <img src={typeScriptIcon} alt="TypeScript Icon" />
            </div>
        </div>

        <div className="proyect-card">
            <div className="header-Proyect-card">
            <a href="https://dannygifsapp.netlify.app" target='_blank'><img src={gifsApp} alt="Gifs App Image" className="proyects-images"/></a>
            </div>
            <h3>Gifs App</h3>
             <div className="tecnologies-used-card">
                <img src={reactIcon} alt="React Icon" />
                <img src={typeScriptIcon} alt="TypeScript Icon" />
                <img src={htmlIcon} alt="Html Icon" />
                <img src={cssIcon} alt="Css Icon" />
            </div>
        </div>
        <div className="proyect-card">
            <div className="header-Proyect-card">
            <a href="https://heroes-app-aplication.netlify.app/#/" target="_blank"><img src={heroesAppImage} alt="Heroes App Image" className="proyects-images"/></a>
            </div>
            <h3>Heroes App</h3>
            <div className="tecnologies-used-card">
                <img src={reactIcon} alt="React Icon" />
                <img src={typeScriptIcon} alt="TypeScript Icon" />
                <img src={tailwindIcon} alt="Tailwind Icon" />
            </div>
        </div>
        <div className="proyect-card">
            <div className="header-Proyect-card">
                <video className='proyects-video' src={gameVideo} controls typeof='video/mp4'></video>
                <h3>Jester's Trial game</h3>
                <div className="tecnologies-used-card">
                    <img src={cSharpIcon} alt="C# Icon" />
                    <img src={unityIcon} alt="Css Icon" />
                </div>
            </div>
        </div>
    </div>
  )
}
