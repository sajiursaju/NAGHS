const express = require("express");
const Contact = require("../../models/Contact");
const Sequelize = require("sequelize");
const auth = require('../../middleware/auth');
const router = express.Router();
const Op = Sequelize.Op;


//contacts route
// router.get("/inbox", auth, async(req, res) => {
//     Contact.findAll()
//         .then((email) =>

//             res.render("email/inbox", {
//                 email,
//                 layout: 'dash-layout'
//             })
//         )
//         .catch((err) => res.render("error", { error: err }));

//     // Display contact form
// });

// router.get('/email_details', auth, async(req, res) => {
//     Contact.findAll()
//         .then((email) =>

//             res.render("email/email_detail", {
//                 email,
//                 layout: 'dash-layout'
//             })
//         );
// });



// Display contact form
router.get("/send", (req, res) => res.render("send"));

// send sms route
router.post("/send", (req, res) => {
    // let msg;
    let { name, email, subject, message } = req.body;
    let errors = [];

    // Validate Fields
    if (!name) {
        errors.push({ text: "Please add name" });
    }
    if (!email) {
        errors.push({ text: "Please add email" });
    }
    if (!subject) {
        errors.push({ text: "Please add subject" });
    }
    if (!message) {
        errors.push({ text: "Please add sms" });
    }

    // Check for errors
    if (errors.length > 0) {
        res.render("send", {
            errors,
            name,
            email,
            subject,
            message,
        });
    } else {
        if (!email) {
            email = "Unknown";
        } else {
            email = `${email}`;
        }

        // Make lowercase and remove space after comma
        name = name.toLowerCase().replace(/,[ ]+/g, ",");

        // Insert into table
        Contact.create({
                name,
                email,
                subject,
                message,
            })
            .then((contacts) =>
                res.render("home/home", {
                    layout: false,
                    msg: 'yes',
                })
            )
            .catch((err) => res.render("error", { error: err.message }));
    }
});




// delete

router.post("/deletemail/:id", (req, res) => {
    Contact.destroy({
            where: { id: req.params.id },
        })
        .then(() => res.redirect("/email/inbox"))

    .catch((error) => {
        console.log(error);
        res.status(404).send(error);
    });
});


module.exports = router;