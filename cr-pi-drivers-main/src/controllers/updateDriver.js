const { Driver } = require('../db');

const updateDriver = async (req, res) => {
    try {
        const { forename, surname, description, image, nationality, dob, teams } = req.body;
        const id = req.params.idDriver;

        await Driver.update({
            forename,
            surname,
            image,
            dob,
            nationality,
            teams,
            description,
        }, {
            where: {
                id: id
            }
        });
        res.status(204);
    } catch (error) {
        res.status(500).send({ error: error.message });
    };
};

module.exports = updateDriver;