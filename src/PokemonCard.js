function PokemonCard(props) {
    const {pokemons} = props;
    // console.log(pokemons);

  return (
    <div className="Pokedex">
      <h1>{pokemons.name}</h1>
      <h2>{pokemons.types[0].type.name}</h2>
    </div>
  );
}

export default PokemonCard;
