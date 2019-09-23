import React from "react";
import "../stylesheets/App.scss";

class CharactersInfo extends React.Component {
  render() {
    return (
      <div className="card-details">
        <img
          className="image"
          src={`${this.props.characterImage}`}
          alt={`${this.props.characterName}`}
        />
        <div className="character-details">
          <h3 className="character-details-name">{this.props.characterName}</h3>
          <p className="character-details-status">
            {this.props.characterStatus}
          </p>
          <p className="character-details-species">
            {this.props.characterSpecies}
          </p>
          <p className="character-details-origin">
            {this.props.characterOrigin}
          </p>
          <p className="character-details-chapters">{this.props.chapters}</p>
        </div>
      </div>
    );
  }
}

export default CharactersInfo;
