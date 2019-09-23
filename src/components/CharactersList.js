import React from "react";
import Character from "./Characters";

class CharactersList extends React.Component {
  render() {
    let charactersList = this.props.characters.map((character, index) => {
      return (
        <Character
          key={index}
          characterImage={character.image}
          characterName={character.name}
          characterSepecies={character.species}
        />
      );
    });
    return <div>{charactersList}</div>;
  }
}

export default CharactersList;
