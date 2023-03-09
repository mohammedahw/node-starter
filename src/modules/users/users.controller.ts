import { Request, Response } from "express";
import * as userService from "./users.service";

export async function list(req: Request, res: Response) {
  const response = await userService.list(req.query);
  return res.status(200).json(response);
}
