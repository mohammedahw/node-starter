import { Request, Response, Router } from "express";
import * as authRouter from "./app/auth/auth.router";

export const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

router.use(authRouter.PREFIX, authRouter.router);
