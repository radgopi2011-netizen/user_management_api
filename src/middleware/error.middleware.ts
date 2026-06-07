import { Request, Response, NextFunction } from "express";

import { ApiError } from "../utils/ApiError";

export const errorHandler = (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (error instanceof ApiError) {
    return res.status(error.statusCode).json({
      success: false,

      error: {
        code: error.code,

        message: error.message,
      },
    });
  }

  console.error(error);

  return res.status(500).json({
    success: false,

    error: {
      code: "INTERNAL_ERROR",

      message: "Something went wrong",
    },
  });
};
