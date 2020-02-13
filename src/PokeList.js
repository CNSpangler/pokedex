import React, { Component } from 'react';
import PokeItem from './PokeItem.js';

export default class PokeList extends Component {
    render() {
        const elementsArray = this.props.pokeData.map((pokemon) => {
            return (
                <PokeItem pokeData={pokemon} />
            );
        });
        return(
            <ul>
                {elementsArray}
            </ul>
        )
    }
}