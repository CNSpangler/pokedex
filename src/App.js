import React, { Component } from 'react';
import request from 'superagent';
import './App.css';
import { getPokemon } from './API.js';
import Header from './Header.js';
import PokeList from './PokeList.js';
import SearchOptions from './SearchOptions.js';
import Paging from './Paging.js';

export default class App extends Component {
  state = { pokeArray: [] };
  
  async loadPokemon() {
    const response = await getPokemon();
    const searchedPokemon = response.results; 
    const numResults = response.count;
    console.log(searchedPokemon)

    this.setState({
      pokeArray: searchedPokemon,
      numResults: numResults,
    })
  }

  async componentDidMount() {
    window.location.hash = 'page=1';
    
    await this.loadPokemon();
    
    window.addEventListener("hashchange", async () => {
      console.log('change');
      await this.loadPokemon();
    })
  }
  
  render() {
    const {
      pokeArray: searchedPokemon,
      numResults,
    } = this.state;

    return (
      <div className="App">
        <Header />
        <main>
          <section>
            <SearchOptions />
          </section>
          <PokeList searchedPokemon={searchedPokemon} />
          <Paging numResults={numResults} />
        </main>
      </div>
    );
  }
}
