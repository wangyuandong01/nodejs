
var db=require('./db');
exports.regist=function(uname,pwd,callback)
{
    var sql = `insert into t_user(username,password) values('${uname}','${pwd}')`;
    db.query(sql,callback);
};