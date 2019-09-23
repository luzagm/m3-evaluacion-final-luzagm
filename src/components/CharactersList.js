import React from "react";
import Character from "./Characters";
import "../stylesheets/App.scss";

const CharactersList = props => {
  let charactersList = props.characters.map((character, index) => {
    return (
      <Character
        key={index}
        characterId={character.id}
        characterImage={character.image}
        characterName={character.name}
        characterSpecies={character.species}
      />
    );
  });
  return <div className="cards">{charactersList}</div>;
};

export default CharactersList;
