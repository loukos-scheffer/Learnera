const UserType = require("../enums/UserType");

module.exports.createPersonalUser = function(user, req) {
    user.firstName = req.body.firstName;
    user.lastName = req.body.lastName;
    
    return user;
}

module.exports.createCompanyUser = function(user, req, ownerUser) {

    user.address = req.body.address;
    user.type = UserType.company;
    user.website = req.body.website;
    user.phone = req.body.phone;
    user.ownerId = ownerUser.uid;
    user.companyName = req.body.companyName;
    return user;
}