import React from "react";
import "../stylesheets/App.scss";

class Details extends React.Component {
  render() {
    return (
      <div>
        <div className="card-details">
          <img
            className="image"
            src={`${this.props.characterImage}`}
            alt={`${this.props.characterName}`}
          />
          <div className="character-details">
            <h3 className="character-details-name">
              {this.props.characterName}
            </h3>
            <p className="character-details-status">
              <span className="bold-title"> Estado: </span>{" "}
              {this.props.characterStatus}
            </p>
            <p className="character-details-species">
              <span className="bold-title"> Especie: </span>
              {this.props.characterSpecies}
            </p>
            <p className="character-details-origin">
              <span className="bold-title"> Origen:</span>{" "}
              {this.props.characterOrigin}
            </p>
            <p className="character-details-chapters">
              <span className="bold-title"> Episodios: </span>
              {this.props.chapters}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Details;
