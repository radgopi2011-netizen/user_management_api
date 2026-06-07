import { ROLES } from './../constants/role';
import { Router } from "express";

import {
  createUser,
  getUser,
  getUsers,
  updateUser,
  deleteUser,
} from "../controllers/user.controller";

import { authMiddleware } from "../middleware/auth.middleware";

import { authorize } from "../middleware/role.middleware";

import { validate } from "../middleware/validate.middleware";

import {
  createUserValidation,
  updateUserValidation,
} from "../validations/user.validation";

const router = Router();

router.post("/",authMiddleware,authorize(ROLES.ADMINACCESS),createUserValidation,validate,createUser);

router.get("/",authMiddleware,getUsers);

router.get("/:id",authMiddleware,getUser);

router.put("/:id",authMiddleware,authorize(ROLES.ADMINACCESS),updateUserValidation,validate,updateUser);

router.delete("/:id",authMiddleware, authorize(ROLES.ADMINACCESS),deleteUser);

export default router;
