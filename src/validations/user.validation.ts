import { body } from "express-validator";

export const createUserValidation = [
  body("firstName").notEmpty().withMessage("First Name is required"),

  body("lastName").notEmpty().withMessage("Last Name is required"),

  body("email").isEmail().withMessage("Valid email required"),

  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be minimum 6 characters"),

  body("role").notEmpty().withMessage("Role required"),

  body("status").notEmpty().withMessage("Status required"),
];

export const updateUserValidation = [
  body("firstName").optional(),

  body("lastName").optional(),

  body("role").optional(),

  body("status").optional(),
];
