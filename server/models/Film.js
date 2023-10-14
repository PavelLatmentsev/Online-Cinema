const { Schema, model } = require("mongoose");

const schema = new Schema(
  {
    name: { type: String },
    genre: { type: String },
    rating: { type: String },
    url: { type: String },
    isNew: { type: Boolean },
    inCinema: { type: Boolean }
  },
  {
    timestamps: true,
  }
);

module.exports = model("Film", schema);
