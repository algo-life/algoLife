const express = require('express');

const router = express.Router();

const algoController = require('../controllers/algoController');

router.get('/test/:id', algoController.getTest, (req, res) => {
  res.status(200).json('did the thing');
});

module.exports = router;
