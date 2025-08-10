import AOS from 'aos'
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import HeroesAppImage from "../Images/HeroesApp.png"
import gifsAppImage from "../Images/GifsApp.png";
import cmasfitness from "../Images/cmasfitness.png"
import gameVideo from "../videos/gameVideo.mp4"
import htmlIcon from "../Icons/html-5.png"
import cssIcon from "../Icons/css-3.png"
import jsIcon from "../Icons/js.png"
import reactIcon from "../Icons/react.png"
import cSharpIcon from "../Icons/csharp.png"
import unityIcon from "../Icons/unity.png"

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
            <a href="https://heroes-spa-beta.vercel.app" target="_blank"><img src={HeroesAppImage} alt="Heroes App Image" className="proyects-images"/></a>
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
