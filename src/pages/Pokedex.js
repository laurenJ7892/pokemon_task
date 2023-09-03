import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import PokemonGrid from '../components/PokemonGrid';
import PartyColumn from '../components/PartyColumn';
import scrollMore from '../../images/scroll_more.png';
import { getLoadMorePokies } from '../../api/api';
import { addPokemon, partySize, checkPartySize } from '../logic/party';

const Pokedex = (props) => {
  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon?offset=0&limit=12');
  const [pokemonData, setPokemonData] = useState([]);


  // load more when user scrolls down page
  const handleScroll = () => {
    const scrollTop = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
    const scrollHeight = (document.documentElement && document.documentElement.scrollHeight) || document.body.scrollHeight;
    // check if page scroll is within 10 of the window height
    if (scrollTop + window.innerHeight + 10 >= scrollHeight)
    {
      getData();
    }
  };
  
  const getData = async () => {
    let newResults = await getLoadMorePokies(url);
    if (newResults && newResults.data && newResults.data.length > 0) {
      setPokemonData([...pokemonData, ...newResults.data]);
      setUrl(newResults.nextUrl);
    }
  }

  const addPoke = async (pokemon) => {
    let data = await checkPartySize(props.state);
    if (data.length < partySize) {
      await addPokemon(pokemon);
      props.getParty();
    } else {
      toast("You already have 6 pokemon, please remove before adding more!");
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  useEffect(() => { getData();}, []);

  return (
    <div className="content-container">
      <div>
        <ToastContainer  position="top-right" autoClose={5000} closeOnClick/>
        <Link to="/party">
        <div className="circle">
          <p className="circle--text">Party</p>
          <FontAwesomeIcon className="circle--arrow" icon={faArrowRight} />
        </div>
      </Link>
       <div className="background-image--container">
          <div className="pokegrid--col">
              <p className="left-column--page--header">Choose your team</p>
              <div className="left-column--scroll-more">
              <p className="left-column--scroll-more--text">Scroll for more</p>
              <img className="left-column--scroll-more--image" src={scrollMore}/>
              </div>
          </div>
        </div>
        <div className="pokegrid--col--2">
          <PokemonGrid state={pokemonData} party={props.state} counter={props.counter} addMethod={(pokemon) => addPoke(pokemon)} />
        </div>
        <div className="pokegrid--col--party">
          { <PartyColumn props={props.state} />  }
        </div>
      </div>
      <p className="pokegrid_tally">{pokemonData.length}/151</p>
      </div>
  );
}

export default Pokedex;