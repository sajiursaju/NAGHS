const express = require('express');
const Teacher = require("../../models/Teacher");
const router = express.Router();

router.get('/', async(req, res) => {
    try {
        // Fetch teachers from the database
        const teachers = await Teacher.findAll(); // Assuming you are using Sequelize for database queries

        // Render the view with the teachers data
        res.render('teacher/admin_view_teacher', { layout: 'partials/dash-layout', user: req.session.user, teachers });
    } catch (error) {
        console.error('Error fetching teachers:', error);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;