const express = require("express");
const mongoose = require("mongoose");
const path = require("path")
const chalk = require("chalk");
const config = require("config");
const initDatabase = require("./startUp/initDatabase");
const routes = require("./routes")
const cors = require("cors");
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use("/api", routes)

const PORT = config.get("port") ?? 3111;
async function start() {
    try {
        mongoose.connection.once("open", () => {
            initDatabase();
        });
        await mongoose.connect(config.get("mongoUri"));
        app.listen(PORT, () => {
            console.log(chalk.blue(`start app on port ${PORT}`));
        });
    } catch (e) {
        console.log(chalk.red(`${e.message}`));
        process.exit(1);
    }
}

start();