const { Videogame, Genre } = require('../db');

const postVideogame = async (
    name,
    description,
    platforms,
    image,
    released,
    rating,
    genres
  ) => {
    if (
      !name ||
      !description ||
      !platforms ||
      !image ||
      !released ||
      !rating ||
      !genres
    )
    throw new Error('Falta informacion requerida')

    const currentVideogames = await Videogame.findOne({
      where: { name : name },
    });

    if(currentVideogames) {
      throw new Error('Nombre de juego ya existente')};

    const genreIdentifier = genres.map((genre) => genre.id);
    const currentGenre = await Genre.finAll({
      where: { id: genreIdentifier }});

    const newVideogame = await Videogame.create({
      name,
      description,
      platforms,
      image,
      released,
      rating,
    });

    await newVideogame.addGenre(currentGenre);

    return newVideogame;
  };

module.exports = postVideogame;
 
