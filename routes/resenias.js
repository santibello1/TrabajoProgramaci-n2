var express = require('express');
var router = express.Router();
const controller = require('../controllers/reseniasController');

router.get('/crearResenia', function(req, res) {
    res.render('crearResenia');
  });

module.exports = router;