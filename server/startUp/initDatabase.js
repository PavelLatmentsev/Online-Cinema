
const movieMock = require("../mock/movie.json")
const genreMock = require("../mock/genre.json")
const filmsMock = require("../mock/films.json")
const Movie = require("../models/Movie")
const Genre = require("../models/Genre")
const Film = require("../models/Film")
module.exports = async () => {
    const movie = await Movie.find()
    if (movie.length !== movieMock.length) {
        await createInitialEntity(Movie, movieMock)
    }
    const genre = await Genre.find()
    if (genre.length !== genreMock.length) {
        await createInitialEntity(Genre, genreMock)
    }
    const films = await Film.find()
    if (films.length !== filmsMock.length) {
        await createInitialEntity(Film, filmsMock)
    }
}

async function createInitialEntity(Model, data) {
    await Model.collection.drop()
    return Promise.all(
        data.map(async item => {
            try {
                delete item._id
                const newItem = new Model(item)
                await newItem.save()
                return newItem
            } catch (e) {
                return e
            }
        })
    )
}