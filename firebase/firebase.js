import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, onValue, increment, } from "firebase/database";


const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const pokePartyCount = ref(db, 'pokePartyCount');
const partyData = ref(db, 'pokeParty');

export const getParty = () => {
  let partyArr = [];
  onValue(partyData, (snapshot) => {
    snapshot.forEach((childSnapshot) => {
      const key = childSnapshot.key;
      const imageUrl = childSnapshot.val().imageUrl;
      const id = childSnapshot.val().id;
      const name = childSnapshot.val().name;
      const types = childSnapshot.val().types;
      let partyObj = {
        key,
        imageUrl,
        id,
        name,
        types
      };
      partyArr.push(partyObj);
    })
  })
  return partyArr
}


export const getPartyCounter = () => {
  let countObj = {}
  onValue(pokePartyCount, (snapshot) => {
    // key here is pokemon name and value is parties count
    snapshot.forEach((childSnapshot) => {
      const childKey = childSnapshot.key;
      const childData = childSnapshot.val()
      countObj[childKey] = childData
    });
  }, {
    onlyOnce: true
  });
  return countObj;
}

const updateCounter = (pokemon, direction) => {
  const val = direction == 'add' ? 1 : -1;
  set(ref(db, 'pokePartyCount/' + pokemon), {
    count: increment(val)
  })
}

// Add to Party and update the count collection
export const addPokeToParty = async ({ name, id, sprites, types }) => {
  await set(ref(db, 'pokeParty/' + id), {
    name,
    imageUrl: sprites.front_default,
    id,
    types
  });
  updateCounter(name, 'add');
  return true;
}

// Remove from Party and simulataneously update the count collection
export const removePokeFromPaty = async ({ id, name }) => {
  await set(ref(db, 'pokeParty/' + id), null);
  updateCounter(name, 'remove');
  return true;
}