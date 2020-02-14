import React, { Component } from 'react';
import PokeItem from './PokeItem.js';

export default class PokeList extends Component {
    render() {
        const elementsArray = this.props.searchedPokemon.map((pokemon) => {
            return (
                <PokeItem searchedPokemon={pokemon} key={pokemon._id} />
            );
        });
        return(
            <ul>
                {elementsArray}
            </ul>
        )
    }
}