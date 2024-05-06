const express = require('express');
const axios = require('axios');
const cors = require('cors');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const SlnEliteRoutes = require('./routes/SlnEliteRoute.js');

dotenv.config();

const app = express();
const Port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello, welcome to SLN ELITE Backend!');
});

app.use('/slnelite',SlnEliteRoutes);

app.listen(Port,()=>{
    console.log(`Server is running on ${Port}`);
});