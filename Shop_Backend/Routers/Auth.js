import express from "express";
import { RegisterAccount, LoginAccount } from "../controllers/AuthController.js";
const router = express.Router();

router.post("/register-account", RegisterAccount);
router.post("/login-account", LoginAccount);

export default router;
