import React from "react";
import { Route, Switch } from "react-router-dom";
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
    this.renderOriginal = this.renderOriginal.bind(this);
    this.renderDetail = this.renderDetail.bind(this);
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

  renderOriginal() {
    let searchResult = this.state.characters.filter(character => {
      return character.name
        .toUpperCase()
        .includes(this.state.inputValue.toUpperCase());
    });
    return <Home characters={searchResult} filterByName={this.filterByName} />;
  }

  renderDetail(props) {
    const selectedId = parseInt(props.match.params.id);
    let selectedCharacter;
    for (const character of this.state.characters) {
      if (character.id === selectedId) {
        selectedCharacter = character;
      }
    }
    return <CharactersDetails character={selectedCharacter} />;
  }

  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <Switch>
            <Route exact path="/" render={this.renderOriginal} />
            <Route path="/details/:id" render={this.renderDetail} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
