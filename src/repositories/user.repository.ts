import { User } from "../models/user.model";

class UserRepository {
  async create(payload: any) {
    return User.create(payload);
  }

  async findById(id: number) {
    return User.findOne({
      where: {
        id,
        isDeleted: false,
      },
    });
  }

  async findByEmail(email: string) {
    return User.findOne({
      where: { email },
    });
  }

  async findAll(offset: number, limit: number) {
    return User.findAndCountAll({
      where: {
        isDeleted: false,
      },

      offset,

      limit,

      order: [["createdAt", "DESC"]],
    });
  }

  async update(id: number, payload: any) {
    return User.update(payload, {
      where: { id },
    });
  }

  async softDelete(id: number) {
    return User.update(
      {
        isDeleted: true,
      },
      {
        where: { id },
      },
    );
  }
  
}

export default new UserRepository();
