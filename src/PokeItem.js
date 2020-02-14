import React, { Component } from 'react';

export default class PokeItem extends Component {
    render() {
            return(
                    <li>
                        <h2>{this.props.searchedPokemon.pokemon}</h2>
                        <img src={this.props.searchedPokemon.url_image} alt={this.props.searchedPokemon.pokebase}></img>
                        <h4>Type: {this.props.searchedPokemon.type_1}/{this.props.searchedPokemon.type_2}</h4>
                    </li>
            )
        }
    }