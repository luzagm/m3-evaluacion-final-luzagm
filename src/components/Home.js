import React from "react";
import PropTypes from "prop-types";
import CharactersList from "./CharactersList";
import Filter from "./Filter";

import "../stylesheets/App.scss";

const Home = props => {
  return (
    <div className="App">
      <Filter
        filterByName={props.filterByName}
        filterByType={props.filterByType}
      />
      <CharactersList characters={props.characters} />
    </div>
  );
};

Home.propTypes = {
  character: PropTypes.array
};

export default Home;
