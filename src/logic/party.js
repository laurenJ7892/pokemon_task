import { addPokeToParty, removePokeFromPaty, getParty, getPartyCounter } from '../../firebase/firebase';

export const partySize = 6;

export const getPartyData = async () => {
    return await getParty();
};

export const removePokemon = async (pokemon) => {
  return await removePokeFromPaty(pokemon);
}

export const checkPartySize = (party) => {
  return party.filter(item => item.name != '');
}

export const addPokemon = async (pokemon) => {
  return await addPokeToParty(pokemon);
}

export const getPartiesCounter = async () => {
  return await getPartyCounter();
}