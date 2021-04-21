const express = require('express');

const router = express.Router();

const authController = require('../controllers/authController');

router.post(
  '/signup',
  authController.create,
  authController.createJWT,
  (req, res) => {
    console.log('about to send', res.locals.user);
    res.status(200).json(res.locals.user);
  }
);

router.post(
  '/login',
  authController.login,
  authController.createJWT,
  // authController.verifyJWT,
  (req, res) => {
    res.status(200).json(res.locals.user);
  }
);

router.get('/logout', authController.logout, (req, res) => {
  res.status(200).json('Successfully logged out.');
});

module.exports = router;
