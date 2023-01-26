    const path = require('path');
    //import dotenv
    const dotenv = require('dotenv');
    dotenv.config({ path: path.join(__dirname, '../../.env') });


const config = {
    app: {
        port: process.env.PORT
    },

    db: {
        host: process.env.HOST,
        user: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DATABASE,
        dbport: process.env.DBPORT
    },
    jwt: {
        JWT_SECRET: process.env.JWT_SECRET,
        JWT_ACCESS_EXPIRATION_MINUTES:process.env.JWT_ACCESS_EXPIRATION_MINUTES
    },
    firebaseConfig: {
        apiKey: process.env.API_KEY,
        authDomain: process.env.AUTH_DOMAIN,
        projectId: process.env.PROJECT_ID,
        databaseURL: process.env.DATABASE_URL,
        storageBucket: process.env.STORAGE_BUCKET,
        messagingSenderId: process.env.MESSAGING_SENDER_ID,
        appId: process.env.APP_ID,
        measurementId: process.env.MEASUREMENT_ID
    }
};


module.exports = config;

