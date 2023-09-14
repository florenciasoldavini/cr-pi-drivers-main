const axios = require('axios');
const { Driver, Team } = require('../db');
const joinTeams = require('./../helpers/joinTeams');

const REGEX_UUID = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi;
const DEFAULT_IMAGE = "https://i.kym-cdn.com/entries/icons/original/000/032/100/cover4.jpg";
const URL = "http://localhost:5000/drivers";

const getDriverById = async (req, res) => {
    const id = req.params.idDriver;

    let isUUID = id.match(REGEX_UUID) ? true : false;

    if (id) {
        try {
            if (isUUID) {
                const driver = await Driver.findByPk(id, {
                    include: Team
                });

                const joinedTeams = joinTeams(driver);

                const dbDriver = {
                    id: driver.id,
                    forename: driver.forename,
                    surname: driver.surname,
                    image: driver.image,
                    dob: driver.dob,
                    nationality: driver.nationality,
                    teams: joinedTeams,
                    description: driver.description
                };

                res.json(dbDriver);
            } else {
                const response = await axios.get(URL + `/${id}`);
                const driver = response.data;

                const apiDriver = {
                    id: driver.id,
                    forename: driver.name.forename,
                    surname: driver.name.surname,
                    image: driver.image.url ? driver.image.url : DEFAULT_IMAGE,
                    dob: driver.dob,
                    nationality: driver.nationality,
                    teams: driver.teams,
                    description: driver.description,
                };

                res.json(apiDriver);
            };
        } catch (error) {
            res.status(500).send({ error: error.message });
        };
    } else {
        res.status(422).send({ error: "Faltan datos" });
    };
};

module.exports = getDriverById;







