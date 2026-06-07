import { Response, NextFunction } from "express";

import { AuthRequest } from "../interfaces/auth-request.interface";

import { ApiError } from "../utils/ApiError";

export const authorize = (...roles: string[]) => {
  return (req: AuthRequest, res: Response, next: NextFunction) => {
    if (!req.user || !roles.includes(req.user.role)) {
      return next(new ApiError(403, "FORBIDDEN", "Access Denied"));
    }

    next();
  };
};
