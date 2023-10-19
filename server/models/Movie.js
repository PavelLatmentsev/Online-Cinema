const { Schema, model } = require("mongoose");

const schema = new Schema(
  {
    name: { type: String },
    genre: { type: String },
    rating: { type: String },
    url: { type: String },
    isNewCinema: { type: Boolean },
    inCinema: { type: Boolean },
    originalName: { type: String },
    ratingKinoarea: { type: String },
    description: { type: String },
    trailerUrl: { type: String }, 
    expectations: { type: String },
    favorites: { type: Boolean },
    release: { type: String },
    country: { type: String },
    tagline: { type: String },
    director: { type: String },
    scenarist: { type: String },
    producer: { type: String },
    operator: { type: String },
    composer: { type: String },
    artist: { type: String },
    installation: { type: String },
    premiereWorld: { type: String },
    premiereRF: { type: String },
    age: { type: String },
    timeMovie: { type: String },
  },{ versionKey: false }
);

module.exports = model("Movie", schema);
