import React from "react";

class cursosAprobados extends React.Component {
  state = {
    data: []
  };

  async componentDidMount() {
    this.fetchCA();
  }

  fetchCA = async () => {
    fetch("https://backendadonis.herokuapp.com/cursosaprobados")
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
        {this.state.data.map(ca => {
          const {
            tittle,
            descrip,
            dato1,
            session1,
            result1,
            dato2,
            session2,
            dato3,
            session3,
            result3,
            dato4,
            session4,
            dato5,
            session5,
            result5
          } = ca;
          return (
            <section key={ca.id} className="timeline pb-120">
              <div className="text-center">
                <div className="menu-content pb-70">
                  <div className="title text-center">
                    <h1 className="mb-10">{tittle}</h1>
                    <p>{descrip}</p>
                  </div>
                </div>
              </div>
              <ul>
                <li>
                  <div className="content">
                    <h4>
                      <time>{dato1}</time>
                    </h4>
                    <p>
                      <b>Session:</b> {session1}
                    </p>
                    <p>
                      <b>Result:</b> {result1}
                    </p>
                  </div>
                </li>
                <li>
                  <div className="content">
                    <img
                      className="img-fluid mx-auto d-block mb-30"
                      src="img/about/c-logo.png"
                      alt=""
                    />
                    <h4>
                      <time>{dato2}</time>
                    </h4>
                    <p>{session2}</p>
                  </div>
                </li>
                <li>
                  <div className="content">
                    <h4>
                      <time>{dato3}</time>
                    </h4>
                    <p>
                      <b>Session:</b> {session3}
                    </p>
                    <p>
                      <b>Result:</b>
                      {result3}
                    </p>
                  </div>
                </li>
                <li>
                  <div className="content">
                    <img
                      className="img-fluid mx-auto d-block mb-30"
                      src="img/about/c-logo.png"
                      alt=""
                    />
                    <h4>
                      <time>{dato4}</time>
                    </h4>
                    <p>{session4}</p>
                  </div>
                </li>
                <li>
                  <div className="content">
                    <h4>
                      <time>{dato5}</time>
                    </h4>
                    <p>
                      <b>Session:</b> {session5}
                    </p>
                    <p>
                      <b>Result:</b>
                      {result5}
                    </p>
                  </div>
                </li>
              </ul>
            </section>
          );
        })}
      </div>
    );
  }
}

export default cursosAprobados;
