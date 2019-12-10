import React from "react";

class expHerramientas extends React.Component {
  state = {
    data: []
  };

  async componentDidMount() {
    this.fetchExp();
  }

  fetchExp = async () => {
    fetch("https://backendadonis.herokuapp.com/expherramientas")
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
  };
  render() {
    return (
      <div>
        {this.state.data.map(expe => {
          const { barra1, barra2, barra3, barra4, barra5 } = expe;
          return (
            <section key={expe.id} className="home-about-area section-gap">
              <div className="container">
                <div className="row align-items-center justify-content-between">
                  <div className="col-lg-12 pt-60">
                    <h4 className="pt-30">Experiencia con Herramientas</h4>
                    <br></br>
                  </div>
                </div>
                <div>
                  <div>
                    <div className="row skillbar-wraps">
                      <div className="col-lg-6 skill-left">
                        <div className="barra">
                          <div className="progress">
                            <div
                              className="progress-bar"
                              role="progressbar"
                              aria-valuemax="100"
                              style={{
                                width: (barra1 / 100) * 540
                              }}
                            ></div>
                          </div>
                          <p>{expe.exp1}</p>
                        </div>
                        <div className="barra">
                          <div className="progress">
                            <div
                              className="progress-bar"
                              role="progressbar"
                              aria-valuemax="100"
                              style={{
                                width: (barra2 / 100) * 540
                              }}
                            ></div>
                          </div>
                          <p>{expe.exp2}</p>
                        </div>
                        <div className="barra">
                          <div className="progress">
                            <div
                              className="progress-bar"
                              role="progressbar"
                              aria-valuemax="100"
                              style={{
                                width: (barra3 / 100) * 540
                              }}
                            ></div>
                          </div>
                          <p>{expe.exp3}</p>
                        </div>
                      </div>

                      <div className="col-lg-6 skill-rigth">
                        <div className="barra">
                          <div className="progress">
                            <div
                              className="progress-bar"
                              role="progressbar"
                              aria-valuemax="100"
                              style={{
                                width: (barra4 / 100) * 540
                              }}
                            ></div>
                          </div>
                          <p>{expe.exp4}</p>
                        </div>
                        <div className="barra">
                          <div className="progress">
                            <div
                              className="progress-bar"
                              role="progressbar"
                              aria-valuemax="100"
                              style={{
                                width: (barra5 / 100) * 540
                              }}
                            ></div>
                          </div>
                          <p>{expe.exp5}</p>
                        </div>
                      </div>
                    </div>
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

export default expHerramientas;
