const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const gameRouter = require('./videogameRouter');

const router = Router();

// Configurar los routers
router.use('/videogame', gameRouter);


module.exports = router;
