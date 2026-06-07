import dotenv from "dotenv";

dotenv.config();

const requiredEnv = [
  "DB_HOST",
  "DB_PORT",
  "DB_NAME",
  "DB_USER",
  "DB_PASSWORD",
  "JWT_SECRET"
];

requiredEnv.forEach((key) => {
  if (!process.env[key]) {
    throw new Error(
      `Missing Environment Variable: ${key}`
    );
  }
});

export const ENV = {
  PORT: Number(process.env.PORT),
  CORS_ORIGIN:process.env.CORS_ORIGIN,
  DB_HOST: process.env.DB_HOST!,
  DB_PORT: Number(process.env.DB_PORT),

  DB_NAME: process.env.DB_NAME!,
  DB_USER: process.env.DB_USER!,
  DB_PASSWORD: process.env.DB_PASSWORD!,

  JWT_SECRET: process.env.JWT_SECRET!,
  JWT_EXPIRES_IN:
    process.env.JWT_EXPIRES_IN as string || "1h",

  BCRYPT_SALT_ROUNDS: Number(
    process.env.BCRYPT_SALT_ROUNDS
  )
  
};