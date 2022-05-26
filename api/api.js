import axios from 'axios';

const genOnePokeUrl = 'https://pokeapi.co/api/v2/generation/1';
let genOneArray = []

const getRequest = async (url) => {
  const res = await axios.get(url)
  if (res && res.data) {
    return res.data
  }
}

const patchRequest = async (url, data) => {
  const config = {
    'Content-Type':'application/json',
  }
  const res = await axios.push(url, data, config);
}


export const getGenOneAllPokies = async () => {
  if (genOneArray.length == 0) { 
    const res = await getRequest(genOnePokeUrl);
    if (res && res.pokemon_species) {   
      genOneArray.push(Object.values(res.pokemon_species).map(pokemon => pokemon.name));
    }
    else {
    // to do error handling
    }
  }
}

export const getPokemonInfo = async (pokeUrl) => {
  const res = await getRequest(pokeUrl);
  return res
}

export const getLoadMorePokies = async (url) => {
  const res = await getRequest(url);
  let resObj = {
    nextUrl: '',
    data: []
  };
  // write to firebase storage?
  if (res && res.results) {
    resObj.nextUrl = res.next;
    await Promise.all(res.results.map(async (pokemon) => {
      // we only need version 1 pokemon
      if (genOneArray[0].includes(pokemon.name)) {
        let pokemonInfo = await getPokemonInfo(pokemon.url)
        resObj.data.push(pokemonInfo);
      }
    }))
    resObj.data.sort((a, b) => a.id - b.id)
    return resObj;
  }
}