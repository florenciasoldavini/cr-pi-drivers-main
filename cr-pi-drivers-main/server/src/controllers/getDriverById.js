const URL = "http://localhost:5000/drivers";
const axios = require('axios');
const { Driver, Team } = require('../db');

const getDriverById = async (req, res) => {
    const id = req.params.idDriver;

    const regexUUID = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi;
    let result = id.match(regexUUID) ? "UUID" : "Not UUID";

    if (id) {
        try {
            if (result === "UUID") {
                const driver = await Driver.findByPk(id, {
                    include: Team
                });

                const teams = [];
                driver.teams.forEach(team => teams.push(team.name))
                const joinedTeams = teams.join(", ");

                const dbDriver = {
                    id: driver.id,
                    forename: driver.forename,
                    surname: driver.surname,
                    image: driver.image,
                    dob: driver.dob,
                    nationality: driver.nationality,
                    teams: joinedTeams,
                    description: driver.description
                }

                res.json(dbDriver);

            } else if (result === "Not UUID") {

                const response = await axios.get(URL + `/${id}`);
                const driver = response.data;

                const apiDriver = {
                    id: driver.id,
                    forename: driver.name.forename,
                    surname: driver.name.surname,
                    image: driver.image.url ? driver.image.url : "https://i.kym-cdn.com/entries/icons/original/000/032/100/cover4.jpg",
                    dob: driver.dob,
                    nationality: driver.nationality,
                    teams: driver.teams,
                    description: driver.description,
                };

                res.json(apiDriver);
            }
        } catch (error) {
            res.status(400).send({ error: error.message })
        }
    } else {
        res.status(500).send({ error: "Driver detail not found" })
    }
}

module.exports = getDriverById;







