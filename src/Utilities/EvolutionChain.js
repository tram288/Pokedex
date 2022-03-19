import React, { useState, useEffect } from 'react';
import axios from 'axios';
import _ from 'lodash';
import propTypes from 'prop-types';

export default function EvolutionChain(props) {
  const { name } = props;
  const [speciesList, setSpeciesList] = useState({});
  const [evolutionList, setEvolutionList] = useState({});
  const evolutionChainUrl = _.get(speciesList, 'evolution_chain.url', '');

  const evolutionListElement = _.map(evolutionList, (evolution, index) => (
    <div id="evolutionRow" key={index}>
      <img id="evolutionImage" src={evolution} alt={index} width="200" height="200" />
    </div>
  ));

  const getEvolutionChain = (chain, evolutionChain = []) => {
    if(_.get(chain, 'evolves_to.length', 0) === 0) {
      return [...evolutionChain, _.get(chain, 'species', {})];
    }
    if(_.get(chain, 'evolves_to.length', 0) > 1) {
      const eevveelutions = _.map(chain.evolves_to, evolution => getEvolutionChain(evolution, [...evolutionChain]));
      return [...evolutionChain, _.get(chain, 'species'),...eevveelutions];
    }
    const species = _.get(chain, 'species', {});
    return getEvolutionChain(_.get(chain, 'evolves_to[0]', {}), [...evolutionChain, species]);
  }

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get(
        `https://pokeapi.co/api/v2/pokemon-species/${name}`
      );
      setSpeciesList(data);
    }
    fetchData();
  }, [name]);

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get(`${evolutionChainUrl}`);
      const chain = _.get(data, 'chain', {});
      const evolutionChain = getEvolutionChain(chain);
      // Why does it only take one parameter?
      const flattend = _.flatten(evolutionChain);
      const responses = await Promise.all(_.map(flattend, species => axios.get(`https://pokeapi.co/api/v2/pokemon/${species.name}`)));
      const pokemonSprites = _.map(responses, response => _.get(response, 'data.sprites.other.official-artwork.front_default', {}));
      setEvolutionList(pokemonSprites);
    }
    fetchData();
  }, [evolutionChainUrl]);

return (
    <div className="evolutionChain">
        <h2>Evolution</h2>
        <div id="evolution">{evolutionListElement}</div>
    </div>
  );
} 

// What is this?
EvolutionChain.propTypes = {
  name: propTypes.string.isRequired,
};