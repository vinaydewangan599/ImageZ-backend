import express from 'express';  

import { registerUser, loginUser, userCredits} from '../controllers/userController.js';
import userAuth from '../middlewares/auth.js'; // Import the userAuth middleware


const userRouter = express.Router();


userRouter.post('/register', registerUser)
//https://localhost:4000/api/user/register

userRouter.post('/login', loginUser)
//https://localhost:4000/api/user/login

userRouter.get('/credits',userAuth, userCredits)
//https://localhost:4000/api/user/credits





export default userRouter