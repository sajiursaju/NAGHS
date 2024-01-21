const Sequelize = require('sequelize');
const db = require('../config/database');

const Teacher = db.define('teacher', {
    name: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    website: {
        type: Sequelize.STRING
    },
    mobile: {
        type: Sequelize.STRING
    },
    approved: { // Add the 'approved' column
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
    }
});

Teacher.sync().then(() => {
    console.log('Teachers table created');
});

module.exports = Teacher;