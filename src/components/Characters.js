import React from "react";
import { Link } from "react-router-dom";
import "../stylesheets/App.scss";

class Characters extends React.Component {
  render() {
    return (
      <div className="character-card">
        <Link
          className="character-link"
          to={`/details/${this.props.characterId}`}
        >
          <img
            className="image"
            src={`${this.props.characterImage}`}
            alt={`${this.props.characterName}`}
          />
          <div className="character-info">
            <h3 className="name-title">{this.props.characterName}</h3>
            <p className="species-title">{this.props.characterSpecies}</p>
          </div>
        </Link>
      </div>
    );
  }
}

export default Characters;
