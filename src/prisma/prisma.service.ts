import { PrismaClient } from "@prisma/client";
import { NODE_ENV } from "../config/env";

export const prisma = new PrismaClient({
  log: NODE_ENV === "development" ? ["query", "error", "info", "warn"] : [],
  errorFormat: "pretty",
});
