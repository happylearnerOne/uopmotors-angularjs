var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res, next) {
  console.log("get indexTW");
  res.sendfile('./public/index.html', { title: 'Express of UOP' });
});

module.exports = router;
