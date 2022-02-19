import React from 'react';
import axios from 'axios';
import PokemonCardV2 from './PokemonCardV2';

export default class PokemonList extends React.Component {

  constructor(prop){
    super(prop);
    this.state = {
      pokemon: null
    }
  }

  componentDidMount() {
    axios.get(`https://pokeapi.co/api/v2/pokemon/bulbasaur`)
      .then(res => {
        const pokemon = res.data;
       // console.log(res.data);
        this.setState({ pokemon: pokemon });
      })
  }

  render() {
    if (this.state.pokemon === null) {
      return <div>Nothing!</div>
    }
    return (
      <ul>
        {
                <div className="PokemonList">
                <PokemonCardV2 name = {this.state.pokemon.name} types = {this.state.pokemon.types}/>
            </div>
        }
      </ul>
    )
  }
}