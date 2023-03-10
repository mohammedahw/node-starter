import { User } from "@prisma/client";
import { prisma } from "../../prisma/prisma.service";
import { getPagination } from "../common/pagination";

export async function list(query?: unknown) {
  const { skip, take } = getPagination(query);

  const users = await prisma.user.findMany({
    skip,
    take,
    select: {
      id: true,
      email: true,
      firstName: true,
      lastName: true,
      image: true,
      username: true,
    },
  });

  const count = await prisma.user.count();

  return {
    data: users,
    count: count,
  };
}

export const reshapeUser = (user: User) => {
  const { password, ...rest } = user;
  return rest;
};
