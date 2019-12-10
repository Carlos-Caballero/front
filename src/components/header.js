import React from "react";
import Loading from "../components/Loading";
import Error from "../components/error";

class Header extends React.Component {
  state = {
    data: [],
    loading: true,
    error: null
  };

  async componentDidMount() {
    await this.fetchHeader();
  }

  fetchHeader = async () => {
    fetch("https://backendadonis.herokuapp.com/header")
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            data: result,
            loading: false
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
    if (this.state.loading) return <Loading></Loading>;
    if (this.state.error) return <Error></Error>;
    return (
      <div>
        {this.state.data.map(header => {
          return (
            <section key={header.id} className="banner-area">
              <div className="container">
                <div className="row fullscreen align-items-center justify-content-between">
                  <div className="col-lg-6 col-md-6 banner-left">
                    <h6>{header.subtitle}</h6>
                    <h1>{header.tittle}</h1>
                    <p>{header.descrip}</p>
                  </div>
                  <div className="col-lg-6 col-md-6 banner-right d-flex align-self-end">
                    <img className="img-fluid" src={header.foto} alt="" />
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

export default Header;
