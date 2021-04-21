const db = require('../models/model');

const algoController = {};

algoController.getTest = (req, res, next) => {
  console.log('inside algoController.getTest');
  const { id } = req.params;
  const query = `
    SELECT * FROM tests
    WHERE _id = ${id}`;

  db.query(query).then((response) => {
    res.locals.test = response.rows[0];
    return next();
  });
};

module.exports = algoController;
