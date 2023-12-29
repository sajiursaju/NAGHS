const express = require("express");
const Sequelize = require("sequelize");
const Team = require("../../models/Team");
const auth = require("../../middleware/auth");
const multer = require('multer');
const Op = Sequelize.Op;
const router = express();
// //contacts route
router.get("/members", async(req, res) => {
    Team.findAll()
        .then((team) =>
            res.render("team/members", {
                team,
                layout: "dash-layout",
            })
        )
        .catch((err) => res.render("error", { error: err }));

    // Display contact form
});
// //routing

router.get("/addmember", (req, res) => {
    res.render("team/addpage", {
        layout: "dash-layout",
    });
});

// Set The Storage Engine
const storage = multer.diskStorage({
    destination: './public/uploads/',
    filename: function(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

// Init Upload
const upload = multer({
    storage: storage,
    limits: { fileSize: 1000000 },
    fileFilter: function(req, file, cb) {
        checkFileType(file, cb);
    }
}).single('myImage');

// Check File Type
function checkFileType(file, cb) {
    const filetypes = /jpeg|jpg|png|gif|mp3|mp4/;
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    if (extname) {
        return cb(null, true);
    } else {
        cb('Error:Valid File');
    }
}


// File Validation and Upload
router.post('/addedmember', (req, res) => {
    upload(req, res, (err) => {
        if (err) {
            res.render('index', {
                msg: err
            });
        } else {
            if (req.file == undefined) {
                res.render('index', {
                    msg: 'Error: No File Selected!'
                });
            } else {
                res.render("team/addpage", {
                    email,
                    layout: 'dash-layout',
                    msg: 'File Uploaded!',
                    file: `uploads/${req.file.filename}`
                });
            }
        }
    });
});

module.exports = router;