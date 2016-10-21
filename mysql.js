var express=require("express");
var mysql=require("sql");
var app=express();
app.set("view engine","ejs");
var clicent=mysql.creteConnection({
	host:'localhost',
	user:"root",
	password:'root',   //密码
	port:"3306",   //端口号
	database:"admint"   //数据库名
});
clicent.connect();
app.get("/list",function(req,res){
	clicent.query("select * from add_admint",function(err,result){
		if(err){
			throw err;
		}else{
			res.render("list",{
				"news":result
			})
		}
	});
})