import userRepository from "../repositories/user.repository";

import { ApiError } from "../utils/ApiError";

import { ERROR_CODES } from "../constants/errorCodes";

import { hashPassword } from "../utils/hash";

import { getPagination } from "../utils/pagination";

class UserService {
  async createUser(payload: any) {
    const existing = await userRepository.findByEmail(payload.email);

    if (existing) {
      throw new ApiError(
        409,
        ERROR_CODES.DUPLICATE_EMAIL,
        "Email already exists",
      );
    }

    payload.password = await hashPassword(payload.password);

    return userRepository.create(payload);
  }

  async getUser(id: number) {
    const user = await userRepository.findById(id);

    if (!user) {
      throw new ApiError(404, ERROR_CODES.USER_NOT_FOUND, "User not found");
    }

    return user;
  }

  async getUsers(page: number, limit: number) {
    const pagination = getPagination(page, limit);

    return userRepository.findAll(pagination.offset, pagination.limit);
  }

  async updateUser(id: number, payload: any) {
    const user = await userRepository.findById(id);

    if (!user) {
      throw new ApiError(404, ERROR_CODES.USER_NOT_FOUND, "User not found");
    }

    await userRepository.update(id, payload);

    return userRepository.findById(id);
  }

  async deleteUser(id: number) {
    const user = await userRepository.findById(id);

    if (!user) {
      throw new ApiError(404, ERROR_CODES.USER_NOT_FOUND, "User not found");
    }

    await userRepository.softDelete(id);

    return true;
  }
}

export default new UserService();
