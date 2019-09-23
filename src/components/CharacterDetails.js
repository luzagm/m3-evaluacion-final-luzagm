import React from "react";
import { Link } from "react-router-dom";
import Details from "./Details";
import "../stylesheets/App.scss";

class CharactersDetails extends React.Component {
  render() {
    console.log(this.props.character);
    return (
      <div className="details">
        <Link className="back-link" to="/">
          Volver
        </Link>
        <Details
          characterImage={this.props.character.image}
          characterName={this.props.character.name}
          characterSpecies={this.props.character.species}
          characterStatus={this.props.character.status}
          characterOrigin={this.props.character.origin.name}
          chapters={this.props.character.episode.length}
        />
      </div>
    );
  }
}

export default CharactersDetails;
