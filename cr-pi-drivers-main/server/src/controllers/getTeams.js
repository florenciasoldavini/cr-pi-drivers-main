const URL = "http://localhost:5000/drivers";
const axios = require('axios');
const { Team } = require('./../db');

const getTeams = async (req, res) => {
    try {
        const dbTeams = await Team.findAll()

        if (dbTeams.length > 0) {
            res.json(dbTeams)
        } else {
            const response = await axios.get(URL);
            const data = response.data;

            const apiDrivers = data.filter(driver => driver.hasOwnProperty("teams"))

            if (apiDrivers) {
                let allTeams = [];

                apiDrivers.forEach(driver => {
                    let driverTeams = driver.teams.split(",");


                    driverTeams.forEach(team => {
                        team = team.trim()

                        if (!allTeams.includes(team)) {
                            allTeams.push(team)
                        }
                    })
                });

                allTeams.forEach(async team => {
                    await Team.create({
                        name: team,
                    })
                })
                
                res.json(allTeams)
            }
        }
    } catch (error) {
        res.status(400).send({ error: error.message })
    }
}

module.exports = getTeams

