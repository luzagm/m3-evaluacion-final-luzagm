import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../stylesheets/App.scss";

const CharactersCard = props => {
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
    <li className="character-card">
      <Link
        className="character-card-link"
        to={`/details/${props.characterId}`}
      >
        <img
          className="character-card-image"
          src={`${props.characterImage}`}
          alt={`${props.characterName}`}
        />
        <div className="character-card-info">
          <h3 className="character-card-name-title">{props.characterName}</h3>
          <p className="species-title">{speciesIcon()}</p>
        </div>
      </Link>
    </li>
  );
};

CharactersCard.propTypes = {
  characterId: PropTypes.number,
  characterImage: PropTypes.string,
  characterName: PropTypes.string,
  characterSpecies: PropTypes.string
};

export default CharactersCard;
