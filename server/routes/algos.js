const express = require('express');

const router = express.Router();

const algoController = require('../controllers/algoController');

router.post(
  '/viewed',
  algoController.viewedAlgorithm,
  algoController.markViewed,
  (req, res) => {
    res.status(200).json(res.locals.viewed);
  }
);

router.post('/solve', algoController.markSolved, (req, res) => {
  res.status(200).json(res.locals.solved);
});

router.post('/solution', algoController.saveSolution, (req, res) => {
  res.status(200).json(res.locals.solution);
});

router.post('/submitalgorithm', algoController.submitAlgorithm, (req, res) => {
  res.status(200).json(res.locals.newAlgorithm);
});

module.exports = router;
