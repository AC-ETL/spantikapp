const config = require('../config/config');
const validate = require('../validation/userPass.validate');
const jwt = require('jsonwebtoken');
const client = require('twilio')('ACf2f66ba91a71246a9a756f8be48a08ae', 'd974ca2720e2af89af10881173c63668');
const db = require('../models');
const User = db.User;

//that will generate send message
function sendTextMessage(number) {
    console.log(typeof(number),"number is send")
    const newNumber=number.replace("0","+92")
    console.log(newNumber)
    const otp = generateOtp();
    client.messages.create({
        body: "Hello, " + otp + " is your one-time passcode (OTP) for the your app.",
        to: newNumber,
        from: '+18782176875'
    }).then(message => console.log(message.sid,"sid twilo")).catch(e=>console.log(e,"errorssssssssssssssssssssssssss"));;
    console.log(otp)
    return otp;

}

//that will generate oTP
function generateOtp() {
    var digits = '0123456789';
    let OTP = '';
    for (let i = 0; i < 6; i++) {
        OTP += digits[Math.floor(Math.random() * 10)];
    }
    return OTP;
}

const postRegister = async (userBody) => {
    const userName = userBody.ownerName;
    // const cnicNumber = userBody.cnicNumber;
    console.log("user name is " + userName ,userBody.password,userBody.phoneNumber);
    const password = userBody.password;
    const user = await User.findOne({
        where: {
            phoneNumber: userBody.phoneNumber
        }
    }).then(async (user) => {
        if (user) {
            console.log('user is already exist');
            return 404;
        }
        else {
            const hash = await validate.hashIt(password);
            const user = await User.create({
                userName: userBody.ownerName,
                // cnicName: userBody.cnicName,
                cnicNumber: userBody.cnicNumber,
                phoneNumber: userBody.phoneNumber,
                storeName: userBody.shopName,
                location: userBody.address,
                password: hash
            });
            // sendTextMessage();
            const payload = { phoneNumber: userBody.phoneNumber, id: user.id };
            // console.log(payload);
            // const key= require('crypto').randomBytes(64).toString('hex');
            // console.log(key);
            const accessToken = jwt.sign(payload, config.jwt.JWT_SECRET, { expiresIn: config.jwt.JWT_ACCESS_EXPIRATION_MINUTES });

            console.log(accessToken);

            return ({ user, ...{ accessToken } });
        }
    })
    // console.log(user);
    return user;
};

const signinUser = async (userBody) => {
    const { phoneNumber, password } = userBody; // getting value
    const user = await User.findOne({ where: { phoneNumber: phoneNumber } }); //find phoneNumber
    if (user) {
        const comparePassword = await validate.compareHash(password, user.password); // compare pass
        if (comparePassword == true) {
            const payload = { id: user.id, user: user.userName };
            const accessToken = jwt.sign(payload, config.jwt.JWT_SECRET, { expiresIn: config.jwt.JWT_ACCESS_EXPIRATION_MINUTES });
            return ({ user, ...{ accessToken } });
        }
        else {
            return 2;
        }
    }
    else {
        return false;
    }
};

// otp send and store into database
const generateOTP = async (userBody) => {
    const user = await User.findOne({ where: { phoneNumber: userBody.phoneNumber } });
    if (!user) {
        return "Number isn't registered";
    }
    else {

        const otpCode = sendTextMessage(userBody.phoneNumber);
        const otpInsert = await User.update({ otp: otpCode }, { where: { id: user.id } });
        // const otpInsert = await User.update({ otp: 96812 }, { where: { id: user.id } });
        return otpInsert;
    }
};

const newPassword = async (userBody) => {
    const user = await User .findOne({where: { phoneNumber: userBody.phoneNumber}});
    const userOtp = parseInt(userBody.otp);
    if(user.otp === userOtp)
    {
        const hash = await validate.hashIt(userBody.password);
        const updatePassword = await User.update({password: hash}, {where : { id : user.id}});
        return updatePassword;
    }
    else
    {
        return 0;
    }
}
const changePassword = async (userBody) => {
    const user = await User .findOne({where: { id: userBody.id}});
    const comparePassword = await validate.compareHash(userBody.oldpassword, user.password); // compare pass
    
    if (comparePassword == true) {
        const hash = await validate.hashIt(userBody.newpassword);
        const updatePassword = await User.update({password: hash}, {where : { id : user.id}});
        return updatePassword;

    }
    else
    {
        return 0;
    }
}

module.exports = {
    postRegister,
    signinUser,
    generateOTP,
    newPassword,
    changePassword
};