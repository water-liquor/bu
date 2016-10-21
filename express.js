var express=require("express");
//console.log("卜莹莹");
var app=express();
app.get("/",function(req,res){
	res.send("您好 卜莹莹");
})
app.get("/stu",function(req,res){
	res.send("还有6天半就回家啦！");
})
app.get("/stu/:stuno",function(req,res){
	res.send("工作不好找啊！你的薪资是："+req.params.stuno);
})
app.get("/test",function(req,res){
	res.sendFile(__dirname+"/test.html");
});
app.get(/^\/student\/(\d{6})$/,function(req,res){
	res.send("周梦阳你的颜值是："+req.params[0]);
})
app.listen(3000);