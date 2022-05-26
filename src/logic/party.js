import { addPokeToParty, removePokeFromPaty, getParty, getPartyCounter } from '../../firebase/firebase';

export const partySize = 6;

export const getPartyData = async () => {
    let partyData = await getParty();
    return partyData
};

export const removePokemon = async (pokemon) => {
  const done = await removePokeFromPaty(pokemon);
  return done;
}

export const checkPartySize = (party) => {
  const data = party.filter(item => item.name != '');
  return data;
}

export const addPokemon = async (pokemon) => {
  const done = await addPokeToParty(pokemon);
  return done;
}

export const getPartiesCounter = async () => {
  const done = await getPartyCounter();
  return done;
}