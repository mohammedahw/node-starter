import { Router } from "express";
import * as controller from "./auth.controller";

export const PREFIX = "/auth";

export const router = Router();

router.post("/login", controller.login);
router.post("/register", controller.register);
