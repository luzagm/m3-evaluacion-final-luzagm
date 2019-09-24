import React from "react";
import PropTypes from "prop-types";
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

Characters.propTypes = {
  characterId: PropTypes.number,
  characterImage: PropTypes.string,
  characterName: PropTypes.string,
  characterSpecies: PropTypes.string
};

export default Characters;
