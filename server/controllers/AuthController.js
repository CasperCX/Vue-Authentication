const mongoose = require("mongoose");
const User = mongoose.model("User");


module.exports = {
    auth (req, res) {
        res.send("auth");
    },

    async login (req, res) {
        try {
            const { email, password } = req.body;
            res.status(200).send({
                ok: `logged in successfully with: ${email} ${password}`
            })
        } catch(err) {
            res.send("failed login");
        }
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