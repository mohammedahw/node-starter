import { Request, Response, Router } from "express";
import * as authRouter from "./modules/auth/auth.router";
import * as userRouter from "./modules/users/users.router";

export const router = Router();

router.use(authRouter.PREFIX, authRouter.router);
router.use(userRouter.PREFIX, userRouter.router);
