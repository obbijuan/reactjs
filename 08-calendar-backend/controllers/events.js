const { response } = require('express');


const getEvents = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'getEvents'
    })
}

const createEvent = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'createEvent'
    })
}

const updatetEvent = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'updatetEvent'
    })
}

const deleteEvent = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'deleteEvent'
    })
}

module.exports = {
    getEvents,
    createEvent,
    updatetEvent,
    deleteEvent
}