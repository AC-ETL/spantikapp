const authService = require('../services/auth.service');
const config = require('../config/config');

//this signin controller for Admin
const singinUser = async (req, res) => {
  const user = await authService.signinUser(req.body);
  console.log(user);

  if(!user){
    res.status(404).send("Not Found");
  }
  else if(user === 2){
    res.json({
      status: 401
    })
  }
  else {
    if (!user.user.isAdmin) {
      res.json({
        status : 404
      });
    }
    else {
      const tokenAge = 2 * 24 * 60 * 60 * 1000;
      res.cookie('JWT', user.accessToken, {
        httpOnly: true, maxAge: tokenAge
      });
      res.json({
        status: 200,
        data: {
          userName: user.user.userName
        }
      });
    }
  }
};

// this is for signin for user
const signInUser = async(req, res) => {
  const user = await authService.signinUser(req.body);
  console.log(user);
  if (!user) {
    res.status(404).json({
      error :"User does not exist."
    });
  }
  else if(user === 2)
  {
    res.status(403).send("Wrong Phone Number or Password.");
  }
   else {
    res.status(200).json({
      user:{
        jwt: user.accessToken,
        userId : user.user.id,
        userName : user.user.userName,
        phoneNumber : user.user.phoneNumber
      }
    })
  }
}

//user creation for Admin
const postRegister = async (req, res) => {
  const user = await authService.postRegister(req.body);
  if (!user) {
    res.status(404).send("Not Found");
  }
  else {
    const tokenAge = 2 * 24 * 60 * 60 * 1000;
    res.cookie('jwt', user.accessToken, {
      httpOnly: true, maxAge: tokenAge
    });
    res.status(200).json({
      status: true,
      data: {
        userName: user.user.userName
      }
    });
  }
};

//User creation for user
const userRegister = async (req, res) => {
  const user = await authService.postRegister(req.body);
  if (!user) {
    res.send(404).send("Not Found");
  }
  else {
    res.status(200).json({
      user: user.accessToken,
    })
  }
}

//generate User OTP
const generateOtp = async (req, res) => {

  const generateOtp = await authService.generateOTP(req.body);
  if(!generateOtp) {
    res.send(404).send("Not Found");
  }
  else {
    res.status(200).send("Otp Successfully send.");
  }
};

//this function will update the password of the user
const newPassword = async (req, res) =>{
   await authService.newPassword(req.body)
      .then((data) => {
        if (data === 0) {
          res.send("error occured!");
        } else {
          res.send("Record updated");
        }
    })
    .catch((err) => {
        console.log(err);
        res.send(err);
    })
};
//this function will update the password of the user
const changePassword = async (req, res) =>{
   await authService.changePassword(req.body)
      .then((data) => {
        if (data === 0) {
          res.send("error occured!");
        } else {
          res.send("Record updated");
        }
    })
    .catch((err) => {
        console.log(err);
        res.send(err);
    })
};

module.exports = {
  singinUser,
  postRegister,
  userRegister,
  signInUser,
  generateOtp,
  newPassword,
  changePassword
}