const db = require('../models/model');

const algoController = {};

algoController.getExampleAlgos = (req, res, next) => {
  console.log('inside getExampleAlgos');
  next();
};

module.exports = algoController;
