const { Router } = require("express");
const getDrivers = require('../controllers/getDrivers');
const getDriverById = require('../controllers/getDriverById')
const getDriverByName = require('./../controllers/getDriverByName');
const getTeams = require('./../controllers/getTeams');
const postDriver = require('./../controllers/postDriver');

const router = Router();

router.get('/drivers', (req, res) => {
    getDrivers(req, res)
})

router.get('/drivers/search', (req, res) => {
    getDriverByName(req, res)
})

router.get('/drivers/:idDriver', (req, res) => {
    getDriverById(req, res)
})

router.post('/drivers', (req, res) => {
    postDriver(req, res)
})

router.get('/teams', (req, res) => {
    getTeams(req, res)
})

module.exports = router;
