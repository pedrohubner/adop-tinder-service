const petService = require("../services/pet-service");

module.exports = function (app) {
    app.get('/pet', (req, res) => {
        let obj = petService.getPets();
        res.status(200).send(obj);
    });

    app.post('/pet', (req, res) => {
        const { name, breed, age } = req.body;
        if (!name || !breed || !age) {
            res.status(400).send({ message: 'Todos os campos são obrigatórios' });
        }
        res.status(201).json({ name, breed, age });
    });
};
