const express=require('express');
const authController= require('../controllers/auth.controller');

const router=express.Router();

router
    .route('/register')
    .post(authController.postRegister)

router
    .route('/login')
    .post(authController.singinUser)

router
    .route('/signup')
    .post(authController.userRegister)
    
router 
    .route('/signin')
    .post(authController.signInUser)

router 
    .route('/generateotp')
    .patch(authController.generateOtp)

router 
    .route('/newpassword')
    .patch(authController.newPassword)
router 
    .route('/changepassword')
    .patch(authController.changePassword)

module.exports=router;