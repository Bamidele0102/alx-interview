#!/usr/bin/node
/**
 * Prints all characters of a Star Wars movie.
 * The first positional argument passed is the Movie ID
 * Display one character name per line in the same order
 * as listed in the /films/ endpoint
 */

const request = require('request-promise-native');
const filmNum = process.argv[2] + '/';
const filmURL = 'https://swapi-api.alx-tools.com/api/films/';

async function fetchCharacters() {
  try {
    // Makes API request to get the film data
    const body = await request(filmURL + filmNum);
    
    // Parse the response to get the list of character URLs
    const charURLList = JSON.parse(body).characters;

    // Iterate over each character URL and fetch their data
    for (const charURL of charURLList) {
      const charBody = await request(charURL);
      const character = JSON.parse(charBody);
      console.log(character.name);
    }
  } catch (err) {
    console.error(err);
  }
}

fetchCharacters();
