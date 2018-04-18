const mongoose = require("mongoose");
const User = mongoose.model("User");


module.exports = {
    auth (req, res) {
        res.send("auth");
    },

    logout (req, res) {
        req.logout();
        res.redirect('/');
    },

    currentUser (req, res) {
        res.send("user");
    },

    createUser (req, res) {
        res.send("create user here");
    }
};