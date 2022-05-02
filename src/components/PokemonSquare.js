import React, {useEffect, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import pokeBall from '../../images/pokeball.png';

const pokeTypeColours = {
	normal: '#AAB09F',
	fire: '#E28544',
	water: '#6F92E9',
	electric: '#E5C531',
	grass: '#8BC460',
	ice: '#70CBD4',
	fighting: '#CB5F48',
	poison: '#94499B',
	ground: '#CC9F4F',
	flying: '#A494EA',
	psychic: '#E5709B',
	bug: '#ABB642',
	rock: '#B2A061',
	ghost: '#846AB6',
	dragon: '#6A7BAF',
	dark: '#736C75',
	steel: '#89A1B0',
	fairy: '#E397D1',
};

const PokemonSquare = (props) => {
  let pokeName = props.data.name || '';
  let pokeId = props.data.id || '';
  let pokeShowId = `#${pokeId.toString().padStart(3, '0')}`;
  let imageUrl = props.data.sprites ? props.data.sprites.front_default : props.data.imageUrl ? props.data.imageUrl : pokeBall;
  let types = props.data.types;
  let typeArray = types.map((i) => [i.type.name]);
  let partyCounter = props.count;
  let partyPokemon = [];

  return (
    pokeId ? (  
        <div className="pokeCard" key={pokeId} onClick={ props.page == 'pokedex' ? () => props.addMethod(props.data) : () => props.removeMethod(props.data)}>
        <ToastContainer />
        <p className="pokeCard--pokeNumber--text">{pokeShowId}</p>
        <img className="pokeCard--image" src={imageUrl}/>
        <p className="pokeCard--added-party">Added to {partyCounter} parties</p>
        {  typeArray && typeArray.length == 1 ?
          (
            typeArray.map((type) => (
              <div className="pokeType__value__single" disabled style={{backgroundColor: pokeTypeColours[type]}}> {type} </div> )
          ))
        : <div className="pokeType__container">
            {(typeArray.map((type) => (
                <div className="pokeType__value__double" disabled style={{backgroundColor: pokeTypeColours[type]}}> {type} </div>
            ))
            )}
          </div> }
        <div className="pokeCard--pokeNumber"></div>
        <div className="pokeCard--intersect--rectangle"></div>
        <div className="pokeCard--intersect--circle"></div>
        <header className="pokeCard--name">{pokeName}</header>
        { partyPokemon && partyPokemon.length > 1 && partyPokemon.includes(pokeId) ?
          <div className="pokeCard--union--rectangle" style={{borderColor: '#96DED1'}}></div>
          : <div className="pokeCard--union--rectangle"></div>
        }
        <div className="pokeCard--card-body"></div>
      </div>
    ) : (
      <div>
        <div className="pokeCard--union--rectangle"></div>
        <div className="pokeCard--card-body"></div>
        <div className="squarePlus"></div>
        <FontAwesomeIcon className="plusImage" icon={faPlus}  size="2x" />
    </div>
    )
  )
};

export default PokemonSquare;