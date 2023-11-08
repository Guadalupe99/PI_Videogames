const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const gameRouter = require('./videogameRouter');
const genreRouter = require('./genreRouter');

const router = Router();

// Configurar los routers
router.use('/videogames', gameRouter);
router.use('/genres', genreRouter);


module.exports = router;
