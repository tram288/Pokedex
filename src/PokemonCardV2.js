import React from 'react';
import _ from 'lodash';
import { getTypeColor } from './utils/types';
import axios from 'axios';

export default class PokemonCardV2 extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      pokemon: {},
    };
  }

  componentDidMount() {
    const url = _.get(this.props, 'pokemon.url', '');
    axios.get(url).then((res) => {
      const pokemon = res.data;
      this.setState({ pokemon: pokemon });
    });
  }

  handleClick() {
    window.location.href = `/pokemon/${this.state.pokemon.id}`;
  }

  render() {
    const name = _.get(this.props, 'pokemon.name', '');
    const { types, sprites, id } = this.state.pokemon;
    const official_artwork = _.get(sprites,'other.official-artwork.front_default','');
    const newTypeList = _.map(types, (type) => (
      <span
        key={type.type.name}
        className='type'
        style={{ backgroundColor: getTypeColor(type.type.name) }}
      >
        {type.type.name}
      </span>
    ));

    return (
      <div className='PokemonCard' onClick={this.handleClick}>
        <img src={official_artwork} alt={name} />
        <h2 style={{ margin: 0 }}>{`#${id}`}</h2>
        <h1 style={{ margin: 0 }}>{_.capitalize(name)}</h1>
        <div className='typesContainer'>{newTypeList}</div>
      </div>
    );
  }
}
