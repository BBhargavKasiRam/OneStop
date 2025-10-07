import express from "express";
import {loginUser, registerUser, adminLogin} from '../controllers/userController.js'

const userRounter =express.Router();

userRounter.post('/regiter',registerUser)
userRounter.post('/login'.loginUser)
userRounter.post('./admin',adminLogin)

export default userRouter