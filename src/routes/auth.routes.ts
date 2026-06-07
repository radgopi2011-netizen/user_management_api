import {Router}from "express";

import {login}from "../controllers/auth.controller";

import {loginValidation}from "../validations/auth.validation";

import {validate}from "../middleware/validate.middleware";

import { loginLimiter}from "../middleware/loginRateLimiter.middleware";

const router = Router();

router.post("/login",loginLimiter,loginValidation,validate,login);

export default router;