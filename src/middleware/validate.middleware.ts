import { validationResult } from "express-validator";

import { Request, Response, NextFunction } from "express";

export const validate = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,

      error: {
        code: "VALIDATION_ERROR",

        message: errors.array()[0].msg,
      },
    });
  }

  next();
};
