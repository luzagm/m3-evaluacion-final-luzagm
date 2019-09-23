import React from "react";
import CharactersList from "./CharactersList";
import Filter from "./Filter";

import "../stylesheets/App.scss";

class Home extends React.Component {
  render() {
    return (
      <div className="App">
        <Filter filterByName={this.props.filterByName} />
        <CharactersList characters={this.props.characters} />
      </div>
    );
  }
}

export default Home;
