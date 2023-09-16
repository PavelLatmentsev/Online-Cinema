const { Schema, model } = require("mongoose")

const schema = new Schema({
    name: { type: String },
    date: { type: String },
}, {
    timestamps: true
})

module.exports = model("Movie", schema)