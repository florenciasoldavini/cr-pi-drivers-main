const { Driver } = require('./../db')

const postDriver = async (req, res) => {
    try {
        const { forename, surname, description, image, nationality, dob } = req.body;

        if (forename && surname && description && image && nationality && dob) {
            const newDriver = await Driver.create({
                forename,
                surname,
                description,
                image,
                nationality,
                dob,
            })
            res.send(newDriver)
        } else {
            res.status(401).send({ error: "Faltan datos" })
        }
    } catch (error) {
        res.status(500).send({ error: error.message })
    }
}

module.exports = postDriver