import React from "react";
import CharactersInfo from "./CharactersInfo";
import "../stylesheets/App.scss";

class CharactersDetails extends React.Component {
  render() {
    let charactersDetails = this.props.characters.map((character, index) => {
      return (
        <CharactersInfo
          key={index}
          characterImage={character.image}
          characterName={character.name}
          characterSpecies={character.species}
          characterStatus={character.status}
          characterOrigin={character.origin.name}
          chapters={character.episode.length}
        />
      );
    });
    return <div className="card-info">{charactersDetails}</div>;
  }
}

export default CharactersDetails;
