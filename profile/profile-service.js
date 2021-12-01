const dao = require('./profile-dao')

module.exports = (app) => {

    const getCurrentProfile= (req, res) => {
        dao.getCurrentProfile()
            .then(profile => res.json(profile));

    }

    app.get("/rest/profile", getCurrentProfile);

    const updateCurrentProfile = (req, res) => {

        for(const key in req.body){
            if(key == 'name'){
                req.body['firstName'] = req.body['name'];
            }
            else{
                req.body[key] = req.body[key];
            }
        }

        dao.updateCurrentProfile(req.params.id, req.body)
            .then(status => res.send(status));
    }

    app.put("/rest/profile/:id", updateCurrentProfile);
}