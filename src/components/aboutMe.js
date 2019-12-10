import React from "react";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";

class aboutMe extends React.Component {
  state = {
    data: [],
    Loading: true,
    error: null
  };

  async componentDidMount() {
    await this.fetchAbout();
  }

  fetchAbout = async () => {
    fetch("https://backendadonis.herokuapp.com/aboutme")
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            data: result,
            Loading: false
          });
        },

        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );

    //  fetch("https://api.example.com/items")
    //     .then(res => res.json())
    //     .then(
    //       (result) => {
    //         this.setState({
    //           isLoaded: true,
    //           items: result.items
    //         });
    //       },
    //       // Note: it's important to handle errors here
    //       // instead of a catch() block so that we don't swallow
    //       // exceptions from actual bugs in components.
    //       (error) => {
    //         this.setState({
    //           isLoaded: true,
    //           error
    //         });
    //       }
    //     )
  };

  render() {
    if (this.state.Loading) return <Loading></Loading>;
    return (
      <div>
        {this.state.data.map(aboutme => {
          return (
            <section key={aboutme.id} className="about-banner">
              <div className="container">
                <div className="row d-flex align-items-center justify-content-center">
                  <div className="about-content col-lg-12">
                    <h1 className="text-white">{aboutme.tittle}</h1>
                    <p className="text-white link-nav">
                      <Link to="/">{aboutme.descrip1} </Link>{" "}
                      <span className={aboutme.icon}></span>{" "}
                      <Link to="/about"> {aboutme.descrip2}</Link>
                    </p>
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

export default aboutMe;
