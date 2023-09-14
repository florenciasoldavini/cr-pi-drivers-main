const axios = require('axios');
const { Driver, Team } = require('./../db');
const joinTeams = require('./../helpers/joinTeams');

const DEFAULT_IMAGE = "https://i.kym-cdn.com/entries/icons/original/000/032/100/cover4.jpg";
const URL = "http://localhost:5000/drivers";

const getDrivers = async (_, res) => {

  try {
    const response = await axios.get(URL);
    const data = response.data;

    const apiDrivers = data.map((driver) => {
      return {
        id: driver.id,
        forename: driver.name.forename,
        surname: driver.name.surname,
        image: driver.image.url ? driver.image.url : DEFAULT_IMAGE,
        dob: driver.dob,
        nationality: driver.nationality,
        teams: driver.teams,
        description: driver.description,
      };
    });

    const drivers = await Driver.findAll({
      include: Team
    });

    const dbDrivers = drivers.map(driver => {

      const joinedTeams = joinTeams(driver);

      return {
        id: driver.id,
        forename: driver.forename,
        surname: driver.surname,
        image: driver.image,
        dob: driver.dob,
        nationality: driver.nationality,
        teams: joinedTeams,
        description: driver.description
      };
    });

    const allDrivers = dbDrivers.concat(apiDrivers);

    res.json(allDrivers);

  } catch (error) {
    res.status(500).send({ error: error.message });
  };
};

module.exports = getDrivers;