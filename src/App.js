import React, { Component } from 'react';
import request from 'superagent';
import './App.css';
import Header from './Header.js';
import PokeList from './PokeList.js';

export default class App extends Component {
  state = { pokemon: [] };

  async componentDidMount() {
    const pokeData = await request.get('https://alchemy-pokedex.herokuapp.com/api/pokedex');
    this.setState({pokemon: pokeData.body.results})

    console.log(pokeData.body.results);
  }
  
  render() {
    return (
      <div className="App">
        <Header />
        <PokeList pokeData={this.state.pokemon}  />
      </div>
    );
  }
}