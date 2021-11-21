let profile = require('../data/profile.json');

module.exports = (app) => {

    const getCurrentProfile = (req, res) => {
        res.json(profile);
    }

    const updateCurrentProfile = (req, res) => {
      //  console.log("asdas"+req.profile.name)

        console.log("req N "+req.body.name)
        console.log("req L "+req.body.location)

        console.log("pro fn " + profile['firstName'] )

        profile['firstName'] = req.body.name
        profile['bio'] = req.body.bio
        profile['dateOfBirth'] = req.body.dateOfBirth
        profile['location'] = req.body.location
        profile['website'] = req.body.website

        console.log("pro fn " + profile['firstName'] )

        console.log("req N "+req.body.name)
        console.log("req L "+req.body.location)


        return {

            profile

        };
        res.sendStatus(200);
    }
    app.put('/api/profile', updateCurrentProfile);

    app.get('/api/profile', getCurrentProfile);
};
