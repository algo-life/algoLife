const db = require('../models/model');

const algoController = {};

algoController.getTest = (req, res, next) => {
  console.log('inside algoController.getTest');
  const { id } = req.params.id;

  next();
};

module.exports = algoController;
