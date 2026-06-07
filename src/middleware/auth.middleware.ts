import { Response, NextFunction } from "express";

import { AuthRequest } from "../interfaces/auth-request.interface";

import { verifyToken } from "../utils/jwt";

import { ApiError } from "../utils/ApiError";

import { ERROR_CODES } from "../constants/errorCodes";

export const authMiddleware = (
  req: AuthRequest,
  res: Response,
  next: NextFunction,
) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      throw new ApiError(401, ERROR_CODES.UNAUTHORIZED, "Token Missing");
    }

    const token = authHeader.split(" ")[1];

    req.user = verifyToken(token);

    next();
  } catch {
    next(new ApiError(401, ERROR_CODES.UNAUTHORIZED, "Invalid Token"));
  }
};
