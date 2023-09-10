const service = require("../services/home-service");

module.exports = function (app) {
    app.get('/home', (req, res) => {
        let obj = service.getHome();
        res.status(200).send(obj);
    });
};
