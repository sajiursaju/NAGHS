const express = require('express');
const Teacher = require('../../models/Teacher');

const auth = require('../../middleware/auth');
const router = express.Router();


router.get('/', async(req, res) => {
    res.render('teacher/admin_add_teacher', { layout: 'partials/dash-layout' });
});

// sign up here
router.post("/", (req, res) => {
    let {
        name,

        email,
        website,
        mobile
    } = req.body;
    let errors = [];

    // Validate Fields
    if (!name) {
        errors.push({ text: "Please add a name" });
    }


    if (!email) {
        errors.push({ text: "Please add email" });
    }
    if (!website) {
        errors.push({ text: "Please add website" });
    }
    if (!mobile) {
        errors.push({ text: "Please add mobile" });
    }


    // Insert into table
    Teacher.create({
            name,

            email,
            website,
            mobile

        })
        .then((teacher) => res.redirect("/login"))
        .catch((err) => res.render("error", { error: err.message }));

});

module.exports = router;