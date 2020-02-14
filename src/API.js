import request from "superagent";

const URL = 'https://alchemy-pokedex.herokuapp.com/api/pokedex?';

export async function getPokemon() {
    let queryString = window.location.hash.slice(1);
    const url = `${URL}${queryString}`;

    const response = await request.get(url);
    const data = response.body;

    if (data.Response === "False") {
        return {
            search: [],
            results: 0
        };
    }
    console.log(data);
    return data;
}