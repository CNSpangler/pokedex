import React, { Component } from 'react';

export default class PokeItem extends Component {
    render() {
            return(
                    <li>
                        <h2>{this.props.pokeData.pokemon}</h2>
                        <img src={this.props.pokeData.url_image} alt={this.props.pokeData.pokebase}></img>
                        <h4>Type: {this.props.pokeData.type_1}/{this.props.pokeData.type_2}</h4>
                    </li>
            )
        }
    }