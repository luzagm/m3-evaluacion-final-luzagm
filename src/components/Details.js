import React from "react";
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
            <span className="bold-title"> Estado: </span>{" "}
            {props.characterStatus}
          </p>
          <p className="character-details-species">
            <span className="bold-title"> Especie: </span>
            {props.characterSpecies}
          </p>
          <p className="character-details-origin">
            <span className="bold-title"> Origen:</span> {props.characterOrigin}
          </p>
          <p className="character-details-chapters">
            <span className="bold-title"> Episodios: </span>
            {props.chapters}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Details;
