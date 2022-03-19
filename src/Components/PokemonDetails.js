import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import _ from 'lodash';
import { getTypeColor } from '../Utilities/types';
import PolarAreaChart from '../Utilities/PolarAreaChart';
import EvolutionChain from '../Utilities/EvolutionChain';

export default function PokemonDetails() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState({});
  const [pokemonWeaknesses, setPokemonWeaknesses] = useState({});
  const { name, stats, sprites, types, abilities } = pokemon;

  const picture = _.get(sprites, 'other.official-artwork.front_default', '');
  const statsData = _.map(stats, (stat) => stat.base_stat);

  const typeList = _.map(types, (type) => (
    <span
      className="typeItems"
      key={type.type.name}
      style={{ backgroundColor: getTypeColor(type.type.name) }}
    >
      {type.type.name}
    </span>
  ));

  const weaknessList = _.map(pokemonWeaknesses, (pokemonWeakness) => (
    <span
      className="typeItems"
      key={pokemonWeakness.name}
      style={{ backgroundColor: getTypeColor(pokemonWeakness.name) }}
    >
      {pokemonWeakness.name}
    </span>
  ));

  const abilityList = _.map(abilities, (ability) => (
    <span
      className="abilityItems"
      key={ability.ability.name}
      style={{ backgroundColor: 'black', padding: '5px 20px' }}
    >
      {ability.ability.name}
    </span>
  ));

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${id}`
      );
      setPokemon(data);
    }
    fetchData();
  }, [id]);
  
  useEffect(()=>{
    async function fetchData() {
      const responses = await Promise.all(_.map(types, type => axios.get(`https://pokeapi.co/api/v2/type/${type.type.name}`)));
      const weaknesses = _.map(responses, response => response.data.damage_relations.double_damage_from);
      const flatten = _.flattenDeep(weaknesses);
      const unique = _.uniqBy(flatten, 'name');
      setPokemonWeaknesses(unique);
    }
    fetchData();
  }, [types]);

  const previousPokemonCard = () => {
    if (id > 1) {
      window.location.pathname = `/pokemon/${parseInt(id) - 1}`;
    }
  };

  const NextPokemonCard = () => {
    window.location.pathname = `/pokemon/${parseInt(id) + 1}`;
  };

  const Pad = (value, padding) => {
    const zeroes = new Array(padding + 1).join('0');
    return (zeroes + value).slice(-padding);
  };

  return (
    <div className="pokemonDetail">
      <div>
        <button className="pageButton" onClick={previousPokemonCard}>
          {'<'}
        </button>
        <h1 className="pokemonName">
          {_.capitalize(name)} #{Pad(id, 3)}
        </h1>
        <img src={picture} alt={name} width="300" height="300" />
        <div className="itemsList">Type: {typeList}</div>
        <div className="itemsList">Weakness: {weaknessList}</div>
        <div className="itemsList">Abilities: {abilityList}</div>
      </div>
      <div>
        <PolarAreaChart stats={statsData} />
      </div>
      <button className="pageButton" onClick={NextPokemonCard}>
        {'>'}
      </button>

      <EvolutionChain name={name}/>
    </div>
  );
}
