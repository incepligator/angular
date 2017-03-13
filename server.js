var express=require('express');

var app=express();

app.use(express.static(__dirname+'/'));

//hosting static files
app.get('/jquery',function(req,res){
    
    res.redirect('/project4/views/index.html');
    
});

/*app.get('/',function(req,res){
    
    res.send("Hello world");
});*/

app.get('/',function(req,res){
    
    res.redirect('/views/index.html');
});



app.listen(4200,function(req,res){
    
    console.log("server running at port 4200:localhost:4200");
});
