const { Schema, model } = require("mongoose");

const schema = new Schema(
  {
    name: { type: String },
    genre: { type: String },
    rating: { type: String },
    url: { type: String },
    isNewCinema: { type: Boolean },
    inCinema: { type: Boolean }
  },{ versionKey: false }
);

module.exports = model("Movie", schema);
