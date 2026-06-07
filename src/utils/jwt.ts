import jwt, { SignOptions } from "jsonwebtoken";
import { ENV } from "../config/env";
import { JwtPayload } from "../interfaces/jwt.interface";

export const generateToken = (payload: JwtPayload) => {
  const options: SignOptions = {
    expiresIn: ENV.JWT_EXPIRES_IN as SignOptions["expiresIn"],
  };

  return jwt.sign(payload, ENV.JWT_SECRET, options);
};

export const verifyToken = (token: string): JwtPayload => {
  return jwt.verify(token, ENV.JWT_SECRET) as JwtPayload;
};