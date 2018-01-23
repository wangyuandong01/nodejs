

var userModel=require("../models/userModel");
exports.login = function (req,res) {
    res.render('login')
};
exports.reg = function (req,res) {
    res.render('regist');
};
exports.regist = function (req,res) {
    var uname=req.query.name;
    var pwd = req.query.pwd;
    var pwd2=req.query.pwd2;
    fn=function (results) {
        res.send(results);
    };
    userModel.regist(uname,pwd,fn)
};
exports.checkLogin = function (req,res) {
    var name=req.body.name;
    var pwd = req.body.pwd;
    userModel.getUserByNameAndPwd(name,pwd,function (results) {
        if(results.length>0){
           req.session.loginUser=results[0];
           res.redirect('/');
        }else{
            res.redirect('login');
        }
    })
        

};

















