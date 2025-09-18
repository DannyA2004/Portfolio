import AOS from 'aos'
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import heroesAppImage from "../assets/Images/HeroesApp.png"
import gifsAppImage from "../assets/Images/GifsApp.png";
import cmasfitness from "../assets/Images/cmasfitness.png"
import gameVideo from "../assets/videos/gameVideo.mp4"
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
            <a href="https://cmasfitness.vercel.app/" target='_blank'><img src={cmasfitness} alt="cmasfitness App Image" className="proyects-images"/></a>
            </div>
            <h3>C+ Fitness</h3>
             <div className="tecnologies-used-card">
                <img src={htmlIcon} alt="Html Icon" />
                <img src={cssIcon} alt="Css Icon" />
                <img src={jsIcon} alt="Js Icon Icon" />
            </div>
        </div>
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
