const Sequelize = require('sequelize');
const db = require('../config/database');

const Teacher = db.define('teacher', {
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

Teacher.sync().then(() => {
    console.log('Teachers table created');
});
module.exports = Teacher;