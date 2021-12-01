const model = require('./who-model');

const findAllWhos = () => model.find();

module.exports = {
    findAllWhos
};
