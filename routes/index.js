var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/preview', function(req, res, next) {
  res.render('kyc_fisico', { name: 'Ethan' ,lastname: 'Cordero' });
});

module.exports = router;
