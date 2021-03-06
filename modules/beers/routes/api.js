var express = require('express');
var router = express.Router();

var Controller = require('./../controller');

/* GET home page. */
router.get('/', function(req, res, next) {
	Controller.retrieve(req, res);
  //res.render('index', { title: 'Gezuis' });
});

router.get('/', function(req, res, next) {
	Controller.getNew(req, res);
  //res.render('index', { title: 'Gezuis' });
});

router.get('/', function(req, res, next) {
	Controller.get(req, res);
  //res.render('index', { title: 'Gezuis' });
});

router.post('/', function(req, res, next) {
	Controller.create(req, res);
  //res.render('index', { title: 'Gezuis' });
});

router.put('/:id', function(req, res, next) {
	Controller.update(req, res);
  //res.render('index', { title: 'Gezuis' });
});

router.delete('/:id', function(req, res, next) {
	Controller.delete(req, res);
  //res.render('index', { title: 'Gezuis' });
});

module.exports = router;
