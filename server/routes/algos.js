const express = require('express');

const router = express.Router();

const algoController = require('../controllers/algoController');

router.get('/test/:id', algoController.getTest, (req, res) => {
  res.status(200).json(res.locals.test);
});

module.exports = router;
