import React from 'react';
import axios from 'axios';
import PokemonCardV2 from './PokemonCardV2';
import _ from 'lodash';

export default class PokemonList extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {
      pokemons: [],
    };
  }

  componentDidMount = async () => {
    await axios.get(`https://pokeapi.co/api/v2/pokemon`).then((res) => {
      const pokemons = res.data.results;
      this.setState({ pokemons: pokemons });
    });
  }

  render() {
    const { pokemons } = this.state;

    return (
      <>
        <div className='PokemonList'>
          {_.map(pokemons, pokemon => <PokemonCardV2 key={pokemon.name} pokemon={pokemon} />)}
        </div>
      </>
    );
  }
}
