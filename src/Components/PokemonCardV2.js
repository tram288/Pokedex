import React from 'react';
import axios from 'axios';
import _ from 'lodash';
import { getTypeColor } from '../Utilities/types';

export default class PokemonCardV2 extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            pokemon: {}
        }
    }

    componentDidMount() {
        const url = _.get(this.props, "pokemon.url", "");
        axios.get(url)
            .then(res => {
                const pokemon = res.data;
                this.setState({ pokemon });
            })
    }

    OpenPokemonDetail = () => {
        const { pokemon } = this.state;
        window.location.pathname = `/pokemon/${pokemon.id}`;
    }

    Pad = (value, padding) => {
        const zeroes = new Array(padding + 1).join("0");
        return (zeroes + value).slice(-padding);
    }

    render() {
        const { pokemon } = this.state;
        const { sprites, id, types } = pokemon;
        const name = _.get(this.props, "pokemon.name", "");
        const picture = _.get(sprites, "other.official-artwork.front_default", "");
        const typeList = _.map(types, type => (<span className='typeItems' key={type.type.name} style={{ backgroundColor: getTypeColor(type.type.name) }}>{type.type.name}</span>));
        const padded = this.Pad(id, 3);
        return (
            <div onClick={this.OpenPokemonDetail()} className="PokeCard">
                <img src={picture} alt={name} width="300" height="300" />
                <div className="idNumber">#{padded}</div>
                <h1 className="pokemonName">{_.capitalize(name)}</h1>
                <div className='types'>{typeList}</div>
            </div>
        )
    }
}