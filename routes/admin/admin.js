const express = require('express');
const User = require('../../models/user');
const Contact = require("../../models/Contact");
const auth = require('../../middleware/auth');
const router = express.Router();


router.get('/', async(req, res) => {
    res.render('admin/admin', { layout: false, user: req.session.user });
});



module.exports = router;