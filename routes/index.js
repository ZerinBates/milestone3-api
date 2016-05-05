var express = require('express');
var router = express.Router();
var entries = [{slug:"what did I learn today",body:"that I am awesome"},{slug:"da da da",body:"dobedobedobe"}]
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Today I Learned' });
});
router.get('/til',function(req, res, next){
  res.render('todayILearned',{title:'Today I Learned',entries:entries});
});
router.get('/add', function(req, res, next) {
  res.render('/til/add', { title: 'build data here', entries:entries});
});
/*when you hit submit*/
router.get('/create', function(req, res, next) {
  console.log(req.query);
  entries.push(req.query);
  console.log(entries);
  res.render('todayILearned', { title: 'Today I Learned', entries:entries});
});

  
module.exports = router;
