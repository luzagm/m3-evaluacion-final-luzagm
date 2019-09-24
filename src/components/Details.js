import React from "react";
import PropTypes from "prop-types";
import "../stylesheets/App.scss";

const Details = props => {
  let statusIcon = () => {
    if (props.characterStatus === "Alive") {
      return (
        <span className="heart" role="img" aria-label="is alive">
          ❤️
        </span>
      );
    } else if (props.characterStatus === "Dead") {
      return (
        <span className="skull" role="img" aria-label="is dead">
          💀
        </span>
      );
    } else {
      return (
        <span className="unknown" role="img" aria-label="unknown">
          ❓
        </span>
      );
    }
  };

  return (
    <div>
      <div className="card-details">
        <img
          className="character-details-image"
          src={`${props.characterImage}`}
          alt={`${props.characterName}`}
        />
        <div className="character-details">
          <h3 className="character-details-name">{props.characterName}</h3>
          <p className="character-details-status">
            <span className="bold-title"> Status: </span>
            {statusIcon()}
          </p>
          <p className="character-details-species">
            <span className="bold-title"> Species: </span>
            {props.characterSpecies}
          </p>
          <p className="character-details-origin">
            <span className="bold-title"> Origin::</span>{" "}
            {props.characterOrigin}
          </p>
          <p className="character-details-chapters">
            <span className="bold-title"> Chapters: </span>
            {props.chapters}
          </p>
        </div>
      </div>
    </div>
  );
};

Details.propTypes = {
  characterImage: PropTypes.string,
  characterName: PropTypes.string,
  characterSpecies: PropTypes.string,
  characterStatus: PropTypes.string,
  characterOrigin: PropTypes.string,
  chapters: PropTypes.number
};

export default Details;
