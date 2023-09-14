const express = require("express");
const config = require("config");
const mongoose = require("mongoose");
const chalk = require("chalk");
const app = express()

const PORT = config.get("port") ?? 8080
app.listen(PORT, () => {
    console.log(chalk.green(`start app on port ${PORT}`))
})

if (process.env.NODE_ENV === "production") {
    console.log("production")
} else {
    console.log("development")
}