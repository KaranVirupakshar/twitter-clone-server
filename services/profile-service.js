let profile = require('../data/profile.json');

module.exports = (app) => {

    const getCurrentProfile = (req, res) => {
        res.json(profile);
    }

    const updateCurrentProfile = (req, res) => {
      //  console.log("asdas"+req.profile.name)

        const p = req.body;
            profile['firstName'] = "Asda"

        return {

            profile

        };
        res.sendStatus(200);
    }
    app.put('/api/profile/:firstName/update', updateCurrentProfile);

    app.get('/api/profile', getCurrentProfile);
};
