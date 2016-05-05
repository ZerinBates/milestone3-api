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
router.get('/til/add', function(req, res, next) {
  res.render('add', { title: 'build data here', entries:entries});
});
/*when you hit submit*/
router.get('/create', function(req, res, next) {
  console.log(req.query);
  entries.push(req.query);
  console.log(entries);
  res.render('todayILearned', { title: 'Today I Learned', entries:entries});
});
router.get('/delete/:id', function(req, res, next) {
  console.log(req.query);
  entries.remove(req.params.id);
  console.log(entries);
  res.render('todayILearned', { title: 'Today I Learned', entries:entries});
});
/*when you hit submit*/
router.get('/til/create', function(req, res, next) {
  console.log(req.query);
  entries.push(req.query);
  console.log(entries);
  res.render('todayILearned', { title: 'Today I Learned', entries:entries});
});
router.get('/:id',function(req,res,next){
  res.render('entry',{title:'Today I Learned',entry:entries[req.params.id]});
});

module.exports = router;
