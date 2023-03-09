import { z } from "zod";

const PaginationSchema = z.object({
  skip: z.number().or(z.string().regex(/\d+/).transform(Number)).default(0),
  take: z.number().or(z.string().regex(/\d+/).transform(Number)).default(50),
});

export function getPagination(query: unknown) {
  const { skip, take } = PaginationSchema.parse(query);
  return { skip, take };
}
