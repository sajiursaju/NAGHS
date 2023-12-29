const User = require('../models/user');
var session = require('express-session');
const Contact = require("../models/Contact");


function auth(req, res, next) {
    if (req.session.user) {
        console.log(req.session.user);
        next();
    } else {
        User.findOne({ where: { email: req.body.email, password: req.body.password }})
        .then(user => {
            if (user) {
                req.session.user = user;
                next();
            } else {
                res.redirect('/login');
            }
        })
        .catch(err => res.redirect('/login'));
        
    }   
}

module.exports = auth;