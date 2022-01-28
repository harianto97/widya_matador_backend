const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('widya_matador_db', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
});

(async ()=>{
    try {
        await sequelize.authenticate();
        console.log('connection to database success');
    } catch (error) {
        console.log('unable connect to database');
    }
})();

module.exports = sequelize;
