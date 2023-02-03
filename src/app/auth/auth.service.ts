import * as validators from "./auth.validator";
import * as jwt from "jsonwebtoken";
import * as bcrypt from "bcrypt";
import { prisma } from "../../prisma/prisma.service";
import { User } from "@prisma/client";
import { SECRET_KEY } from "../../utils/config";

export const reshapeUser = (user: User) => {
  const { password, ...rest } = user;
  return rest;
};

export const login = async (data: validators.LoginDto) => {
  const user = await prisma.user.findUnique({
    where: {
      email: data.email,
    },
  });

  if (!user) {
    throw new Error("User not found");
  }

  const passwordMatch = await bcrypt.compare(data.password, user.password);

  if (!passwordMatch) {
    throw new Error("Incorrect password");
  }

  const token = jwt.sign({ id: user.id }, SECRET_KEY, {
    expiresIn: "1d",
  });

  const { password, ...rest } = user;

  return {
    user: reshapeUser(user),
    token,
  };
};

export const register = async (data: validators.RegisterDto) => {
  const user = await prisma.user.findUnique({
    where: {
      email: data.email,
    },
  });

  if (user) {
    throw new Error("email already taken");
  }

  const hashedPassword = await bcrypt.hash(data.password, 10);
  data.password = hashedPassword;

  const createdUser = await prisma.user.create({ data });

  const token = jwt.sign({ id: createdUser.id }, SECRET_KEY, {
    expiresIn: "1d",
  });

  return {
    user: reshapeUser(createdUser),
    token,
  };
};
