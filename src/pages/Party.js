import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import PokemonSquare from '../components/PokemonSquare';
import { removePokemon } from '../logic/party'

const Party = (props) => {
  
  const removePokeFromPaty = async (pokemon) => {
    console.log(pokemon);
    await removePokemon(pokemon);
    props.getParty();
  }

  const filterCount = (name) => {
    return (name in props.counter) ? props.counter[name]['count'] : 0;
  }

  return (
    <div className="content-container">
      <div className="background-image--container">
        <div className="pokegrid--col">
          <p className="party--left-column--page--header">Ash's party</p>
        </div>
      </div>
      <div className="pokemon--grid">
        {props.state.map((item) => <PokemonSquare data={item} page={'party'} count={filterCount(item.name)} removeMethod={(pokemon) => removePokeFromPaty(pokemon)} /> )}
      </div>
      <p className="party_tally">{props.state.length}/6</p>
      <Link className="a" to="/">
        <div className="circle">
          <p className="circle--text">Dex</p>
          <FontAwesomeIcon className="circle--arrow" icon={faArrowRight} />
        </div>
      </Link>
    </div>
  )
};

export default Party;