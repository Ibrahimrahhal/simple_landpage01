const fs=require("fs");
const express = require('express');
const app = express();
var path = require('path')

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname + '/index.html'));
    
});
app.use(express.static(path.join(__dirname + '')));
app.listen(8080)