import React, { Component } from "react";
// import { characters } from "./Api";
import Table from "./Table";
import Form from "./Form";


class App extends Component {
  state = { characters: [] };

  removeCharacter = index => {
    this.setState(({ characters }) => ({
      characters: characters.filter((_, i) => i !== index)
    }))
  }

  handleSubmit = character => {
    this.setState({ 
      characters: 
        [...this.state.characters, character] });
  };

  render() {
    const { characters } = this.state;
    return (
    <div>
      <Table 
        characterData={characters}
        removeCharacter={this.removeCharacter}
      />
      <Form handleSubmit={this.handleSubmit}/>
    </div>);
  }
};

export default App;