require('dotenv').config();
const axios = require('axios');
const { API_URL, API_KEY } = process.env;
const { Videogame, Genre } = require('../db');
const { Op } = require('sequelize');

const getByName = async (name) => {

    const foundDbVG = await Videogame.findAll({
        attributes: ['id', 'image', 'name'],
        include: [
            {
                model: Genre,
                attributes: ['name'],
                through: {
                    attributes: [],
                },
            },
        ],
        where: {
            name: {
                [Op.iLike]: `%${name}%`,
            },
        },
    });

    const axiosResponse = await axios.get(`${API_URL}?key=${API_KEY}&search=${name}`);

    const foundApiVG = axiosResponse.data.results.map((vg) => {
        return {
            id: vg.name,
            name: vg.name,
            image: vg.background_image,
            genres: vg.genres.map((g) => {
                return { name: g.name};
            }),
        };
    });

    const foundVG = [...foundDbVG, ...foundApiVG].slice(0, 15);

    return foundVG
};

module.exports = getByName;