import React from 'react';
import './App.css';
import PokemonList from './PokemonList';
import PokemonDetails from './pages/PokemonDetails';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import RadarChart from './components/RadarChart';

function App() {
  return (
    <div className="Pokedex">
      <div className="title">Pokedex</div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PokemonList />} />
          <Route path="/pokemon/:id" element={<PokemonDetails />} />
          <Route path="/chart" element={<RadarChart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
