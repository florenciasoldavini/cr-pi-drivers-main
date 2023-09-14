const { Driver } = require('./../db');
const axios = require('axios');

const URL = "http://localhost:5000/drivers";

const getDriverByName = async (req, res) => {
    let { name } = req.query;

    if (name) {
        try {
            name = name.charAt(0).toUpperCase() + name.slice(1);

            const dbDrivers = await Driver.findAll({
                where: { forename: name }
            });

            const response = await axios.get(URL);
            const data = response.data;

            let apiDrivers = data.filter(driver => driver.name.forename === name);

            apiDrivers = apiDrivers.map((driver) => { 
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

            const allDrivers = dbDrivers.concat(apiDrivers);
            const limitedDrivers = allDrivers.slice(0, 15);
    
            res.json(limitedDrivers);
        } catch (error) {
            res.status(500).send({ error: error.message });
        };
    } else {
        res.status(422).send({ error: "Faltan datos" });
    };
};

module.exports = getDriverByName;