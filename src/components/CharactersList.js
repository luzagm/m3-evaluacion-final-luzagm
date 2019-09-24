import React from "react";
import PropTypes from "prop-types";
import CharactersCard from "./CharactersCard";
import RickAndMorty from "../images/rickandmorty.png";
import "../stylesheets/App.scss";

const CharactersList = props => {
  if (props.characters.length === 0) {
    return (
      <div className="not-found">
        <p className="not-found-text">
          No hay personajes que coincidan con la búsqueda{" "}
        </p>
        <img src={`${RickAndMorty}`} alt="Rick and Morty" />
      </div>
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
