const db = require('../models/model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const secret = process.env.SECRET;

const authController = {};

authController.create = (req, res, next) => {
  console.log('inside authController.create');

  const { username, password } = req.body;

  if (!username || !password) {
    return next({
      log: 'Error in authController.create',
      status: 400,
      message: 'Please provide a valid username and password.',
    });
  }

  const saltRounds = 10;

  bcrypt.hash(password, saltRounds).then((hash) => {
    const query = `
      INSERT INTO users (username, password)
      VALUES ($1, $2)
      RETURNING _id, username;
      `;
    db.query(query, [username, hash]).then((response) => {
      res.locals.user = response.rows[0];
      return next();
    });
  });
};

authController.login = (req, res, next) => {
  console.log('inside authController.login');

  const { username, password } = req.body;
  const query = `
    SELECT _id, username, password
    FROM users
    WHERE username = $1`;

  db.query(query, [username])
    .then((response) => {
      bcrypt.compare(password, response.rows[0].password, (err, result) => {
        if (err) {
          return next({
            log: 'Error in authController.login',
            status: 401,
            message: 'ERROR: Please provide a valid password.',
          });
        }

        if (!result) return res.status(401).json('Incorrect password.');
        if (result) {
          res.locals.user = {
            username: response.rows[0].username,
            _id: response.rows[0]._id,
          };
          return next();
        }
        // return next();
      });
    })
    .catch((err) => {
      console.log('.catch in authController.login', err);
      return next(err);
    });
};

authController.createUserObject = (req, res, next) => {
  console.log('inside authController.createUserObject');
  const { _id } = res.locals.user;
  const query1 = `
  SELECT * FROM algorithms
  `;
  const query2 = `
  SELECT * FROM users_algorithms
  WHERE user_id = ${_id}
  `;
  db.query(query1).then((response) => {
    res.locals.user.algorithms = response.rows;
  });

  db.query(query2).then((response) => {
    const userAlgos = [];
    if (response.rows) {
      for (let i = 0; i < response.rows.length; i++) {
        userAlgos.push(response.rows[i].algorithm_id);
      }
    }
    for (let i = 0; i < res.locals.user.algorithms.length; i++) {
      if (userAlgos.includes(res.locals.user.algorithms[i]._id)) {
        const index = userAlgos.findIndex(
          (x) => res.locals.user.algorithms[i]._id
        );
        res.locals.user.algorithms[i].saved = response.rows[index].saved;
        res.locals.user.algorithms[i].solved = response.rows[index].solved;
        res.locals.user.algorithms[i].solution = response.rows[index].solution;
        res.locals.user.algorithms[i].created_at =
          response.rows[index].created_at;
      } else {
        res.locals.user.algorithms[i].saved = false;
        res.locals.user.algorithms[i].solved = false;
        res.locals.user.algorithms[i].solution = null;
        res.locals.user.algorithms[i].created_at = null;
      }
    }
    return next();
  });
};

authController.createJWT = (req, res, next) => {
  console.log('inside authController.createJWT');

  const { username } = req.body;

  jwt.sign({ username }, secret, { expiresIn: '3600s' }, (err, token) => {
    if (err) return res.status(400).json('Error creating JWT');
    res.cookie('jwt', token, { httpOnly: true, maxAge: 60 * 60 * 1000 });
    return next();
  });
};

authController.verifyJWT = (req, res, next) => {
  console.log('inside authController.verifyJWT');
  const token = req.cookies.jwt;
  console.log('verifyJWT token: ', token);
  if (!token) return res.redirect('/login');

  jwt.verify(token, secret, (err, decoded) => {
    if (err) return res.status(400).json(err);
    const { username } = decoded;
    return next();
  });
};

authController.logout = (req, res, next) => {
  console.log('inside authController.logout');
  res.cookie('jwt', null);
  return next();
};

module.exports = authController;
