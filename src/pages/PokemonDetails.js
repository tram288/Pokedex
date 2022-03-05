import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import _ from 'lodash';
import RadarChart from '../components/RadarChart';

export default function PokemonDetails() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState({});
  console.log(pokemon);
  const { name, sprites, types, abilities, moves, stats } = pokemon;
  const statsData = _.map(stats, stat => stat.base_stat);
  const picture = _.get(sprites, 'other.official-artwork.front_default', '');

  // Anytime state or props changes this will be called
  // Use Effect has 2 params (what to do, when to do it)
  useEffect(async () => {
    const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    setPokemon(data);
  }, [id]);

  return(
    <div className="PokemonDetails">
      <img src={picture} alt={name} width='300' height='300' />
      <RadarChart statsData={statsData} />
    </div>
  )
}
