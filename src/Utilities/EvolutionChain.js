// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import _ from 'lodash';

// export default function EvolutionChain(props) {
//   const { name } = props;
//   const [speciesList, setSpeciesList] = useState({});
//   const [evolutionList, setEvolutionList] = useState({});
//   const evolution_chain = _.get(speciesList, 'evolution_chain.url', '');

//   useEffect(() => {
//     async function fetchData() {
//       const { data } = await axios.get(
//         `https://pokeapi.co/api/v2/pokemon-species/${name}`
//       );
//       setSpeciesList(data);
//     }
//     fetchData();
//   }, [name]);

//   useEffect(() => {
//     async function fetchData() {
//       const { data } = await axios.get(
//         `${evolution_chain}`
//       );
//       setEvolutionList(data);
//     }
//     fetchData();
//   }, [evolution_chain]);

// const baby = _.get(evolutionList, 'chain.species.name', '');
// console.log(baby);

// return (
//     <div className="evolutionChain">
//         {baby}
//     </div>
//   );
// } 
