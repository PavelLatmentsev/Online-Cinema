const express = require("express")
const router = express.Router({mergeParams:true})

router.use("/movies", require("./movies.routes"))

module.exports=router