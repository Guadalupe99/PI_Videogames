require('dotenv').config();
const axios = require('axios');
const { Videogame, Genre } = require('../db');
const { API_GENRE, API_KEY } = process.env

const getGenres = async () => {
    const response = await axios.get(`${API_GENRE}?key=${API_KEY}`) 
    
    const getApi = response.data
    //console.log(getApi);
    
    getApi.forEach((genre) => {
        Genre.findOrCreate({
            //"findOrCreate" es una operación que se usa comúnmente en sistemas de bases de datos y ORMs para buscar un registro en una tabla o colección de datos y, si no se encuentra, crearlo.
            where: {
                name: genre.name
            }
        })
        console.log(`Created or found genre: ${genre.name}`);
    })
    const genres = await Genre.findAll();
    console.log('Fetched genres from the database:', genres);
    return genres;
    
    
}

module.exports = getGenres;
