import React from 'react';
import _ from 'lodash'

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
        const name = _.get(this.props, 'pokemon.name', '');
        const types = _.get(this.props, 'pokemon.types');
        const typeList = _.map(types, (typeInfo) => <h2>{typeInfo.type.name}</h2>);

        return(
        <div className="Pokedex">
        <h1>{name}</h1>
        {typeList}
      </div>
      )
    }
  }