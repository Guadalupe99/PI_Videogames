const { Router } = require('express');
const getGenres = require('../controllers/getGenres');

const genreRouter = Router();

genreRouter.get('/', async (req, res) => {
    try {
        const response = await getGenres();
        return res.status(200).send(response);
    } catch (error) {
        return res.status(500).send('Hubo un error con los generos');
    }
})

module.exports = genreRouter;
