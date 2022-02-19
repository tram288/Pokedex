import React from 'react';

export default class PokemonCardV2 extends React.Component{

    constructor(props){
        super(props)
        console.log(props)
        this.state = {
            name: props.name,
            types: props.types
        }
    }
    render()
    {
        const {name, types} = this.state;
       // console.log(pokemons);
       // console.log(pokemons.pokemons.name);
       const typeList = types.map((typeInfo) => <h2>{typeInfo.type.name}</h2>);

        return(
        <div className="Pokedex">
        <h1>{name}</h1>
        {typeList}
      </div>
      )
    }
}