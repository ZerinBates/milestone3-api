var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send([
    { id: 1, slug: 'How to pass class', body: "Bring girl scout samoas Cookies!" },
    { id: 2, slug: 'How to fail class', body: "Dont do anything!" }
  ]);
});

module.exports = router;
