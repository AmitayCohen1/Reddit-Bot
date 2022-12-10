const express = require("express");
const app = express();
const botRoutes = require('./routes/bot')
require('dotenv').config()
const Snoowrap = require("snoowrap");

app.use(express.json())
app.use('/api/botRoutes', botRoutes)

app.get('/', (req,res) => { 
    console.log('sdfsdfs')
    res.send('nice')
})

app.listen(process.env.PORT || 8080, async () => {
    console.log('listening for requests on port', process.env.PORT)
})

