import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../stylesheets/App.scss";

const Characters = props => {
  let speciesIcon = () => {
    if (props.characterSpecies === "Human") {
      return (
        <span className="smile" role="img" aria-label="is human">
          🙂
        </span>
      );
    } else if (props.characterSpecies === "Alien") {
      return (
        <span className="alien" role="img" aria-label="is alien">
          👽
        </span>
      );
    } else {
      return <strong>?</strong>;
    }
  };

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
          <p className="species-title">{speciesIcon()}</p>
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
