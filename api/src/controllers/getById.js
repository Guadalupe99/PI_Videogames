require('dotenv').config();
const axios = require('axios');
const { API_URL, API_KEY} = process.env;
const { Videogame, Genre } = require('../db');

const getById = async (id) => {
   
    if(!isNaN(id)) {
        const result = (await axios.get(`${API_URL}/${id}?key=${API_KEY}`)).data;
        return {
            id: result.id,
            name: result.name,
            image: result.background_image,
            description: result.description,
            released: result.released,
            rating: Math.floor(result.rating),
            platforms: result.platforms.map((p) => p.platform.name).join(", "),
            genres: result.genres.map((g) => {
              return { name: g.name }
            }),
        };
    } else {
        const responseDB = await Videogame.findByPk(id, {
            // findByPk se utiliza para recuperar un registro específico de una tabla de base de datos utilizando su clave primaria como criterio de búsqueda

            include: {
                model: Genre,
                attributes: ['name'],
                through: {
                    attributes: [],
                },
            },
        });

        
        if (responseDB) {
            return { ...responseDB.toJSON(),
            genres: responseDB.genres.map((genre) => ({name: genre.name }))}
        }

        return 'No se encontro el videojuego';
    }
};

module.exports = getById;