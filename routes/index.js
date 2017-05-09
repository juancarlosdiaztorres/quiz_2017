var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

// Pagina de creditos
router.get('/author', function(req, res, next) {
    res.render('author');
});

//Pagina de Ayuda
router.get('/Ayuda', function(req, res, next) {
    res.render('Ayuda');
});
module.exports = router;
