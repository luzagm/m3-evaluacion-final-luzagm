import React from "react";
import fetchCharacters from "../services/fetchData";
import CharactersList from "./CharactersList";
import "../stylesheets/App.scss";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      characters: []
    };
  }

  componentDidMount() {
    fetchCharacters().then(data => {
      const characters = data.results;
      this.setState({
        characters: characters
      });
    });
  }

  render() {
    return (
      <div className="App">
        <CharactersList characters={this.state.characters} />
      </div>
    );
  }
}

export default App;
