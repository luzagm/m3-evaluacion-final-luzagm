import React from "react";
import CharactersList from "./CharactersList";
import Header from "./Header";
import "../stylesheets/App.scss";

class Home extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <CharactersList characters={this.props.characters} />
      </div>
    );
  }
}

export default Home;
