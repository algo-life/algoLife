const express = require('express');

const router = express.Router();

const authController = require('../controllers/authController');

router.post(
  '/signup',
  authController.create,
  authController.createUserObject,
  authController.createJWT,
  (req, res) => {
    res.status(200).json(res.locals.user);
  }
);

router.post(
  '/login',
  authController.login,
  authController.createUserObject,
  authController.createJWT,
  (req, res) => {
    res.status(200).json(res.locals.user);
  }
);

router.get('/logout', authController.logout, (req, res) => {
  res.redirect('/login');
});

router.get('/verify', authController.verifyJWT, (req, res) => {
  res.status(200).json(res.locals.user);
});

module.exports = router;
