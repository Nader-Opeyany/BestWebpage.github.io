'use strict';
const express = require('express');
const app = express();

//endpoints here
app.get('/hello',function(req,res){
    res.type('text');
    res.send('Hello World');
});

app.use(express.statoc('public'));

const PORT = process.env.PORT || 8000;
app.listen(PORT);