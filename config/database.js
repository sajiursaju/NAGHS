const Sequelize = require('sequelize');


// module.exports =  new Sequelize('ischvfkd_company',
// 'ischvfkd_company','IarePass888', {

module.exports = new Sequelize('soft24', 'root', '', {

    host: 'localhost',
    dialect: 'mysql',
    operatorsAliases: false,

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
});