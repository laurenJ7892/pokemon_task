import { addPokeToParty, removePokeFromPaty, getParty, getPartyCounter } from '../../firebase/firebase';

export const getPartyData = async () => {
    let partyData = await getParty();
    return partyData
};

export const removePokemon = async (pokemon) => {
  const done = await removePokeFromPaty(pokemon);
  // send back to trigger getPaty Load
  return done;
}

export const addPokemon = async (pokemon) => {
  console.log(pokemon);
  const done = await addPokeToParty(pokemon);
  // send back to trigger getPaty Load
  return done;
}

export const getPartiesCounter = async () => {
  const done = await getPartyCounter();
  return done;
}