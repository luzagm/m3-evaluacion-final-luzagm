import React from "react";
import fetchCharacters from "../services/fetchData";
import Home from "./Home";
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
        <Home characters={this.state.characters} />
      </div>
    );
  }
}

export default App;
