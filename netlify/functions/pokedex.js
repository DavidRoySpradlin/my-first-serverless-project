const fetch = require('node-fetch', 'node-domexception', 'fetch-blob', 'formdata-polyfill', 'data-uri-to-buffer', 'web-streams-polyfill'); 

exports.handler = async function() {
    const POKE_API = 'https://pokeapi.co/api/v2/pokedex/kanto'

    const response = await fetch(POKE_API)
    const data = await response.json()

    return {
        statusCode: 200,
        body: JSON.stringify(data)
    }
}   