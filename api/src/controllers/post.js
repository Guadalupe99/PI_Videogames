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
    //console.log("data:", name, description, platforms, image, released, rating, genres);
    // console.log("name:", name);
    // console.log("description:", description);
    // console.log("platforms:", platforms);
    // console.log("image:", image);
    // console.log("released:", released);
    // console.log("rating:", rating);
    // console.log("genres:", genres);
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
      //console.log("Existing game found with the same name");
      throw new Error('Nombre de juego ya existente')};

    const genreIdentifier = genres.map((genre) => genre.id);
    //console.log("Genre identifiers:", genreIdentifier);
    const currentGenre = await Genre.findAll({
      where: { id: genreIdentifier }});
     // console.log("Current genre:", currentGenre);

    const newVideogame = await Videogame.create({
      name,
      description,
      platforms,
      image,
      released,
      rating,
      genres
    });

    await newVideogame.addGenre(currentGenre);

    return newVideogame;
  };

module.exports = postVideogame;
 

//JSON
// {
//   "name": "D/DH3",
//   "description": "The year is 2021, and Genoq has become a leading corporation in bio-medical research. However, the tower, some 90 stories high, is not all that it seems.",
//   "platforms": "Xbox One, PlayStation 4, Nintendo Switch, PC, macOS",
//   "image": "https://media.rawg.io/media/screenshots/5c4/5c41cb3b0d15ef0974f930898cedbc6c.jpg",
//   "released": "2015-10-23",
//   "rating": "2",
//   "genres": [
//     {
//       "id": 1,
//       "name": "Action"
//     },
//     {
//       "id": 3,
//       "name": "Adventure"
//     }
//   ]
// }
