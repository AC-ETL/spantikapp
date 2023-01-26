const db = require('../models');
const User = db.user;
const jwt = require('jsonwebtoken');
const config = require('../config/config');


const auth = (req, res, next) => {
    // get from cookie
    const token = req.cookies.JWT;
    // console.log(token)
    // check if token exists
    if (token) {
        jwt.verify(token,config.jwt.JWT_SECRET , (err, decoded) => {
            if (err) {
                console.log(err);
                res.redirect('/admin');
            } else {
                // console.log(decoded);
                res.locals.id = decoded.id
                    // console.log(res.locals.id)

                next();
            }
        });
    } else
        res.redirect('/admin');
}
module.exports = auth