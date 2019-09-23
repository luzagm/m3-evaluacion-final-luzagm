import React from "react";
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
          <i class="material-icons">fast_rewind</i> Volver
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

export default CharactersDetails;
