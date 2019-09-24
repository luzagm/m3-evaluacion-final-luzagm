import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Details from "./Details";
import "../stylesheets/App.scss";

const CharactersDetails = props => {
  if (props.character === undefined) {
    return <div>Cargando...</div>;
  } else {
    return (
      <div className="details">
        <Link className="back-link" to="/">
          <i className="material-icons back-icon">fast_rewind</i> Back
        </Link>
        <Details
          characterImage={props.character.image}
          characterName={props.character.name}
          characterSpecies={props.character.species}
          characterStatus={props.character.status}
          characterOrigin={props.character.origin.name}
          chapters={props.character.episode.length}
        />
      </div>
    );
  }
};

CharactersDetails.propTypes = {
  character: PropTypes.object
};

export default CharactersDetails;
