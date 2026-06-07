import bcrypt from "bcrypt";

import { ENV } from "../config/env";

export const hashPassword = async (password: string) => {
  return bcrypt.hash(password, ENV.BCRYPT_SALT_ROUNDS);
};

export const comparePassword = async (password: string, hashed: string) => {
  return bcrypt.compare(password, hashed);
};
