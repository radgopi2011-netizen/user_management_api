import {Request,Response,NextFunction}from "express";
import userService from "../services/user.service";
import {ApiResponse} from "../utils/ApiResponse";

export const createUser = async (req: Request,res: Response,next: NextFunction) => {

 try {

  const user =await userService.createUser(req.body);

  return res.status(201).json(ApiResponse.success(user,"User Created"));

 } catch (error) {

  next(error);
 }
};

export const getUser =async (req: Request,res: Response,next: NextFunction) => {

 try {

  const user = await userService.getUser(Number(req?.params?.id));

  return res.status(200).json(ApiResponse.success(user));

 } catch (error) {

  next(error);
 }
};

export const getUsers =async ( req: Request,res: Response,next: NextFunction) => {

 try {

  const page = Number(req.query.page) || 1;

  const limit = Number(req.query.limit) || 10;

  const users =await userService.getUsers(page,limit);

  return res.status(200).json(ApiResponse.success(users));

 } catch (error) {

  next(error);
 }
};

export const updateUser =async (req: Request,res: Response, next: NextFunction) => {

 try {

  const user =await userService.updateUser(Number(req.params.id),req.body);

  return res.status(200).json(ApiResponse.success(user,"User Updated"));

 } catch (error) {

  next(error);
 }
};

export const deleteUser =async (req: Request,res: Response,next: NextFunction) => {

 try {

  await userService.deleteUser(Number(req.params.id));

  return res.status(200).json(ApiResponse.success(null,"User Deleted"));

 } catch (error) {

  next(error);
 }
};