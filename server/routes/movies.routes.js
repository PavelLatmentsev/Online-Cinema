const express = require("express")
const router = express.Router({mergeParams:true})
const Movie = require("../models/Movie")

router.get("/", async(req,res) =>{
    try {
        const movies = await  Movie.find()
        res.status(200).send(movies)
    } catch (e) {
        res.status(500).json({
            message:"На сервере фильмов произошла ошибка. Попробуйте позже"
        })
    }
})

router.get("/:id", async(req,res) =>{
    try {
        const {id} = req.params
        const movie = await Movie.findById(id)
        if(movie) {
             return res.status(200).send(movie)
        } else {
            return  res.status(401).json({message: 'movie not found'})
        }
      
    } catch (e) {
        res.status(500).json({
            message:"При поиске фильма произошла ошибка"
        })
    }
})

module.exports=router