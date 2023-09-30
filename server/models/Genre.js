const { Schema, model } = require("mongoose")

const schema = new Schema({
    genre: { type: String }
}, {
    timestamps: true
})

module.exports = model("Genre", schema)