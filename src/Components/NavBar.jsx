import AOS from 'aos'
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { funcionNoRecargar } from "../js/funcionNoRecargar"


export const NavBar = () => {
  useEffect(() => {
            AOS.init({
            duration: 800,
            once: true,  
            });
         }, []);
  return (
    <nav className="navbar" data-aos="fade-right">
        <ul className="nav-list">
            <li><a href= "home" onClick={(event) => funcionNoRecargar(event, "home")}>Home</a></li>
            <li><a href="proyectsScroll" onClick={(event) => funcionNoRecargar(event, "proyectsScroll")}>Proyects</a></li>
            <li><a href="tecnologiesScroll" onClick={(event) => funcionNoRecargar(event, "tecnologiesScroll")}>Tecnologies</a></li>
            <li><a href="contactScroll" onClick={(event) => funcionNoRecargar(event, "contactScroll")}>Contact</a></li>
        </ul>
    </nav>
  )
}
