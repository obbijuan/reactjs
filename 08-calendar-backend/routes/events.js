/*
    Events Routes
    /api/events
*/
const { Router } = require('express');
const { check } = require('express-validator');

const { isDate } = require('../helpers/isDate');
const { fieldValidator } = require('../middlewares/fieldvalidator');
const { validateJWT } = require('../middlewares/jwt-validate');
const { getEvents, createEvent, updatetEvent, deleteEvent } = require('../controllers/events');

const router = Router();

// Todas las rutas que estan debajo de este middleware, 
// pasarán por validacion de token.
router.use(validateJWT);

router.get('/', getEvents);
router.post(
    '/',
    [
        check('title', 'El titulo es obligatorio').not().isEmpty(),
        check('start', 'Fecha de inicio es obligatoria').custom( isDate ),
        check('end', 'Fecha de finalizacion es obligatoria').custom( isDate ),
        fieldValidator
    ],
    createEvent
);
router.put('/:id', updatetEvent);
router.delete('/:id', deleteEvent);


module.exports = router;