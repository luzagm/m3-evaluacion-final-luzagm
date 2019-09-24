import React from "react";
import PropTypes from "prop-types";
import CharactersCard from "./CharactersCard";
import "../stylesheets/App.scss";

const CharactersList = props => {
  if (props.characters.length === 0) {
    return (
      <p className="not-found">
        No hay personajes que coincidan con la búsqueda
      </p>
    );
  } else {
    let charactersList = props.characters.map((character, index) => {
      return (
        <CharactersCard
          key={index}
          characterId={character.id}
          characterImage={character.image}
          characterName={character.name}
          characterSpecies={character.species}
        />
      );
    });

    return <ul className="cards">{charactersList}</ul>;
  }
};

CharactersList.propTypes = {
  characters: PropTypes.array
};

export default CharactersList;
