
var db=require('./db');
exports.regist=function(uname,pwd,callback)
{
    var sql = `insert into t_user(username,password) values('${uname}','${pwd}')`;
    db.query(sql,callback);
};
exports.getUserByNameAndPwd=function(name,pwd,callback)
{
    // var sql = "selection * from t_user where(username,password) values('"+${name}+"','"+${pwd}+"')";
    var sql = "select * from t_user where email='"+name+"' and password = '"+pwd+"'";
    db.query(sql,callback);
};