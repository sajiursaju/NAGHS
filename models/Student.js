const Sequelize = require('sequelize');
const db = require('../config/database');

const Student = db.define('student', {
    fname: {
        type: Sequelize.STRING
    },
    lname: {
        type: Sequelize.STRING
    },
    user_name: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    phone: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING
    }
});

Student.sync().then(() => {
    console.log('Stdents table created');
});
module.exports = Student;