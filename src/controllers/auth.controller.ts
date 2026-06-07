import { Request,Response,NextFunction} from "express";

import authService from "../services/auth.service";

import {ApiResponse} from "../utils/ApiResponse";

export const login = async (req: Request,res: Response,next: NextFunction) => {

 try {

  const result = await authService.login(
    req.body.email,
    req.body.password
   );

  return res.status(200)
   .json(ApiResponse.success(result,"Login Successful"));

 } catch (error) {

  next(error);
 }
};