import { prisma } from "../../prisma/prisma.service";
import { getPagination } from "../common/pagination";

export async function list(query?: unknown) {
  const { skip, take } = getPagination(query);

  return prisma.user.findMany({
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
}
