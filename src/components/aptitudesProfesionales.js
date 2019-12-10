import React from "react";
import { Link } from "react-router-dom";
class aptitudesProfesionales extends React.Component {
  state = {
    data: []
  };

  componentDidMount() {
    this.fetchApt();
  }

  fetchApt() {
    fetch("https://backendadonis.herokuapp.com/aptitudesprofesionales")
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
        {this.state.data.map(apt => {
          return (
            <section key={apt.id} className="services-area section-gap">
              <div className="container">
                <div className="row d-flex justify-content-center">
                  <div className="menu-content  col-lg-7">
                    <div className="title text-center">
                      <h1 className="mb-10">{apt.tittle}</h1>
                      <p>{apt.descrip}</p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-4 col-md-6">
                    <div className="single-services">
                      <span className={apt.icon1}></span>
                      <Link to="/">
                        <h4>{apt.descrip1}</h4>
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="single-services">
                      <span className={apt.icon2}></span>
                      <Link to="/">
                        <h4>{apt.descrip2}</h4>
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="single-services">
                      <span className={apt.icon3}></span>
                      <Link to="/">
                        <h4>{apt.descrip3}</h4>
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="single-services">
                      <span className={apt.icon4}></span>
                      <Link to="/">
                        <h4>{apt.descrip4}</h4>
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="single-services">
                      <span className={apt.icon5}></span>
                      <Link to="/">
                        <h4>{apt.descrip5}</h4>
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="single-services">
                      <span className="lnr lnr-rocket"></span>
                      <Link to="/">
                        <h4>Diseño Grafico</h4>
                      </Link>
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

export default aptitudesProfesionales;
