import { Request, Response } from "express";
import * as service from "./auth.service";
import * as validators from "./auth.schema";

export const login = async (req: Request, res: Response) => {
  const data = validators.LoginSchema.parse(req.body);
  const response = await service.login(data);
  res.status(200).json(response);
};

export const register = async (req: Request, res: Response) => {
  const data = validators.RegisterSchema.parse(req.body);
  const response = await service.register(data);
  res.status(201).json(response);
};
