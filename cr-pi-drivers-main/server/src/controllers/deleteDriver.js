const { Driver } = require('../db');

const deleteDriver = async (req, res) => {
    const id = req.params.idDriver;

    console.log("Entro al delete del back");
    if (id) {
        try {
            const dbDriver = await Driver.destroy({
                where: { id: id }
            });
            res.json("Driver deleted")
        } catch (error) {
            res.status(400).send({ error: error.message })
        }
    } else {
        res.status(500).send({ error: "Driver not found" })
    }
};

module.exports = deleteDriver;