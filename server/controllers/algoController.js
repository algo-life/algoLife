const db = require('../models/model');

const algoController = {};

algoController.viewedAlgorithm = (req, res, next) => {
  console.log('inside algoController.viewedAlgorithm');
  const { user_id, algorithm_id } = req.body;
  const query = `
  SELECT user_id, algorithm_id from users_algorithms
  WHERE user_id = ${user_id} AND algorithm_id = ${algorithm_id}
  `;

  db.query(query).then((response) => {
    if (response) {
      res.locals.viewed = response.rows[0];
      return next();
    }
  });
};

algoController.markViewed = (req, res, next) => {
  console.log('inside algoController.markViewed');
  if (res.locals.viewed) return next();
  else {
    const { user_id, algorithm_id } = req.body;
    const query = `
    INSERT into users_algorithms (user_id, algorithm_id)
    VALUES ('${user_id}', '${algorithm_id}')
    RETURNING *
    `;

    db.query(query).then((response) => {
      res.locals.viewed = response.rows[0];
      return next();
    });
  }
};

algoController.markSolved = (req, res, next) => {
  console.log('inside algoController.markSolved');
  const { user_id, algorithm_id } = req.body;
  const query = `
    UPDATE users_algorithms
    SET solved = true
    WHERE user_id = ${user_id} AND algorithm_id = ${algorithm_id}
    RETURNING user_id, algorithm_id, solved`;

  db.query(query).then((response) => {
    console.log(response.rows);
    res.locals.solved = response.rows[0];
    return next();
  });
};

algoController.markUnsolved = (req, res, next) => {
  console.log('inside algoController.markUnsolved');
  const { user_id, algorithm_id } = req.body;
  const query = `
    UPDATE users_algorithms
    SET solved = false
    WHERE user_id = ${user_id} AND algorithm_id = ${algorithm_id}
    RETURNING user_id, algorithm_id, solved`;

  db.query(query).then((response) => {
    res.locals.solved = response.rows[0];
    return next();
  });
};

algoController.saveSolution = (req, res, next) => {
  console.log('inside algoController.saveSolution');
  const { user_id, algorithm_id, solution } = req.body;
  const query = `
    UPDATE users_algorithms
    SET solution = '${solution}'
    WHERE user_id = ${user_id} AND algorithm_id = ${algorithm_id}
    RETURNING user_id, algorithm_id, solution`;

  db.query(query).then((response) => {
    res.locals.solution = response.rows[0];
    return next();
  });
};

algoController.submitAlgorithm = (req, res, next) => {
  console.log('inside algoController.submitAlgorithm');
  const { name, prompt, difficulty, test } = req.body;
  const query = `
    INSERT into algorithms (name, prompt, difficulty, test)
    VALUES ('${name}','${prompt}','${difficulty}', '${test}')
    ON CONFLICT (name) DO NOTHING
    RETURNING *`;

  db.query(query).then((response) => {
    res.locals.newAlgorithm = response.rows[0];
    return next();
  });
};

module.exports = algoController;
