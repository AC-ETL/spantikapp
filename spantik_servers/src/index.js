const app = require('./app');
const config = require('./config/config');
const sequelize = require('./config/db');

//Test if the db connection is OK
try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

//Server listening on port 
app.listen(config.app.port, () => console.log(`Listening on port ${config.app.port}`));