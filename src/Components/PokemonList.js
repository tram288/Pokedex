import React from 'react';
import axios from 'axios';
import _ from 'lodash';
import PokemonCardV2 from './PokemonCardV2';

export default class PokemonList extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {
      pokemons: [],
      offset: 0,
    };
  }

  componentDidMount = async () => {
    await axios.get('https://pokeapi.co/api/v2/pokemon').then((res) => {
      const pokemons = res.data.results;
      this.setState({ pokemons });
    });
  };

  loadMorePokemon = async () => {
    const { offset, pokemons } = this.state;
    await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset + 20}`).then((res) => {
      const newPokemons = res.data.results;
      this.setState({ pokemons: [...pokemons, ...newPokemons]});
      this.setState({ offset: offset + 20 });
    });
  };

  render() {
    const { pokemons } = this.state;
    if (pokemons === null) {
      return <div>Nothing!</div>;
    }
    return (
      <div>
        <div className="PokemonList">
          {_.map(pokemons, (pokemon) => (
            <PokemonCardV2 key={pokemon.name} pokemon={pokemon} />
          ))}
        </div>
        <button className="loadMore" onClick={() => this.loadMorePokemon()}>Load More</button>
      </div>
    );
  }
}
