import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"
import './App.css';
import PokemonList from './Components/PokemonList';
import PokemonDetails from './Components/PokemonDetails';

function App() {
  return (
    <div className="Pokedex">
      <div className="title">Pokedex</div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PokemonList />} />
          <Route path="pokemon/:pokemonId" element={<PokemonDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
