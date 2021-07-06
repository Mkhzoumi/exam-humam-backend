'use strict'
const express = require('express')
const app = express()
const cors = require('cors');
app.use(cors());
app.use(express.json());
require('dotenv').config();
const port = process.env.PORT;
const dataBase = process.env.DATABASE_URL;
const { base,
    getCocktail,
    postFav,
    getFav,
    deleteFav,
    updateFav } = require('./controller/crud.controller')





const mongoose = require('mongoose');
mongoose.connect(`${dataBase}`,
    { useNewUrlParser: true, useUnifiedTopology: true });



app.get('/', base)
app.get('/Cocktail', getCocktail)
app.post('/favorite', postFav)
app.get('/favorite', getFav)
app.delete('/favorite/:idDrink', deleteFav)
app.put('/favorite/:idDrink', updateFav)

app.listen(port);