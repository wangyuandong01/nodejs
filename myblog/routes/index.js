var express = require('express');
var user = require('../controllers/user');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'wangyuandong' });
});
router.get('/login',user.login);
router.get('/reg',user.reg);
router.post('/login',user.checkLogin);
router.get('/regist',user.regist);
router.post('/login', function(req, res, next) {
     var uname=req.body.uname;
     var pwd=req.body.pwd;
     if(uname=='wangwu'&&pwd=='1234'){
       res.render('index',{
         name:uname
         }
         );
     }
});

module.exports = router;
