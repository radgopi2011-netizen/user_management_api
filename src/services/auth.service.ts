import userRepository
from "../repositories/user.repository";

import { ApiError }
from "../utils/ApiError";

import { ERROR_CODES }
from "../constants/errorCodes";

import {
 comparePassword
}
from "../utils/hash";

import {
 generateToken
}
from "../utils/jwt";

class AuthService {

 async login(
  email: string,
  password: string
 ) {

  const user =
   await userRepository
    .findByEmail(email);

  if (!user) {

   throw new ApiError(
    401,
    ERROR_CODES.UNAUTHORIZED,
    "Invalid credentials"
   );
  }

  const valid =
   await comparePassword(
    password,
    user.password
   );

  if (!valid) {

   throw new ApiError(
    401,
    ERROR_CODES.UNAUTHORIZED,
    "Invalid credentials"
   );
  }

  const token =
   generateToken({

    userId: user.id,

    role: user.role
   });

  return {
   token,

   user: {
    id: user.id,

    firstName:
      user.firstName,

    lastName:
      user.lastName,

    email:
      user.email,

    role:
      user.role
   }
  };
 }
}

export default new AuthService();