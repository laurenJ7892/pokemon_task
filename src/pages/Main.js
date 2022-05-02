import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import Pokedex from './Pokedex';
import Party from './Party';
import { getGenOneAllPokies } from '../../api/api';
import { getPartyData, getPartiesCounter } from '../logic/party';

const Main = () => {
  const partySize = 6;
  const [party, setParty] = useState([]);
  const [partiesCounter, setPartyCounter] = useState({});

  const getParty = async () => {
    let partyData = await getPartyData();
    let arrayLength = partyData.length;
    // to test
    if (partySize < arrayLength ) {
      [...Array(partySize - arrayLength)].map((item, index) => {
        partyData.push({
          key: index + 1,
          imageUrl: pokeBall
        });
      });
    }
    setParty(partyData);
    getPartyCounter();
  }

  const getPartyCounter = async () => {
    let counter = await getPartiesCounter();
    setPartyCounter(counter);
  }
  
  getGenOneAllPokies();

  useEffect(() => { getParty(); }, []);
  useEffect(() => { getPartyCounter(); }, {});

  return (
    <Switch>
      <Route exact path="/" component={() => (<Pokedex state={party} counter={partiesCounter} getParty={() => getParty()} />)} ></Route>
      <Route exact path="/party" component={() => <Party state={party} counter={partiesCounter} getParty={() => getParty()} />}></Route>
    </Switch>
  );
};

export default Main;  