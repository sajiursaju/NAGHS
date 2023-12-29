const express = require("express");
const Sequelize = require("sequelize");
const User = require('../../models/user');
const auth = require('../../middleware/auth');
const router = express.Router();
var session = require('express-session');
const Op = Sequelize.Op;
//route
router.get('/', async(req, res) => {
    res.render('register/register', {layout: false});
  })
  
// sign up here
router.post("/", (req, res) => {
    let {
        name,
        password,
        email
    } = req.body;
    let errors = [];

    // Validate Fields
    if (!name) {
        errors.push({ text: "Please add a name" });
    }

    if (!password) {
        errors.push({ text: "Please add image" });
    }

    if (!email) {
        errors.push({ text: "Please add some sex" });
    }
    

        // Insert into table
        User.create({
            name,
            password,
            email
          
        })
            .then((user) => res.redirect("/login"))
            .catch((err) => res.render("error", { error: err.message }));
    
});
module.exports = router;