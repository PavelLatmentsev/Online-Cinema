const express = require("express")
const router = express.Router({mergeParams:true})
const Movie = require("../models/Movie")

router.get("/", async(req,res) =>{
    try {
        const movies = await  Movie.find()
        res.status(200).send(movies)
    } catch (e) {
        res.status(500).json({
            message:"На сервере произошла ошибка. Попробуйте позже"
        })
    }
})

module.exports=router