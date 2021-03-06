const model = require('./model');

const findAllMovies = () => model.find();

const deleteMovie = (id) =>
    model.remove({_id: id});

const createMovie = (movie) =>
    model.create(movie);

const findMovieById = (id) =>
    model.findById(id);

const updateMovie = (id, movie) =>
    model.updateOne({_id: id},
        {$set: movie});


module.exports = {
    findAllMovies,deleteMovie,createMovie,findMovieById,updateMovie
};
