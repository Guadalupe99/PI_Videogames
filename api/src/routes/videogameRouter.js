const { Router } = require('express');
const getById = require('../controllers/getById');
const getByName = require('../controllers/getByName');
const postVideogame = require('../controllers/post');

const gameRouter = Router();

gameRouter.get('/', async (req, res) => {
    const { name } = req.query;
    try {
        const videogames = await getByName(name);

        if (videogames.length === 0){
            return res.status(404).json({message: 'No se encontraron videojuegos'});
        }

        return res.status(200).json(videogames);
    } catch (error) {
        return res.status(500).send(error.message);
    }
});

gameRouter.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const game = await getById(id);
        return res.status(200).json(game);
    } catch (error) {
        return res.status(400).send(error.message);
    }
});

gameRouter.post('/', async (req, res) => {
  const {
    id,
    name,
    description,
    platforms,
    image,
    releaseDate,
    rating,
    genres,
  } = req.body;
  try {
    const response = await postVideogame(
      name,
      description,
      platforms,
      image,
      releaseDate,
      rating,
      genres
    );
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
module.exports = gameRouter;