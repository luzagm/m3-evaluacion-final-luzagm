import React from "react";
import fetchCharacters from "../services/fetchData";
import Header from "./Header";
import Home from "./Home";
import CharactersDetails from "./CharacterDetails";
import "../stylesheets/App.scss";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      characters: [],
      inputValue: ""
    };
    this.filterByName = this.filterByName.bind(this);
  }

  componentDidMount() {
    fetchCharacters().then(data => {
      const characters = data.results;
      this.setState({
        characters: characters
      });
    });
  }

  filterByName(ev) {
    let inputValue = ev.target.value;
    this.setState({
      inputValue: inputValue
    });
  }

  render() {
    let searchResult = this.state.characters.filter(character => {
      return character.name
        .toUpperCase()
        .includes(this.state.inputValue.toUpperCase());
    });

    return (
      <div className="App">
        <Header />

        <Home characters={searchResult} filterByName={this.filterByName} />

        <CharactersDetails characters={this.state.characters} />
      </div>
    );
  }
}

export default App;
