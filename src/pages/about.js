import React from "react";
import Navbar from "../components/navbar";
import Fooder from "../components/fooder";
import Exp from "../components/expHerramientas";
import AboutMe from "../components/aboutMe";
import Cursos from "../components/cursosAprobados";
import Detalles from "../components/detallesPersonales";
import Desc from "../components/descripciones";

class about extends React.Component {
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <AboutMe></AboutMe>
        <Detalles></Detalles>
        <Desc></Desc>
        <Exp></Exp>
        <Cursos></Cursos>
        <Fooder></Fooder>
      </div>
    );
  }
}

export default about;
