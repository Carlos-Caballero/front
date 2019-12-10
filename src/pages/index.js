import React from "react";
import Navbar from "../components/navbar";
import Header from "../components/header";
import DetallesPersonales from "../components/detallesPersonales";
import Aptitudes from "../components/aptitudesProfesionales";
import Proyectos from "../components/proyectos";
import Fooder from "../components/fooder";

class index extends React.Component {
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <Header></Header>
        <DetallesPersonales></DetallesPersonales>
        <Aptitudes></Aptitudes>
        <Proyectos></Proyectos>
        <Fooder></Fooder>
      </div>
    );
  }
}

export default index;
