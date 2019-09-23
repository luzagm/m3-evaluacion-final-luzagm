import React from "react";
import Character from "./Characters";
import "../stylesheets/App.scss";

class CharactersList extends React.Component {
  render() {
    let charactersList = this.props.characters.map((character, index) => {
      return (
        <Character
          key={index}
          characterImage={character.image}
          characterName={character.name}
          characterSpecies={character.species}
        />
      );
    });
    return <div className="cards">{charactersList}</div>;
  }
}

export default CharactersList;
