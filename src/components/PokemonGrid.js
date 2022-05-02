import React from 'react';
import PokemonSquare from './PokemonSquare';


const PokemonGrid = (props) => {
  const countData = props.counter;
  const filterCount = (name) => {
    return (name in countData) ? countData[name]['count'] : 0;
  }

  return (
    <div className="pokemon--grid">
        {props.state && props.state.map((item, index) => <PokemonSquare key={index} count={filterCount(item.name)} data={item} page={'pokedex'} addMethod={(pokemon) => props.addMethod(pokemon)} /> )}
    </div>
  )
};

export default PokemonGrid;