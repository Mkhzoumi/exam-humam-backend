const express = require('express') 
const app = express() 
const cors = require('cors');
app.use(cors());
app.use(express.json());
require('dotenv').config();

const {base,
    getCocktail,
    postFav,
    getFav,
    deleteFav,
    updateFav} = require('./controller/crud.controller')




    const mongoose = require('mongoose');
    mongoose.connect('mongodb://localhost:27017/tests', {useNewUrlParser: true, useUnifiedTopology: true});













app.get('/',base )
app.get('/Cocktail' , getCocktail)
app.post('/favorite' , postFav)
app.get('/favorite' , getFav)
 app.delete('/favorite/:idDrink' , deleteFav)
app.put('/favorite/:idDrink' , updateFav)

app.listen(8080) 