import React from "react";

class detallesPersonales extends React.Component {
  state = {
    data: []
  };

  componentDidMount() {
    this.fetchDetalles();
  }

  fetchDetalles() {
    fetch("https://backendadonis.herokuapp.com/detallespersonales")
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
        {this.state.data.map(detalle => {
          return (
            <section key={detalle.id} className="home-about-area pt-120">
              <div className="container">
                <div className="row align-items-center justify-content-between">
                  <div className="col-lg-6 col-md-6 home-about-left">
                    <img className="img-fluid" src={detalle.foto} alt="" />
                  </div>
                  <div className="col-lg-5 col-md-6 home-about-right">
                    <h6>{detalle.subtittle}</h6>
                    <h1 className="text-uppercase">{detalle.tittle}</h1>
                    <p>{detalle.descrip}</p>
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

export default detallesPersonales;
