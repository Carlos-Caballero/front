import React from "react";

class descripciones extends React.Component {
  state = {
    data: []
  };

  async componentDidMount() {
    this.fetchDetalle();
  }

  fetchDetalle = async () => {
    fetch("https://backendadonis.herokuapp.com/descripcion")
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
        {this.state.data.map(descrip => {
          return (
            <div key={descrip.id} className="col-lg-12 pt-60">
              <p>{descrip.descrip1}</p>
              <p>{descrip.descrip2}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default descripciones;
