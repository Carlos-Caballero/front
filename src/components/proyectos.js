import React from "react";

class proyectos extends React.Component {
  state = {
    data: []
  };

  async componentDidMount() {
    this.fetchProyectos();
  }

  async fetchProyectos() {
    fetch("https://backendadonis.herokuapp.com/proyecto")
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            data: result
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  render() {
    return (
      <div>
        {this.state.data.map(proyecto => {
          return (
            <section
              key={proyecto.id}
              className="facts-area section-gap"
              id="facts-area"
            >
              <div className="container">
                <div className="row">
                  <div className="col-lg-3 col-md-6 single-fact">
                    <h1 className="counter">{proyecto.cant}</h1>
                    <p>{proyecto.descrip}</p>
                  </div>

                  <div className="col-lg-3 col-md-6 single-fact">
                    <h1 className="counter">{proyecto.cant2}</h1>
                    <p>{proyecto.descrip2}</p>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>
    );
  }
}

export default proyectos;
