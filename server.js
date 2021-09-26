console.log("hello");
var express= require("express");
var app= express();

app.get('/',(req,res)=>{
    console.log("welcome to node js edited code from web");
    console.log("hi")
})
app.listen(8000);
