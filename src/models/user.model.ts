import { DataTypes, Model, Optional } from "sequelize";

import { sequelize } from "../config/database";

interface UserAttributes {
  id: number;

  firstName: string;

  lastName: string;

  email: string;

  password: string;

  role: string;

  status: string;

  isDeleted: boolean;

  createdAt?: Date;

  updatedAt?: Date;
}

type UserCreationAttributes = Optional<UserAttributes, "id" | "isDeleted">;

export class User
  extends Model<UserAttributes, UserCreationAttributes>
  implements UserAttributes
{
  id!: number;

  firstName!: string;

  lastName!: string;

  email!: string;

  password!: string;

  role!: string;

  status!: string;

  isDeleted!: boolean;

  readonly createdAt!: Date;

  readonly updatedAt!: Date;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    firstName: {
      type: DataTypes.STRING,

      allowNull: false,
    },

    lastName: {
      type: DataTypes.STRING,

      allowNull: false,
    },

    email: {
      type: DataTypes.STRING,

      unique: true,

      allowNull: false,
    },

    password: {
      type: DataTypes.STRING,

      allowNull: false,
    },

    role: {
      type: DataTypes.STRING,

      allowNull: false,
    },

    status: {
      type: DataTypes.ENUM("active", "deactive"),
      allowNull: false,
      defaultValue: "active",
    },

    isDeleted: {
      type: DataTypes.BOOLEAN,

      defaultValue: false,
    },
  },
  {
    sequelize,

    tableName: "users",

    timestamps: true,
  },
);
