const express = require('express');
const color = require('colors');
const env = require('dotenv').config();

const app = express();

app.get("/",(req,res)=>{
    res.send("<h1>Welcome ECommerce App</h1>");
});

const port = process.env.PORT;
app.listen(port,()=>{
    console.log(`Server running on port ${port}`.bgMagenta.white);
});