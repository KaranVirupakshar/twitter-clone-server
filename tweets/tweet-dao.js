const model = require('./tweet-model');

const findAllTweets = () => model.find();

const deleteTweets = (id) =>
    model.remove({_id: id});

const createTweets = (tweet) =>
    model.create(tweet);

const updateTweets = (id, tweet) =>
    model.updateOne({_id: id},
        {$set: tweet});

module.exports = {
    findAllTweets, deleteTweets, createTweets, updateTweets
};
