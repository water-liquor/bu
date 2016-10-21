var express=require("express");
var bodyparser=require("body-parser");
var app=express();

//app.use("/",express.static("./m"));
app.get("/",express.static("./m"));
app.set("view engine","ejs");

var a="颜值爆表队";
var newslist=["新闻一","新闻二","新闻3"];
app.get("/form",function(req,res){
	res.render("form");
});

app.use(bodyparser.urlencoded({extended:false}));
app.post("/dopost",function(req,res){
	
	res.send("你好"+req.body.username);
});
app.get("/",function(req,res){
	res.render("list",{
		"pagev":a,
		"news":newslist
	})
})
app.listen(3000);