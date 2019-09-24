import React from "react";
import PropTypes from "prop-types";
import "../stylesheets/App.scss";

const Details = props => {
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
            <span className="bold-title"> Status: </span>{" "}
            {props.characterStatus}
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
