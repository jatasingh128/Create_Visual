console.log("hello");
var express= require("express");
var app= express();

app.get('/',(req,res)=>{
    console.log("welcome to node js edited code from web");
})
app.listen(8000);
