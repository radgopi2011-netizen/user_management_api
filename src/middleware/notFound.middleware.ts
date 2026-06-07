import { Request, Response } from "express";

export const notFound = (req: Request, res: Response) => {
  return res.status(404).json({
    success: false,

    error: {
      code: "NOT_FOUND",

      message: "Route Not Found",
    },
  });
};
