const express = require("express")
const router = express.Router({mergeParams:true})
const Film = require("../models/Film")

router.get("/", async(req,res) =>{
    try {
        const movies = await  Film.find()
        res.status(200).send(movies)
    } catch (e) {
        res.status(500).json({
            message:"На сервере фильмов произошла ошибка. Попробуйте позже"
        })
    }
})

module.exports=router