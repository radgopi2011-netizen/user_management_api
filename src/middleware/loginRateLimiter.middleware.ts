import rateLimit from "express-rate-limit";

export const loginLimiter = rateLimit({
  windowMs: 2 * 60 * 1000,

  max: 5,

  standardHeaders: true,

  legacyHeaders: false,

  message: {
    success: false,

    error: {
      code: "TOO_MANY_ATTEMPTS",

      message: "Too many login attempts. Try later.",
    },
  },
});
