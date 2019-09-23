import React from "react";
import { Link } from "react-router-dom";
import "../stylesheets/App.scss";

const Characters = props => {
  return (
    <div className="character-card">
      <Link className="character-link" to={`/details/${props.characterId}`}>
        <img
          className="image"
          src={`${props.characterImage}`}
          alt={`${props.characterName}`}
        />
        <div className="character-info">
          <h3 className="name-title">{props.characterName}</h3>
          <p className="species-title">{props.characterSpecies}</p>
        </div>
      </Link>
    </div>
  );
};

export default Characters;
