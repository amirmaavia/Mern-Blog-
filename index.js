const express = require('express')
const connect = require('./config/db')
require('dotenv').config()
const app = express()

//connect mogodb database
connect()

app.get('/', (req, res) => {
    res.send(`<html><b>you are in mern blogs</b></html>`)
})
const PORT = process.env.PORT || 5000
app.listen(PORT, () =>{
    console.log("your App is Running")
});
