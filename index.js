const express = require('express')
require('dotenv').config()
const app = express()

app.get('/', (req, res) => {
    res.send(`<html><b>you are in mern blogs</b></html>`)
})
const PORT = process.env.PORT || 5000
app.listen(PORT, () =>{
    console.log("your App is Running")
});