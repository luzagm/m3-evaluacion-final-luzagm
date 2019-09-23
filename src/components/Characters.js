import React from "react";
import "../stylesheets/App.scss";

class Characters extends React.Component {
  render() {
    return (
      <div className="character-card">
        <img
          className="image"
          src={`${this.props.characterImage}`}
          alt={`${this.props.characterName}`}
        />
        <div className="character-info">
          <h3 className="name-title">{this.props.characterName}</h3>
          <p className="species-title">{this.props.characterSpecies}</p>
        </div>
      </div>
    );
  }
}

export default Characters;
