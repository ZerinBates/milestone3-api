var express = require('express');
var router = express.Router();
var entries = [{slug:"what did I learn today",body:"that I am awesome"},{slug:"da da da",body:"dobedobedobe"}]
/* READ all: GET entries listing. */
router.get('/', function(req, res, next) {
 req.db.driver.execQuery(
 "SELECT * FROM entries",
 function (err, data) {
 if(err){console.log(err);}
 console.log(data);
 res.render('todayILearned', { title: 'Today I Learned', entries: data });
 }
)
});
/* the create database router*/
router.get('/add', function(req, res, next) {
  res.render('til/add', { title: 'build data here', entries:entries});
});
/*when you hit submit*/
router.get('/create', function(req, res, next) {
  console.log(req.query);
  entries.push(req.query);
  console.log(entries);
  res.render('todayILearned', { title: 'Today I Learned', entries:entries});
});
router.get('/:id', function(req, res, next) {
  req.db.drivers.execQuery(
    'SELECT*FROM entries WHERE id='+ parseInt(req.params.id)+';',
    function(err,data){
      if (err){
        console.log(err);
      }
    }
  res.render('til/entry', { title: 'build data here', entry:data[0]});
}
};
  
});
module.exports = router;
