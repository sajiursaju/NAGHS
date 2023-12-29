const Sequelize = require('sequelize');
const db = require('../config/database');
module.exports = (sequelize, DataTypes) => {
const Team = db.define('teams', {
  name: {
    type: Sequelize.STRING
  },

  profile_img: {
    type: Sequelize.STRING
  },
  job_title: {
    type: Sequelize.STRING
  },
  description: {
    type: Sequelize.STRING
  },
 
});

Team.sync().then(() => {
  console.log('team member  table created');
});
module.exports = Team;
}