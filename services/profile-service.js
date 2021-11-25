let profile = require('../data/profile.json');

module.exports = (app) => {

    const getCurrentProfile = (req, res) => {
        res.json(profile);
    }

    /*
    const updateCurrentProfile = (req, res) => {
        //  console.log("asdas"+req.profile.name)
        console.log("req N "+req.body.name)
        console.log("req L "+req.body.location)
        console.log("pro fn " + profile['firstName'] )

        if (profile['firstName']) {
            profile['firstName'] = req.body.name
        }
        if (profile['bio']) {
            profile['bio'] = req.body.bio
        }
        if (profile['dateOfBirth']) {
            profile['dateOfBirth'] = req.body.dateOfBirth
        }
        if (profile['location']) {
            profile['location'] = req.body.location
        }
        if (profile['website']) {
            profile['website'] = req.body.website
        }

        console.log("pro fn " + profile['firstName'] )
        console.log("req N "+req.body.name)
        console.log("req L "+req.body.location)

        return {
            profile
        };
        res.json(profile);
    }

     */

    const updateCurrentProfile = (req, res) => {
        const editedProfile = req.body;
        for(const key in editedProfile){
            if(key == 'name'){
                profile['firstName'] = editedProfile['name'].split(" ")[0];
                profile['lastName'] = editedProfile['name'].split(" ")[1];
            }
            else{
                profile[key] = editedProfile[key];
            }
        }
        res.json(profile);
    }

    app.put('/api/profile', updateCurrentProfile);

    app.get('/api/profile', getCurrentProfile);
};