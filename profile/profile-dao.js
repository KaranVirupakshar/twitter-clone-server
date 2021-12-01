const model = require('./profile-model');

const getCurrentProfile = () => model.find();

const updateCurrentProfile = (id, profile) =>
    model.updateOne({_id: id},
        {$set: profile});

module.exports = {
    getCurrentProfile, updateCurrentProfile
};
