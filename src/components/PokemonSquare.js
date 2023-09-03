import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
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
  const [pokeName, setName] = useState(props.data.name);
  const [toggle, setToggle] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  
  let pokeId = props.data.id;
  let pokeShowId = `#${pokeId.toString().padStart(3, '0')}`;
  let imageUrl = props.data.sprites ? props.data.sprites.front_default : props.data.imageUrl ? props.data.imageUrl : pokeBall;
  let types = props.data.types;
  let typeArray = types && types.map((i) => [i.type.name]);
  
  
  return (
        <div className="pokeCard" key={pokeId} onClick={() => setIsSelected(!isSelected)} >
        { pokeName != '' ? <p className="pokeCard--pokeNumber--text">{pokeShowId}</p> : <p></p> }
        <img className="pokeCard--image" 
          src={imageUrl}
          onClick={ props.page == 'pokedex' ? () => props.addMethod(props.data) : () => props.removeMethod(props.data)}/>
        { pokeName != '' ?
          <p className="pokeCard--added-party">Added to {props.count} parties</p> :  <FontAwesomeIcon className="plusImage" icon={faPlus}  size="2x" />
        }
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
        { pokeName != '' ? <div className="pokeCard--pokeNumber"></div> : '' }
        <div className="pokeCard--intersect--rectangle"></div>
        <div className="pokeCard--intersect--circle"></div>
        { props.page== 'party' && toggle ? <input className="pokeCard--name" type="text" defaultValue={pokeName}
          onChange={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setName(e.target.value);
            props.saveMethod(props.data.id, e.target.value);
          }} 
          onKeyDown={(event) => {
            if (event.key === 'Escape') {
              setToggle(false);
              event.preventDefault();
              event.stopPropagation();
            }
        }}/>  
          : 
         <header className="pokeCard--name" onClick={() => setToggle(true)}>{pokeName}</header> }
        { props.count > 0 ? 
        isSelected ? <div className="pokeCard--union--rectangle-selected-active" ></div> :
        <div className="pokeCard--union--rectangle-selected" ></div>
        : <div className="pokeCard--union--rectangle" ></div>
        }
        <div className="pokeCard--card-body"></div>
      </div>
  )
};

export default PokemonSquare;