const express = require("express")
const router = express.Router({mergeParams:true})

router.use("/movies", require("./movies.routes"))
router.use("/genre", require("./genre.routes"))

module.exports=router