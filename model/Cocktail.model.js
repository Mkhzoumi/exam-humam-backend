'use strict';
const mongoose = require('mongoose');


const cocktailSchema = new mongoose.Schema({
    strDrink: String,
    strDrinkThumb: String,
    idDrink: String,

});


const cocktailModel = mongoose.model('Cocktail', cocktailSchema);







module.exports = cocktailModel;