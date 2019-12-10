import React from "react";
import { Link } from "react-router-dom";

class fooder extends React.Component {
  state = {
    data: []
  };

  async componentDidMount() {
    this.fetchFooder();
  }

  fetchFooder = async () => {
    fetch("https://backendadonis.herokuapp.com/fooder")
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
        {this.state.data.map(fooder => {
          return (
            <footer key={fooder.id} className="footer-area section-gap">
              <div className="container">
                <div className="row">
                  <div className="col-lg-5 col-md-6 col-sm-6">
                    <div className="single-footer-widget">
                      <h4>{fooder.acercaDeMi}</h4>
                      <p>{fooder.descripAcerca}</p>
                    </div>
                  </div>
                  <div className="col-lg-5 col-md-6 col-sm-6">
                    <div className="single-footer-widget">
                      <h4>{fooder.noticias}</h4>
                      <p>{fooder.descripNoticias}</p>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-6 col-sm-6 social-widget">
                    <div className="single-footer-widget">
                      <h4>{fooder.sigueme}</h4>
                      <p>{fooder.descripSig}</p>
                      <div className="footer-social d-flex align-items-center">
                        <Link to="/">
                          <i className={fooder.icon1}></i>
                        </Link>
                        <Link to="/">
                          <i className={fooder.icon2}></i>
                        </Link>
                        <Link to="/">
                          <i className={fooder.icon3}></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </footer>
          );
        })}
      </div>
    );
  }
}

export default fooder;
