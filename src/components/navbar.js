import React from "react";
import { Link } from "react-router-dom";
class Navbar extends React.Component {
  state = {
    data: []
  };

  async componentDidMount() {
    await this.fetchNavbar();
  }

  fetchNavbar = async () => {
    fetch("https://backendadonis.herokuapp.com/navbar")
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
        {this.state.data.map(navbar => {
          return (
            <header key={navbar.id} id="header">
              <div className="container main-menu">
                <div className="row align-items-center justify-content-between d-flex">
                  <div id="logo">
                    <Link to="/">
                      <img src={navbar.icon} alt="" title="" />
                    </Link>
                  </div>
                  <nav id="nav-menu-container">
                    <ul className="nav-menu">
                      <li>
                        <Link to="/">{navbar.home}</Link>
                      </li>
                      <li>
                        <Link to="/about">{navbar.about}</Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </header>
          );
        })}
      </div>
    );
  }
}

export default Navbar;
