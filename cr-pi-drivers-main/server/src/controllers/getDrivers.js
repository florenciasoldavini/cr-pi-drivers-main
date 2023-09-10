const URL = "http://localhost:5000/drivers";
const axios = require('axios');
const { Driver } = require('./../db');

const getDrivers = async (req, res) => {
    try {
        const response = await axios.get(URL);
        const data = response.data;

        const apiDrivers = data.map((driver) => { 
            return {
              id: driver.id,
              forename: driver.name.forename,
              surname: driver.name.surname,
              image: driver.image.url ? driver.image.url : "https://i.kym-cdn.com/entries/icons/original/000/032/100/cover4.jpg",
              dob: driver.dob,
              nationality: driver.nationality,
              teams: driver.teams,
              description: driver.description,
            };
          });
        
          console.log(apiDrivers);

        const dbDrivers = await Driver.findAll();

        const allDrivers = dbDrivers.concat(apiDrivers)

        res.json(allDrivers)

    } catch (error) {
        res.status(400).send({ error: "No drivers found" })
    }
};

module.exports = getDrivers