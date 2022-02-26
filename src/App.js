import React from 'react';
import './App.css';
import PokemonList from './PokemonList';

function App() {
  return (
    <div className="Pokedex">
      <div className="title">Pokedex</div>
      <PokemonList />
    </div>
  );
}

export default App;
