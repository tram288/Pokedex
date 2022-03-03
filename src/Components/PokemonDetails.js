import React from "react";
import PolarAreaChart from "../Utilities/PolarAreaChart";
import { getTypeColor } from '../Utilities/types';
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from "axios";
import _ from 'lodash';

export default function PokemonDetails() {
    const { id } = useParams();
    // I dont understand
    const [pokemon, setPokemon] = useState({});
    const { name, stats, sprites, types, abilities } = pokemon;

    const picture = _.get(sprites, "other.official-artwork.front_default", "");
    const statsData = _.map(stats, stat => stat.base_stat)
    const typeList = _.map(types, type => <span className='typeItems' key={type.type.name} style={{ backgroundColor: getTypeColor(type.type.name) }}>{type.type.name}</span>);
    const abilityList = _.map(abilities, ability => <span className='abilityItems' key={ability.ability.name}  style={{ backgroundColor: "black", padding: "5px 20px"}}>{ability.ability.name}</span>);

    console.log(abilityList);

    useEffect(() => {
        async function fetchData() {
            const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
            // I dont understand
            setPokemon(data);
        }
        fetchData();
    }, [id]);

    const Pad = (value, padding) => {
        var zeroes = new Array(padding + 1).join("0");
        return (zeroes + value).slice(-padding);
    };

    console.log(pokemon);

    return (
        <div className="pokemonDetail">
            <div>
                <h1 className="pokemonName">{_.capitalize(name)} #{Pad(id, 3)}</h1>
                <img src={picture} alt={name} width="300" height="300" />
                <div className="itemsList">Type: {typeList}</div>
                <div className="itemsList">Abilities: {abilityList}</div>
            </div>
            <div>
                <PolarAreaChart stats={statsData} />
            </div>
        </div>);
}