const express = require("express")
const router = express.Router({mergeParams:true})
const Genre = require("../models/Genre")

router.get("/", async(req,res) =>{
    try {
        const genre = await  Genre.find()
        res.status(200).send(genre)
    } catch (e) {
        res.status(500).json({
            message:"На сервере произошла ошибка. Попробуйте позже"
        })
    }
})

module.exports=router