import { NavBar } from "../Components/NavBar"
import { PresentationCard } from "../Components/PresentationCard"
import { ProyectsGrid } from "../Components/ProyectsGrid"
import { Tecnologiesgrid } from "../Components/Tecnologiesgrid"

export const Portfolio = () => {
  return (
    <div className="main-container" id="home">
      <NavBar/>
      <PresentationCard/>
      <p id="tecnologiesScroll"></p>
      <h2 className="titles" id="proyects">Tecnologies</h2>
      <Tecnologiesgrid/>
      <p id="proyectsScroll"></p>
      <h2 className="titles" id="proyects">PROYECTS</h2>
      <ProyectsGrid/>
    </div>
  )
}
