const express = require('express');
const Teacher = require("../../models/Teacher");
const router = express.Router();

// Route to render the page with teachers awaiting approval
router.get('/', async(req, res) => {
    try {
        // Fetch teachers from the database
        const teachers = await Teacher.findAll({ where: { approved: false } }); // Assuming you have an 'approved' field in your Teacher model

        // Render the view with the teachers data
        res.render('teacher/admin_approve_teacher', { layout: 'partials/dash-layout', user: req.session.user, teachers });
    } catch (error) {
        console.error('Error fetching teachers:', error);
        res.status(500).send('Internal Server Error');
    }
});

// Route to handle the approval action
router.post('/approve/:teacherId', async(req, res) => {
    try {
        const teacherId = req.params.teacherId;

        // Update the teacher's 'approved' status to true
        await Teacher.update({ approved: true }, { where: { id: teacherId } });

        // Redirect to admin_view_teacher after approval
        res.redirect('/admin_view_teacher');
    } catch (error) {
        console.error('Error approving teacher:', error);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;