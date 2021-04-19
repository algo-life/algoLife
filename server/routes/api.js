const express = require('express');

const router = express.Router();

const algoController = require('../controllers/algoController');

router.get('/example', algoController.getExampleAlgos, (req, res) => {
  res.status(200).json(res.locals);
});

module.exports = router;
