import { Router } from "express";
import { registerUser } from "../controllers/auth.controllers.js";
import { validate } from "../middlewares/vaildator.middleware.js";
import { userRegistorValidator } from "../validators/index.js";

const router = Router();

router.route("/register").post(userRegistorValidator(), validate, registerUser);

export default router;
