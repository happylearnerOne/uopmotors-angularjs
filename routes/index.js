var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/indexUS', function(req, res, next) {
  //這種寫法表示default generate jade的index
  //res.render('index', { title: 'Express of UOP' });
  //這種寫法表示default generate /public/index.html
  console.log("in root ");
  res.sendfile('./public/indexUS.html', { title: 'Express of UOP' });
});


module.exports = router;
