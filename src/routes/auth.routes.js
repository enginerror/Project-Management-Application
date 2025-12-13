import { Router } from "express";
import { login, logoutUser, registerUser } from "../controllers/auth.controllers.js";
import  {validate}  from "../middlewares/vaildator.middleware.js";
import { userLoginValidator, userRegistorValidator } from "../validators/index.js";
import {verifyJWT} from '../middlewares/auth.middlewares.js'

const router = Router();

router.route("/register").post(userRegistorValidator(), validate, registerUser);
router.route("/login").post(userLoginValidator(), validate, login);
// secure routes
router.route("/logout").post(verifyJWT, logoutUser);

export default router;
