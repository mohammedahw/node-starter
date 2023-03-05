import { Request, Response, NextFunction, ErrorRequestHandler } from "express";
import * as customErrors from "../utils/errors";
import { ZodError } from "zod";
import { Prisma } from "@prisma/client";

export const errorHandler = (
  error: ErrorRequestHandler,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log(error);

  if (error instanceof customErrors.BadRequestException) {
    return res.status(error.status).json({ message: error.message });
  }

  if (error instanceof customErrors.UnauthorizedException) {
    return res.status(error.status).json({ message: error.message });
  }

  if (error instanceof customErrors.ForbiddenException) {
    return res.status(error.status).json({ message: error.message });
  }

  if (error instanceof customErrors.NotFoundException) {
    return res.status(error.status).json({ message: error.message });
  }

  if (error instanceof customErrors.InternalServerErrorException) {
    return res.status(error.status).json({ message: error.message });
  }

  if (error instanceof ZodError) {
    return res
      .status(400)
      .json({ message: "Bad Request", issues: error.format() });
  }

  if (error instanceof Prisma.PrismaClientUnknownRequestError) {
    return res.status(400).json({ message: error.message });
  }

  return res.status(500).json({ message: "Internal server error" });
};
