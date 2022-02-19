import React from 'react';
import axios from 'axios';
import PokemonCard from './PokemonCard';
import PokemonCardV2 from './PokemonCardV2';
import _ from 'lodash';

export default class PokemonList extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {
      pokemon: {},
      pokemons: [],
    };
  }

  componentDidMount = async () => {
    await axios.get(`https://pokeapi.co/api/v2/pokemon/bulbasaur`).then((res) => {
      const pokemon = res.data;
      this.setState({ pokemon: pokemon });
    });
    await axios.get(`https://pokeapi.co/api/v2/pokemon`).then((res) => {
      const pokemons = res.data.results;
      this.setState({ pokemons: pokemons });
    });
  }

  render() {
    const { pokemons } = this.state;
    const pokemon = _.get(this.state, 'pokemon');

    return (
      <>
        <PokemonCard key={_.get(pokemon, 'name')} pokemon={pokemon} />
        {/* <div className='PokemonList'>
          {_.map(pokemons, pokemon => <PokemonCardV2 key={pokemon.name} pokemon={pokemon} />)}
        </div> */}
      </>
    );
  }
}
