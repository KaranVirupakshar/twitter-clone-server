const dao = require('./tweet-dao')

module.exports = (app) => {

    const findAllTweets = (req, res) =>
        dao.findAllTweets()
            .then(tweets => res.json(tweets));

    app.get("/rest/tweets", findAllTweets);

    const deleteTweets = (req, res) => {
        dao.deleteTweets(req.params.id)
            .then((status) => res.send(status));
    }
    app.delete("/rest/tweets/:id", deleteTweets);

    const createTweets = (req, res) =>
        dao.createTweets(req.body)
            .then((insertedTweet) => res.json(insertedTweet));

    app.post("/rest/tweets", createTweets);

    const updateTweets = (req, res) => {
        if (req.body.liked === true) {
            req.body.liked = false;
            req.body.stats.likes--;
        } else {
            req.body.liked = true;
            req.body.stats.likes++;
        }

        dao.updateTweets(req.params.id, req.body)
            .then(status => res.send(status));
    }

    app.put("/rest/tweets/:id", updateTweets);
}