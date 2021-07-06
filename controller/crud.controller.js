'use strict';
const cocktailModel = require('../model/Cocktail.model');
const axios = require('axios');




const base =(req, res)=>{
res.send('alive');
}


const getCocktail =(req,res)=>{
    axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic`).then(response=>{
        res.json(response.data.drinks)
    })
}


const postFav=(req,res)=>{
    const { strDrink , strDrinkThumb , idDrink} = req.body ;
    cocktailModel.find({idDrink:idDrink},(error,cocktailData)=>{
        if (error) {
            res.send(error)
        }else{
            if (cocktailData.length > 0) {
                res.send('existed')
            }else{
                let newCocktail = new cocktailModel({ strDrink:strDrink , strDrinkThumb:strDrinkThumb , idDrink:idDrink});
                newCocktail.save();
                res.json(cocktailData);
            }
        }
    })

}




const getFav=(req,res)=>{
    cocktailModel.find({},(error,cocktailData)=>{
        if (error) {
            res.send(error)
        }else{
            res.json(cocktailData)
        }
    })
}


const deleteFav=(req,res)=>{
    let {idDrink} = req.params;
    cocktailModel.remove({idDrink:idDrink},(error,cocktailData)=>{
        if (error) {
            res.send(error)
        }else{
            res.send(cocktailData)
        }
    })
}


const updateFav=(req,res)=>{
    let {idDrink} = req.params;
    let { strDrink , strDrinkThumb } = req.body;
    cocktailModel.find({idDrink:idDrink},(error,cocktailData)=>{
        if (error) {
            res.send(error)
        }else{
            cocktailData[0].strDrink=strDrink;
            cocktailData[0].strDrinkThumb=strDrinkThumb;
            cocktailData[0].save();
            res.json(cocktailData);
        }
    })
}



module.exports={base,
    getCocktail,
    postFav,
    getFav,
    deleteFav,
    updateFav};