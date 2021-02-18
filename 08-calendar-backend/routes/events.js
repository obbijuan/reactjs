/*
    Events Routes
    /api/events
*/
const { Router } = require('express');
const { validateJWT } = require('../middlewares/jwt-validate');
const { getEvents, createEvent, updatetEvent, deleteEvent } = require('../controllers/events');

const router = Router();

// Todas las rutas que estan debajo de este middleware, 
// pasarán por validacion de token.
router.use(validateJWT);

router.get('/', getEvents);
router.post('/', createEvent);
router.put('/:id', updatetEvent);
router.delete('/:id', deleteEvent);


module.exports = router;