var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Add A Puppy!' });
});

router.get('/puppies/new', function(req, res, next) {
  res.render('puppiesnew');
});

router.post('/puppies', function(req, res, next) {
   res.render('puppytable', {
    name:req.body.text1,
    id:req.body.text2
   });
});


module.exports = router;
