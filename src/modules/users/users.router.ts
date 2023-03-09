import { Router } from "express";
import * as controller from "./users.controller";

export const PREFIX = "/users";

export const router = Router();

router.get("/", controller.list);
