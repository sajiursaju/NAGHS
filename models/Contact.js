const Sequelize = require('sequelize');
const db = require('../config/database');

const Contact = db.define('contact', {
  name: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  },
  subject: {
    type: Sequelize.STRING
  },
  message: {
    type: Sequelize.STRING
  }
});

Contact.sync().then(() => {
  console.log('contacts table created');
});
module.exports = Contact;