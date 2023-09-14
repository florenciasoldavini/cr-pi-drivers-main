const { Driver, Team } = require('./../db');
const axios = require('axios');
const { Op } = require("sequelize");

const URL = "http://localhost:5000/drivers";

const postDriver = async (req, res) => {
    try {
        const { forename, surname, description, image, nationality, dob, teams } = req.body;

        if (forename && surname && description && image && nationality && dob) {
            const dbDriver = await Driver.findAll({
                where: { forename: forename } && { surname: surname }
            });

            const response = await axios.get(URL);
            const data = response.data;

            const apiDriver = data.filter(
                driver =>
                    driver.name.forename === forename &&
                    driver.name.surname === surname
            );

            if (dbDriver.length === 0 && apiDriver.length === 0) {
                const newDriver = await Driver.create({
                    forename,
                    surname,
                    description,
                    image,
                    nationality,
                    dob,
                });

                teams.forEach(async team => {
                    const dbTeam = await Team.findAll({
                        where: {
                            name: {
                                [Op.like]: team
                            }
                        }
                    });

                    await newDriver.addTeam(dbTeam, { through: 'driver_team' });
                });
                
                res.send(newDriver);
            } else {
                res.status(409).send({ error: "Ya existe ese corredor" });
            };
        } else {
            res.status(422).send({ error: "Faltan datos" });
        };
    } catch (error) {
        res.status(500).send({ error: error.message })
    };
};

module.exports = postDriver;