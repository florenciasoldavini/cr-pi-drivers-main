const { Driver } = require('../db');

const deleteDriver = async (req, res) => {
    const id = req.params.idDriver;

    if (id) {
        try {
            await Driver.destroy({
                where: { id: id }
            });
            res.json(id);
        } catch (error) {
            res.status(500).send({ error: error.message });
        };
    } else {
        res.status(422).send({ error: "Faltan datos" });
    };
};

module.exports = deleteDriver;