const dao = require('./who-dao')

module.exports = (app) => {

    const findAllWhos = (req, res) => {
        dao.findAllWhos()
            .then(who => res.json(who));
    }

    app.get("/rest/who", findAllWhos);
}