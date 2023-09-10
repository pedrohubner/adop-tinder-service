const app = require('express')();
const bodyParser = require("body-parser");
const PORT = 8080;

app.use(bodyParser.json());

var tshirt = require('./routes/home-route')(app);
var tshirt = require('./routes/customer-route')(app);
var tshirt = require('./routes/pet-route')(app);

app.listen(PORT, () => {
    console.log('Servidor rodando na porta ' + PORT);
})