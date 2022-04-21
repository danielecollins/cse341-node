const routes = require('express').Router();

routes.get('/', (req, res) => {
    res.send('Daniel Collins');
});

module.exports = routes;