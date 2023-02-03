import { Request, Response } from "express";
import * as service from "./auth.service";
import * as validators from "./auth.validator";

export const login = async (req: Request, res: Response) => {
  const data = validators.loginSchema.parse(req.body);
  const result = await service.login(data);
  res.status(200).json(result);
};

export const register = async (req: Request, res: Response) => {
  const data = validators.registerSchema.parse(req.body);
  const result = await service.register(data);
  res.status(201).json(result);
};
